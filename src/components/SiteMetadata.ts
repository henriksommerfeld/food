import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadata {
  title: string;
  description: string;
}

export default function useSiteMetadata(): SiteMetadata {
  const data = useStaticQuery(metadataQuery);
  const metadata = data.markdownRemark.frontmatter;
  return { title: metadata.heading, description: metadata.description };
}

const metadataQuery = graphql`
  query SiteMetadataQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        description
      }
    }
  }
`;
