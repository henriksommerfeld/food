import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import RecipeTemplate from './recipe-template';
import { editRecipeUrlFromAbsolutePath } from '../url-replacer';

export default function Recept({ data, ...props }) {
  const { markdownRemark: post } = data;
  const frontmatter = post.frontmatter;
  const tags: string[] = (frontmatter.tags || []) as string[];

  return (
    <Layout
      location={props.location}
      pageTitle={frontmatter.title}
      pageDescription={frontmatter.description}
      editLink={editRecipeUrlFromAbsolutePath(post.fileAbsolutePath)}
    >
      <RecipeTemplate
        content={post.html}
        contentComponent={HTMLContent}
        date={frontmatter.date}
        tags={tags}
        title={frontmatter.title}
        category={frontmatter.category}
        location={props.location}
      />
    </Layout>
  );
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
      }
    }
  }
`;
