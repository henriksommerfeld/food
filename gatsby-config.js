require('dotenv').config();

const { transformerRemarkParser } = require('./src/transformerRemarkParser');
const remark = require('remark');
const stripMarkdown = require('strip-markdown');

const plugins = [
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/static/uploads`,
      name: 'uploads',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/pages`,
      name: 'pages',
    },
  },
  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      toFormat: 'WEBP',
    },
  },
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      engines: {
        yaml: transformerRemarkParser,
      },
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
          options: {
            name: 'uploads',
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 1000,
            linkImagesToOriginal: false,
            showCaptions: ['title'],
            withWebp: true,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: 'static',
          },
        },
      ],
    },
  },
  'gatsby-plugin-typescript',
  'gatsby-plugin-catch-links',
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/typography`,
      omitGoogleFont: true,
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Domine`,
          subsets: [`latin`],
          variants: [`700`],
        },
        {
          family: `Open Sans`,
          variants: ['400', '400i', '700', '700i'],
        },
      ],
    },
  },
  {
    resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    options: {
      fields: [
        `title`,
        `date`,
        `category`,
        `tags`,
        `body`,
        `featuredimagetheme`,
      ],
      resolvers: {
        MarkdownRemark: {
          title: node => node.frontmatter.title,
          date: node => node.frontmatter.date,
          tags: node => node.frontmatter.tags,
          category: node => node.frontmatter.category,
          theme: node => node.frontmatter.featuredimagetheme,
          path: node => node.fields.slug,
          body: node =>
            remark()
              .use(stripMarkdown)
              .processSync(node.rawMarkdownBody).contents,
        },
      },
      // Optional filter to limit indexed nodes
      filter: node =>
        node.frontmatter.hidden !== true &&
        node.frontmatter.templateKey === 'recept',
    },
  },
  'gatsby-plugin-styled-components',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Recept`,
      short_name: `Recept`,
      start_url: `/`,
      background_color: `#2D3748`,
      theme_color: `#2D3748`,
      display: `standalone`,
      icon: `static/img/favimage.png`,
    },
  },
  'gatsby-plugin-netlify-cache',
  {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      modulePath: `${__dirname}/src/cms/cms.js`,
      manualInit: true,
      enableIdentityWidget: true,
      htmlTitle: 'Redaktörsläge - Isabels sajt',
      htmlFavicon: `${__dirname}/static/img/edit-filled.ico`,
    },
  },
  'gatsby-plugin-netlify', // make sure to keep it last in the array
];

module.exports = {
  plugins: plugins,
};
