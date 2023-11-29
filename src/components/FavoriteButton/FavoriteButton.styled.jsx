import styled from '@emotion/styled';
import { ReactSVG } from 'react-svg';

export const SVG = styled(ReactSVG)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  stroke: ${props => (props.isactive ? '#3470ff' : '#ffffff')};
  fill: ${props => (props.isactive ? '#3470ff' : 'transparent')};
  cursor: pointer;
  &:hover {
    fill: #0b44cd;
    stroke: #0b44cd;
  }
`;