import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
import { useEscKey } from '../useEscKey';
import { useTransition, animated, config } from 'react-spring';
import { LocationProp } from 'interfaces/LocationProp';
import {
  bannerMinHeightMedium,
  bannerMinHeight,
} from '../templates/shared-intro-banner';
import {
  GridContainerStyled,
  GridItemsList,
  Item,
  ItemLinkStyled,
  imageTransition,
  LinkTitle,
} from './ImageLinkGrid';
import LazyImage, { FancyImage } from './LazyImage';

export default function SearchResult({ location }: LocationProp) {
  const imagesData = useStaticQuery<ImagesQueryData>(imagesQuery);
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

  const getImage = (id: string): FancyImage | null => {
    if (!(imagesData?.allMarkdownRemark?.edges?.length > 0)) return null;

    const edge = imagesData.allMarkdownRemark.edges.find(x => x.node.id === id);
    if (!edge) return null;

    return edge.node.frontmatter.featuredimage;
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
              {results.length ? results.length : 'Inga'} recept för sökningen{' '}
              <em>{query}</em>
            </HitsHeading>
            <LinksContainer>
              <GridContainerStyled>
                <GridItemsList>
                  {results.map((page, index) => (
                    <Item key={page.id}>
                      <ItemLinkStyled
                        to={page.path}
                        ref={index === 0 ? searchResultsRef : null}
                      >
                        <LazyImage
                          image={getImage(page.id)}
                          imgStyle={imageTransition}
                          // aspectRatio={1}
                        />
                        <LinkTitle className="link-title" theme={page.theme}>
                          {page.title}
                        </LinkTitle>
                      </ItemLinkStyled>
                    </Item>
                  ))}
                </GridItemsList>
              </GridContainerStyled>
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

const LinksContainer = styled('ul')`
  margin: ${spacing.default} 0 0 0;
  width: 100%;
`;

const HitsHeading = styled('h2')`
  padding-left: 1rem;
  padding-right: 4rem;
  margin: 0;
`;

const CloseButtonStyled = styled('button')`
  background: ${colors.white};
  border: none;
  position: absolute;
  top: ${spacing.half};
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

  @media (min-width: ${breakpoints.medium}) {
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
  min-height: ${`calc(100% + ${bannerMinHeight})`};
  top: ${bannerMinHeight};
  left: 0;
  right: 0;
  padding: 0;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
  background-color: ${colors.white};

  @media (min-width: ${breakpoints.medium}) {
    top: ${bannerMinHeightMedium};
    padding: ${spacing.double};

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: ${transparentizeHex(colors.white, 0.8)};
    }
  }
`;

const SearchResultsStyled = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: ${layout.borderRadius};
  padding-top: ${spacing.default};
  width: 100%;

  @media (min-width: ${breakpoints.medium}) {
    background-color: ${transparentizeHex(colors.white, 0.9)};

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

interface ImagesQueryData {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: {
          featuredimage: FancyImage;
        };
      };
    }[];
  };
}

const imagesQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "recept" }, hidden: { ne: true } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            featuredimagetheme
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
`;
