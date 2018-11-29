import React, { memo } from "react";
import styled from "styled-components";

import ColorPicker from "./color-picker";

export default memo(({clientY, clientX, showTooltip, setColor}) => (
  <Popup {...{clientY, clientX, showTooltip}}>
    <ColorPicker onColorChange={setColor} />
  </Popup>
))

const Popup = styled.div.attrs({bgColor: 'rgba(180,180,180,.9)', offsetX: 60, offsetY: 80})`
  transition: opacity .2s ease-in-out;
  opacity: ${({showTooltip})=> showTooltip ? 1 : 0};
  pointer-events: ${({showTooltip})=> showTooltip ? 'all' : 'none'};
  padding: 10px;
  position: absolute;
  top: ${({clientY, offsetY}) => clientY - offsetY}px;
  left: ${({clientX, offsetX}) => clientX - offsetX}px;
  background-color: ${({bgColor})=>bgColor};
  border-radius: 10px;

  /* bottom arrow */
  &:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-top-color: ${({bgColor})=>bgColor};
    border-width: 10px;
    margin-left: -10px;
  }
`;
