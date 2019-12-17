import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { WindowLocation } from '@reach/router';
import { SharedIntroBanner } from '../templates/shared-intro-banner';
import { colors, spacing } from '../constants';

interface DefaultBannerProps {
  location: WindowLocation;
}

export default function DefaultBanner({ location }: DefaultBannerProps) {
  const data = useStaticQuery(pageQuery);
  const { frontmatter } = data.markdownRemark;

  return (
    <SharedIntroBanner
      backgroundImage={frontmatter.image}
      overlayOpacity={0.4}
      location={location}
    >
      <IntroText>
        <h1>{frontmatter.heading}</h1>
        <h2>{frontmatter.subheading}</h2>
      </IntroText>
    </SharedIntroBanner>
  );
}

const IntroText = styled('div')`
  color: ${colors.white};
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${spacing.default};
  padding-right: ${spacing.default};
  text-align: center;
`;

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
