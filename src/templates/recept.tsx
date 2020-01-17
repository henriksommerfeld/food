import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import RecipeTemplate from './recipe-template';
import { editRecipeUrlFromAbsolutePath } from '../url-replacer';
import { Recipe, RecipeQueryData } from '../interfaces/Recipe';
import { WindowLocation } from '@reach/router';
import { useSearchIndex } from '../useSearchIndex';
import { toIngredients, toInstructions } from '../recipe-mappers';

interface ReceptProps {
  data: RecipeQueryData;
  location: WindowLocation;
}

export default function Recept({ data, ...props }: ReceptProps) {
  const searchIndex = useSearchIndex();
  const { markdownRemark: post } = data;
  const recipe: Recipe = toRecipe(data);

  return (
    <Layout
      location={props.location}
      pageTitle={recipe.title}
      pageDescription={recipe.description}
      editLink={editRecipeUrlFromAbsolutePath(post.fileAbsolutePath)}
    >
      <RecipeTemplate
        contentComponent={HTMLContent}
        recipe={recipe}
        location={props.location}
        searchIndex={searchIndex}
      />
    </Layout>
  );
}

function toRecipe(data: RecipeQueryData): Recipe {
  const { markdownRemark: post } = data;
  const frontmatter = post.frontmatter;
  const tags: string[] = (frontmatter.tags || []) as string[];
  const ingredients = toIngredients(frontmatter.ingredients);
  const instructions = toInstructions(frontmatter.instructions);

  return {
    title: frontmatter.title,
    tags: tags,
    servings: frontmatter.servings,
    servingsUnit: frontmatter.servingslabel,
    id: post.id,
    body: post.html,
    category: frontmatter.category,
    description: frontmatter.description,
    cookingTime: {
      active: {
        hours: frontmatter.timeactive.hoursactive,
        minutes: frontmatter.timeactive.minutesactive,
      },
      waiting: {
        days: frontmatter.timepassive.dayspassive,
        hours: frontmatter.timepassive.hourspassive,
        minutes: frontmatter.timepassive.minutespassive,
      },
    },
    featuredImage: frontmatter.featuredimage,
    ingredients: ingredients,
    instructions: instructions,
  };
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
        ingredients {
          partingredients {
            partingredientsname
            partingredientslist {
              ingredient {
                ingredientamount
                unit
                ingredientname
              }
            }
          }
        }
        instructions {
          partinstructions {
            partinstructionsname
            partinstructionslist {
              instruction
            }
          }
        }
        featuredimage {
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
    }
  }
`;
