import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { buttonStyles } from '../constants';
import { RipplesButton } from './RipplesButton';
import { ButtonText } from './ButtonText';

interface ButtonProps {
  url?: string;
  clickHandler?: Function;
  downloadedFilename?: string;
  icon?: string;
  ariaLabel?: string;
  children?: ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <RipplesButton>
      <AnchorOrButton {...props}></AnchorOrButton>
    </RipplesButton>
  );
}

function AnchorOrButton({
  url = null,
  downloadedFilename = null,
  clickHandler,
  icon = null,
  ariaLabel = null,
  children,
}: ButtonProps) {
  if (url)
    return (
      <AnchorStyled
        href={url}
        download={downloadedFilename}
        aria-label={ariaLabel}
      >
        {icon && <Icon src={icon} alt="" />}
        <ButtonText>{children}</ButtonText>
      </AnchorStyled>
    );
  else
    return (
      <ButtonStyled onClick={clickHandler} aria-label={ariaLabel} type="button">
        {icon && <Icon src={icon} alt="" />}
        <ButtonText>{children}</ButtonText>
      </ButtonStyled>
    );
}

const Icon = styled('img')`
  width: 1.4em;
  height: auto;
  margin-bottom: 0;
`;

const AnchorStyled = styled('a')`
  ${buttonStyles}
`;

const ButtonStyled = styled('button')`
  ${buttonStyles}
`;
