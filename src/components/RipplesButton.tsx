import styled from 'styled-components';
import Ripples from 'react-ripples';
import { layout } from '../constants';

export const RipplesButton = styled(Ripples)`
  width: 100%;
  border-radius: ${layout.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 2px;
`;
