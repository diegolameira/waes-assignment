import React, { memo } from 'react';
import styled from "styled-components";

export default memo(({title, body}) => (
  <Wrapper>
    <h1>{title}</h1>
    <p dangerouslySetInnerHTML={{__html: body}}></p>
  </Wrapper>
))

const Wrapper = styled.div`
  padding: 0 10%;
`;
