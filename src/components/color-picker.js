import React, { memo } from "react";
import styled from "styled-components";

export default memo(({onColorChange}) => (
  <Wrapper>
  {
    ['yellow', 'red', 'green'].map(color =>
      <Swatcher
        key={color}
        onClick={() => onColorChange(color)}
        {...{color}}
        ></Swatcher>
    )
  }
  </Wrapper>
));

const Wrapper = styled.div`
  display: flex;
`;

const Swatcher = styled.div`
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${({color}) => color};
`;
