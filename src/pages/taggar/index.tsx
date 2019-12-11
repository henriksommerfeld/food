import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { TagsTemplate } from '../../templates/tags-template';
import tagSvg from '../../../static/img/tag-grey500.svg';
import { getTagRouteUrl } from '../../tags-parser';
import { LocationProp } from '../../interfaces/LocationProp';

export default function TagsPage({ location }: LocationProp) {
  const data = useStaticQuery(tagPageQuery);
  const group = data.allMarkdownRemark.group;

  return (
    <Layout location={location} pageTitle="Taggar">
      <TagsTemplate location={location}>
        <h1>Taggar</h1>
        <ul className="taglist">
          {group.map(tag => (
            <LinkContainer key={tag.fieldValue}>
              <LinkIconSvg src={tagSvg} alt="" />
              <Link to={getTagRouteUrl(tag.fieldValue)}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </LinkContainer>
          ))}
        </ul>
      </TagsTemplate>
    </Layout>
  );
}

const LinkIconSvg = styled('img')`
  margin: 0 0.5em 0 0;
  min-width: 1rem;
`;

const LinkContainer = styled('li')`
  display: flex;
  align-items: center;
`;

const tagPageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { hidden: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
