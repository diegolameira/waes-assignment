import React, { memo } from 'react';
import styled from "styled-components";

export default memo(({title, body, hasSidebar}) => (
  <Wrapper {...{hasSidebar}}>
    <h1>{title}</h1>
    <p dangerouslySetInnerHTML={{__html: body}}></p>
  </Wrapper>
))

const Wrapper = styled.div`
  padding: 0 10vw;
  transition: padding-left .3s ease-in-out;
  padding-left: ${({hasSidebar}) => hasSidebar ? 25:10}vw;
`;
