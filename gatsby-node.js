// Add support for importing stuff written in TypeScript
require('source-map-support').install();
require('ts-node').register();

const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { getUniqueTags, getTagRouteUrl } = require('./src/tags-parser');
const { categoryLinks } = require('./src/constants');
const { removeRecipeFromUrl } = require('./src/url-replacer');

function getFileFrom(templateKey) {
  return templateKey + '.tsx';
}

exports.onCreateDevServer = ({ app }) => {
  const fsMiddlewareAPI = require('netlify-cms-backend-fs/dist/fs');
  fsMiddlewareAPI(app);
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  function createPagesFromContent(result) {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${getFileFrom(
            String(edge.node.frontmatter.templateKey)
          )}`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });

    // Eliminate duplicate tags
    const uniqueTags = getUniqueTags(tags);

    // Make tag pages
    uniqueTags.forEach((tag) => {
      const tagPath = getTagRouteUrl(tag);

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/taggar.tsx`),
        context: {
          tag,
        },
      });
    });

    categoryLinks.forEach((category) => {
      createPage({
        path: category.url,
        component: path.resolve(`src/templates/category.tsx`),
        context: {
          category: category.title,
          imagePath: category.imagePath,
        },
      });
    });
  }

  function getContent() {
    return graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          filter: { frontmatter: { hidden: { ne: true } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
                templateKey
                url
              }
            }
          }
        }
      }
    `);
  }

  return getContent().then(createPagesFromContent);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const filePath = node.frontmatter.url || createFilePath({ node, getNode });
    const route = removeRecipeFromUrl(filePath);
    createNodeField({
      name: `slug`,
      node,
      value: route,
    });
  }
};
