import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoints, buttonStyles } from '../constants';
import ArrowsDownSvg from '../../static/img/arrows-down.svg';
import { RipplesButton } from './RipplesButton';
import { ButtonText } from './ButtonText';

interface MorePostsButtonProps {
  clickedHandler: Function;
}

export default function MorePostsButton({
  clickedHandler,
}: MorePostsButtonProps) {
  return (
    <ButtonContainer>
      <RipplesButtonWithBreakpoints>
        <MorePostsButtonStyled onClick={clickedHandler}>
          <ArrowsDown src={ArrowsDownSvg} alt="" />
          <ButtonText>Visa äldre inlägg</ButtonText>
          <ArrowsDown src={ArrowsDownSvg} alt="" />
        </MorePostsButtonStyled>
      </RipplesButtonWithBreakpoints>
    </ButtonContainer>
  );
}

const RipplesButtonWithBreakpoints = styled(RipplesButton)`
  @media (min-width: ${breakpoints.small}) {
    width: auto;
  }
`;

const ArrowsDown = styled('img')`
  width: 1em;
  height: auto;
  margin-bottom: 0;
`;

const MorePostsButtonStyled = styled('button')`
  ${buttonStyles}
`;

const ButtonContainer = styled('div')`
  width: 100%;
  padding: ${spacing.default};

  @media (min-width: ${breakpoints.small}) {
    display: flex;
    justify-content: flex-end;
  }
`;
