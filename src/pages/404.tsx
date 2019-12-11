import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/Layout';
import { colors, breakpoints, spacing } from '../constants';
import { graphql, useStaticQuery } from 'gatsby';
import { getFluid } from '../images';
import Searchbox from '../components/Searchbox';
import { LocationProp } from '../interfaces/LocationProp';

export default function NotFoundPage({ location }: LocationProp) {
  const data = useStaticQuery(backgroundImageQuery);
  const fluidImage = getImageFrom(data);

  return (
    <Layout location={location} pageTitle="Gått vilse? (404)">
      <Page
        fluid={fluidImage}
        backgroundColor={darkGreen}
        Tag="div"
        className="lost-background"
      >
        <PageContent>
          <Banner>
            <Searchbox location={location} />
          </Banner>
          <Text>
            <h1>Gått vilse?</h1>
            <Description>
              Det finns inget på den här adressen, men använd menyn så hittar du
              säkert rätt.
            </Description>
          </Text>
        </PageContent>
      </Page>
    </Layout>
  );
}

function getImageFrom(data) {
  if (!data || !data.fileName) return null;

  return getFluid(data.fileName);
}

const darkGreen = '#062c21';

const backgroundImageQuery = graphql`
  query {
    fileName: file(
      relativePath: {
        eq: "hidden/556259_10151518728970191_702465190_23918371_1877184621_n.jpg"
      }
    ) {
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

const Banner = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Description = styled('p')`
  font-size: 1.2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Text = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${spacing.double} ${spacing.default};

  @media (min-width: ${breakpoints.small}) {
    padding: ${spacing.double};

    h1 {
      font-size: 2rem;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.7);
    }

    p {
      font-size: 1.5rem;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.7);
    }
  }

  @media (min-width: ${breakpoints.medium}) {
    padding: ${spacing.notFoundBannerExtra};

    h1 {
      font-size: 2.5rem;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.7);
    }

    p {
      font-size: 2rem;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.7);
    }
  }

  @media (min-width: ${breakpoints.xl}) {
    h1 {
      font-size: 3rem;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 0 50px rgba(255, 255, 255, 0.7);
    }

    p {
      font-size: 2.5rem;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.7);
    }
  }
`;

const PageContent = styled('div')`
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 60%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Page = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  color: ${colors.white};
  background-color: ${darkGreen};

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-y: bottom;
  background-position-x: 25%;
  background-size: cover;

  @media (min-width: ${breakpoints.xl}) {
    background-position-y: 75%;
  }
`;
