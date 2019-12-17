import React from 'react';
import { PageStyled } from '../components/PageStyled';
import Categories from '../components/Categories';

export default function IndexPageTemplate({ children }) {
  return (
    <PageStyled>
      {children}
      <Categories />
      {/* <BlogRollContainer>{isPreview ? null : <BlogRoll />}</BlogRollContainer> */}
    </PageStyled>
  );
}
