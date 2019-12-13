import React from 'react';
import { graphql, Link } from 'gatsby';
import { WindowLocation } from '@reach/router';
import Layout from '../components/Layout';
import { CategoryTemplate } from './category-template';
import LazyImage, { FancyImage } from '../components/LazyImage';

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
      >
        {data.allMarkdownRemark.edges.map(edge => (
          <Link to={edge.node.fields.slug}>
            {edge.node.frontmatter.title}
            {edge.node.frontmatter.description}
            <LazyImage image={edge.node.frontmatter.featuredimage} />
          </Link>
        ))}
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
          description: string;
          featuredimage: FancyImage;
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
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
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
