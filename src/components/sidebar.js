import React, { memo } from 'react';
import styled from "styled-components";

export default memo(({ highlights }) => (
  <Wrapper {...{highlights}}>
    <h2>Highlights</h2>
    {
      highlights
        .sort((a, b) => b.range.endOffset - a.range.endOffset)
        .reverse()
        .map(({string, range, color}, idx) => <Highlight key={`${idx}-${range.endOffset}`} color={color}><span>{string}</span></Highlight>)
    }
  </Wrapper>
))

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transition: all .2s ease-in-out;
  opacity: ${({highlights}) => highlights.length ? .6:0};
  &:hover { opacity: 1;}
  width: ${({highlights}) => highlights.length ? 20:0}vw;
  height: 100vh;
  background: #efefef;
  padding: 10px;
`;

const Highlight = styled.a`
  display: inline-block;
  margin: 6px 4px;

  span {
    border-radius: 4px;
    background-color: ${({color}) => color};
    padding: 3px;
  }
`;
