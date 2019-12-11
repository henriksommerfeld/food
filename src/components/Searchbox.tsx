import React, { useState, useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Index } from 'elasticlunr';
import styled from 'styled-components';
import { useGlobal } from 'reactn';
import { colors, layout, zIndexes } from '../constants';
import { tailwindColors } from '../tailwind-colors';
import { transparentizeHex } from '../color-convertions';
import SearchWhiteSvg from '../../static/img/search-white.svg';
import SearchGreySvg from '../../static/img/search-grey100.svg';
import { LocationProp } from 'interfaces/LocationProp';
import { useKeys } from '../useKeys';

export default function Searchbox({ location }: LocationProp) {
  const data = useStaticQuery(searchIndexQuery);
  const index = Index.load(data.siteSearchIndex.index);
  const [results, setResults] = useGlobal<SearchResults>('searchResults');
  const [route, setRoute] = useGlobal<SearchRoute>('searchRoute');
  const [query, setQuery] = useGlobal<SearchQuery>('searchQuery');
  const [hasFocus, setHasFocus] = useState(false);
  const [focusToggled, setFocus] = useGlobal<SearchFocus>('searchResultsFocus');
  const getPreviousQuery = (path: string) => (route === path ? query : '');
  const searchBoxRef = useRef(null);

  useEffect(() => {
    if (!route) {
      searchBoxRef.current.value = '';
    }
  }, [route]);

  const focusResults = (e: React.KeyboardEvent) => {
    if (!hasFocus || !results || !results.length) return;

    setFocus(!focusToggled);
    e.preventDefault();
  };

  useKeys(['Tab', 'ArrowDown', 'Enter'], focusResults);

  const queryInputChanged = evt => {
    const newQuery = evt.target.value.trim();
    if (newQuery.length > 2) {
      setQuery(newQuery);
      setRoute(location.pathname);
      search(newQuery);
    }
  };

  const search = (enteredQuery: string) => {
    const response = index
      .search(enteredQuery, { expand: true, bool: 'AND' })
      .map(({ ref }) => index.documentStore.getDoc(ref));

    setResults(response || []);
  };

  const onBlur = () => {
    setHasFocus(false);
  };

  return (
    <>
      <SearchArea>
        <SearchBox hasFocus={hasFocus}>
          <SearchBoxInput
            id="searchbox"
            ref={searchBoxRef}
            type="search"
            role="search"
            aria-label="Ange dina sökord här..."
            placeholder="Ange dina sökord här..."
            defaultValue={getPreviousQuery(location.pathname)}
            onChange={queryInputChanged}
            onFocus={() => setHasFocus(true)}
            onBlur={onBlur}
          />
          <SearchIcon
            src={hasFocus ? SearchWhiteSvg : SearchGreySvg}
            aria-hidden
          />
        </SearchBox>
      </SearchArea>
    </>
  );
}

const SearchArea = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${layout.contentMaxWidth}px;
  padding: 1rem;
`;

const SearchBox = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  width: 100%;
  border-radius: ${layout.borderRadius};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ hasFocus }) =>
    hasFocus ? colors.white : tailwindColors.gray100};

  background-color: ${({ hasFocus }) =>
    transparentizeHex(colors.white, hasFocus ? 0.7 : 0.6)};

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`;

const SearchBoxInput = styled('input')`
  width: 100%;
  z-index: ${zIndexes.searchBox};
  background-color: transparent;
  border: none;
  caret-color: ${tailwindColors.red700};
  color: ${colors.black};
`;

const SearchIcon = styled('img')`
  margin: 0;
  width: 1.5em;
`;

export interface SearchRoute {
  searchRoute: string;
}
export interface SearchQuery {
  searchQuery: string;
}
export interface SearchResults {
  searchResults: any[];
}

export interface SearchFocus {
  searchResultsFocus: boolean;
}

const searchIndexQuery = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`;
