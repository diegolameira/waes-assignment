import React, { PureComponent } from 'react';
import styled from "styled-components";

import ColorPicker from "./color-picker";

export default class extends PureComponent {

  state = { color: null };

  filter = (highlights, color) => highlights
    .filter(i => !color || i.color === color)
    .sort((a, b) => b.range.endOffset - a.range.endOffset)
    .reverse()

  setColor = color =>
    this.setState(({color: oldColor}) => ({color: oldColor === color ? null : color}))

  render() {
    const { props: {highlights}, state: { color }} = this;
    const filteredHighlights = this.filter(highlights, color);
    return (
      <Wrapper {...{highlights}}>
        <h2>Highlights</h2>
        <ColorPicker onColorChange={this.setColor} />
        {
          filteredHighlights
            .map(({string, range, color}, idx) =>
              <Highlight
                key={`${idx}-${range.endOffset}`}
                color={color}
                >
                <span>{string}</span>
              </Highlight>
            )
        }
      </Wrapper>
    )
  }
}

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
