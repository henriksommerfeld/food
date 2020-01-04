import styled from 'styled-components';
import { spacing, colors, breakpoints } from '../constants';

export const PostStyled = styled.div`
  padding: ${spacing.default};
  /* background-color: ${colors.white}; */
/* 
  @media (min-width: ${breakpoints.small}) {
    padding: ${spacing.double};
  }

  @media (min-width: ${breakpoints.medium}) {
    transform: translateY(${spacing.contentOffset});
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
    padding: ${spacing.x3};
  } */
`;
