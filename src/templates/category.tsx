import React from 'react';
import { graphql } from 'gatsby';
import { WindowLocation } from '@reach/router';
import Layout from '../components/Layout';
import { CategoryTemplate } from './category-template';
import LazyImage, { FancyImage } from '../components/LazyImage';
import {
  GridContainerStyled,
  GridItemsList,
  Item,
  ItemLinkStyled,
  LinkTitle,
  imageTransition,
} from '../components/ImageLinkGrid';
import { useSearchIndex } from '../useSearchIndex';

interface CategoryRouteProps {
  data: CategoryPageQueryData;
  pageContext: {
    category: string;
    imagePath: string;
  };
  location: WindowLocation;
}

export default function CategoryRoute({
  data,
  pageContext,
  location,
}: CategoryRouteProps) {
  const searchIndex = useSearchIndex();
  const category = pageContext.category;
  const totalCount = data.allMarkdownRemark.totalCount;
  const categoryHeader = getHeader(totalCount);
  const headerImage = data.fileName;

  return (
    <Layout location={location} pageTitle={category}>
      <CategoryTemplate
        headerImageFile={headerImage}
        location={location}
        heading={category}
        subheading={categoryHeader}
        searchIndex={searchIndex}
      >
        <GridContainerStyled>
          <GridItemsList data-testid="category-recepies">
            {data.allMarkdownRemark.edges.map((edge) => (
              <Item key={edge.node.frontmatter.title}>
                <ItemLinkStyled to={edge.node.fields.slug}>
                  <LazyImage
                    image={edge.node.frontmatter.featuredimage}
                    imgStyle={imageTransition}
                    // aspectRatio={1}
                  />
                  <LinkTitle
                    className="link-title"
                    theme={edge.node.frontmatter.featuredimagetheme}
                  >
                    {edge.node.frontmatter.title}
                  </LinkTitle>
                </ItemLinkStyled>
              </Item>
            ))}
          </GridItemsList>
        </GridContainerStyled>
      </CategoryTemplate>
    </Layout>
  );
}

function getHeader(count: number) {
  return <>{count} recept</>;
}

interface CategoryPageQueryData {
  allMarkdownRemark: {
    totalCount: number;
    edges: {
      node: {
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          featuredimage: FancyImage;
          featuredimagetheme: number;
        };
      };
    }[];
  };
  fileName: FancyImage;
}

export const categoryPageQuery = graphql`
  query CategoryPage($category: String, $imagePath: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { eq: $category }, hidden: { ne: true } }
      }
    ) {
      totalCount
      edges {
        node {
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
    fileName: file(relativePath: { eq: $imagePath }) {
      childImageSharp {
        fluid(maxWidth: 5000) {
          src
          srcSet
          aspectRatio
          sizes
          base64
        }
      }
    }
  }
`;
