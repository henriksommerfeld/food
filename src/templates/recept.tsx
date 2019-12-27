import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import RecipeTemplate from './recipe-template';
import { editRecipeUrlFromAbsolutePath } from '../url-replacer';
import { Recipe, RecipeData } from '../interfaces/Recipe';
import { WindowLocation } from '@reach/router';

interface ReceptProps {
  data: RecipeData;
  location: WindowLocation;
}

export default function Recept({ data, ...props }: ReceptProps) {
  const { markdownRemark: post } = data;
  const frontmatter = post.frontmatter;
  const tags: string[] = (frontmatter.tags || []) as string[];
  // Gör ett komplext objekt av "receptet" istället för att skicka enskilda properties
  // Gör en datamappningsfunktion som översätter typad GQL till Recipie
  const recipe: Recipe = convert(data);

  return (
    <Layout
      location={props.location}
      pageTitle={frontmatter.title}
      pageDescription={frontmatter.description}
      editLink={editRecipeUrlFromAbsolutePath(post.fileAbsolutePath)}
    >
      <RecipeTemplate
        contentComponent={HTMLContent}
        recipie={recipe}
        location={props.location}
      />
    </Layout>
  );
}

function convert(data: RecipeData): Recipe {
  const { markdownRemark: post } = data;
  const frontmatter = post.frontmatter;
  const tags: string[] = (frontmatter.tags || []) as string[];

  return null;
}

export const pageQuery = graphql`
  query RecipeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fileAbsolutePath
      frontmatter {
        date(formatString: "DD MMMM, YYYY", locale: "sv")
        title
        tags
        description
        category
        servings
        servingslabel
        timeactive {
          hoursactive
          minutesactive
        }
        timepassive {
          dayspassive
          hourspassive
          minutespassive
        }
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1000) {
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
`;
