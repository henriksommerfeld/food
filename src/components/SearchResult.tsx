import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, layout, spacing, breakpoints } from '../constants';
import { transparentizeHex } from '../color-convertions';
import { useGlobal } from 'reactn';
import {
  SearchQuery,
  SearchRoute,
  SearchResults,
  SearchFocus,
} from './Searchbox';
import CloseSvg from '../../static/img/close.svg';
import BlogPostSvg from '../../static/img/blog-post-grey500.svg';
import { useEscKey } from '../useEscKey';
import { useTransition, animated, config } from 'react-spring';
import { LocationProp } from 'interfaces/LocationProp';

export default function SearchResult({ location }: LocationProp) {
  const [results, setResults] = useGlobal<SearchResults>('searchResults');
  const [route, setRoute] = useGlobal<SearchRoute>('searchRoute');
  const [query, setQuery] = useGlobal<SearchQuery>('searchQuery');
  const [focusToggled] = useGlobal<SearchFocus>('searchResultsFocus');
  const searchResultsRef = useRef(null);

  const containerTransitions = useTransition(
    shouldShowResults(results, route, location.pathname),
    null,
    opacityTransition
  );

  useEffect(() => {
    if (searchResultsRef && searchResultsRef.current)
      searchResultsRef.current.focus();
  }, [focusToggled]);

  const closeSearch = () => {
    setRoute('');
    setQuery('');
    setResults([]);
  };

  useEscKey(closeSearch);

  const container = containerTransitions.map(
    ({ item, key, props }) =>
      item && (
        <SearchResultsContainer
          key={key}
          style={props}
          data-testid="search-results"
        >
          <SearchResultsStyled className="search-results">
            <CloseButtonStyled
              onClick={closeSearch}
              aria-label="Stäng sökresultatet"
            >
              <CloseIcon src={CloseSvg} />
            </CloseButtonStyled>
            <HitsHeading>
              {results.length ? results.length : 'Inga'} träffar för{' '}
              <em>{query}</em>
            </HitsHeading>
            <LinksContainer>
              {results.map((page, index) => (
                <LinkContainer key={page.id}>
                  <LinkIconSvg src={BlogPostSvg} alt="" />
                  <div>
                    <Link
                      to={page.path}
                      ref={index === 0 ? searchResultsRef : null}
                    >
                      {page.title}
                    </Link>
                    <Excerpt>{page.excerpt}</Excerpt>
                  </div>
                </LinkContainer>
              ))}
            </LinksContainer>
          </SearchResultsStyled>
        </SearchResultsContainer>
      )
  );

  return <>{container}</>;
}

const opacityTransition = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  config: config.stiff,
};

function shouldShowResults(
  results: any,
  route: string,
  location: string
): boolean {
  if (route !== location) return false;
  if (!results || !Array.isArray(results)) return false;
  return true;
}

const Excerpt = styled('div')``;

const LinkIconSvg = styled('img')`
  margin: 0 0.5em 0 0;
  min-width: 1rem;
  vertical-align: text-top;
`;

const LinkContainer = styled('li')`
  display: flex;
  align-items: flex-start;
  list-style: none;
  margin-bottom: ${spacing.default};
`;

const LinksContainer = styled('ul')`
  margin: 0;
`;

const HitsHeading = styled('h2')`
  padding-right: 3rem;
`;

const CloseButtonStyled = styled('button')`
  background: ${colors.white};
  border: none;
  position: absolute;
  top: ${spacing.default};
  right: ${spacing.default};
  margin: 0;
  padding: 5px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.6);
  transition: transform 400ms ease, box-shadow 200ms ease;

  @media (min-width: ${breakpoints.small}) {
    top: -${spacing.default};
    right: -${spacing.default};
  }
  &:hover {
    transform: rotate(180deg) scale(1.1);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

const CloseIcon = styled('img')`
  width: 2rem;
  margin: 0;
`;

const SearchResultsContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: auto;
  min-height: 100%;
  top: ${156}px;
  left: 0;
  right: 0;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
  background-color: ${colors.white};

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: ${transparentizeHex(colors.white, 0.8)};
  }
`;

const SearchResultsStyled = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${transparentizeHex(colors.white, 0.9)};
  border-radius: ${layout.borderRadius};
  padding: ${spacing.double} ${spacing.default};
  width: 100%;

  @media (min-width: ${breakpoints.small}) {
    margin: ${spacing.double};
    padding: ${spacing.double};
    width: auto;
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
