import styled from '@emotion/styled';
import { ReactSVG } from 'react-svg';

export const SVG = styled(ReactSVG)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover {
    opacity: .5;
  }
`;