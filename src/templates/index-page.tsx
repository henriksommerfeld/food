import React from 'react';
import Layout from '../components/Layout';
import IndexPageTemplate from './index-page-template';
import { LocationProp } from '../interfaces/LocationProp';
import useSiteMetadata from '../components/SiteMetadata';
import DefaultBanner from '../components/DefaultBanner';

export default function IndexPage({ location }: LocationProp) {
  const metadata = useSiteMetadata();

  return (
    <Layout
      location={location}
      pageTitle={metadata.title}
      pageDescription={metadata.description}
    >
      <IndexPageTemplate>
        <DefaultBanner location={location} />
      </IndexPageTemplate>
    </Layout>
  );
}
