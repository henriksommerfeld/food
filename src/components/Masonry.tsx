import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { breakpoints, spacing } from '../constants';

export const MasonryItem = styled('div')`
  margin: 0;
  text-align: center;
  padding: ${spacing.half};

  @media (min-width: ${breakpoints.xs}) {
    padding: ${spacing.default};
  }

  @media (min-width: ${breakpoints.large}) {
    padding: ${spacing.double};
  }
`;

export const MasonryStyled = styled(Masonry)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;
  width: 100%;
  margin: auto;
  padding: ${spacing.half};

  @media (min-width: ${breakpoints.small}) {
    padding: ${spacing.default};
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: ${spacing.double};
  }

  .masonry-grid-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    flex-grow: 1;
  }
`;
