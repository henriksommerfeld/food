import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { spacing } from '../constants';
import TagSvg from '../../static/img/tag-grey500.svg';
import { getTagRouteUrl } from '../tags-parser';

interface BlogPostTags {
  tags: string[];
}

export default function BlogPostTags({ tags = [] }: BlogPostTags) {
  const numberOfTags = tags.length;
  if (numberOfTags < 1) return null;

  return (
    <LinksContainer data-testid="tags">
      <LinkIconSvg />

      {tags.map((tag, index) => (
        <React.Fragment key={tag + index}>
          <Link to={getTagRouteUrl(tag)}>{tag}</Link>
          {index + 1 < numberOfTags ? ', ' : null}
        </React.Fragment>
      ))}
    </LinksContainer>
  );
}

const LinkIconSvg = styled('span')`
  padding-right: 0.5em;
  vertical-align: top;

  &::before {
    content: url(${TagSvg});
    width: 1rem;
  }
`;

const LinksContainer = styled('span')`
  margin-top: ${spacing.double};
`;
