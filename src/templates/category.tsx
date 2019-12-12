import React from 'react';
import { graphql } from 'gatsby';
import { WindowLocation } from '@reach/router';
import Layout from '../components/Layout';
import { CategoryTemplate } from './category-template';
import { FancyImage } from 'components/LazyImage';

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
    <Layout location={location} editLink="" pageTitle={category}>
      <CategoryTemplate
        headerImageFile={headerImage}
        location={location}
        heading={category}
        subheading={categoryHeader}
      >
        Hejsan
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
