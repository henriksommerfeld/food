import styled from 'styled-components';
import { spacing } from '../constants';

export const PageStyled = styled('div')`
  width: 100%;
  padding-bottom: ${spacing.contentGapToFooter};

  .gatsby-resp-image-figcaption {
    text-align: center;
    font-style: italic;
    padding-top: 0.5rem;
  }
`;
