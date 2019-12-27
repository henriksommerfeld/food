import React from 'react';
import styled from 'styled-components';

export default function Error() {
  return (
    <ArticleStyled>
      <h1>😫</h1>
    </ArticleStyled>
  );
}

const ArticleStyled = styled('article')`
  margin: auto;
`;
