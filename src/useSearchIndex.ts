import React, { Dispatch } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Index } from 'elasticlunr';

export function useSearchIndex() {
  const data = useStaticQuery(searchIndexQuery);
  const index = Index.load(data.siteSearchIndex.index);
  return index;
}

const searchIndexQuery = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`;
