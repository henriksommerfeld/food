import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { editPageUrl } from '../url-replacer';

import Layout from '../components/Layout';
import { IndexPageTemplate } from './index-page-template';
import { LocationProp } from '../interfaces/LocationProp';
import useSiteMetadata from '../components/SiteMetadata';

export default function IndexPage({ location }: LocationProp) {
  const data = useStaticQuery(pageQuery);
  const metadata = useSiteMetadata();
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout
      location={location}
      pageTitle={metadata.title}
      pageDescription={metadata.description}
    >
      <IndexPageTemplate
        headerImageFile={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={html}
        location={location}
      />
    </Layout>
  );
}

const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        image {
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
        heading
        subheading
      }
    }
  }
`;
