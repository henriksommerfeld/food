import React from 'react';
import styled from 'styled-components';
import { spacing, colors, breakpoints, links } from '../constants';
import { tailwindColors } from '../tailwind-colors';
import EditSvg from '../../static/img/edit-filled.svg';

interface Footer {
  editLink?: string;
}

export default function Footer({ editLink = '/admin' }: Footer) {
  return (
    <FooterWrapper>
      <InnerFooter>
        <AnchorWithIcon
          href={editLink || '/admin'}
          target="_blank"
          rel="noopener noreferrer"
          title="Redigera sidan"
        >
          <Svg src={EditSvg} alt="Redigera sidan" />
          Redigera
        </AnchorWithIcon>
      </InnerFooter>
    </FooterWrapper>
  );
}

const FooterWrapper = styled('div')`
  box-shadow: 0 -1px 20px rgba(0, 0, 0, 0.5);
`;

const InnerFooter = styled('footer')`
  display: grid;
  grid-row-gap: ${spacing.double};
  padding: ${spacing.default};
  background-color: ${colors.footerBackground};
  color: ${tailwindColors.blue100};

  @media (min-width: ${breakpoints.small}) {
    padding: ${spacing.double};
  }
`;

const AnchorWithIcon = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};

  :hover,
  :focus,
  :active,
  :visited {
    background: none;
    color: ${colors.white};
  }
`;

const Svg = styled('img')`
  height: 1.3rem;
  margin-right: ${spacing.half};
`;
