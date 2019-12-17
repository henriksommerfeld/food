import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HomeSvg from '../../static/img/home-icon.svg';
import { spacing } from '../constants';

export default function StartPageLink() {
  return (
    <HomeLink to={'/'} title="Till startsidan" activeClassName="active">
      <HomeIcon src={HomeSvg} alt="Startsida" />
    </HomeLink>
  );
}

const HomeLink = styled(Link)`
  position: absolute;
  width: ${spacing.double};
  top: ${spacing.default};
  left: ${spacing.default};
`;

const HomeIcon = styled('img')`
  a.active & {
    filter: grayscale(1);
  }
`;
