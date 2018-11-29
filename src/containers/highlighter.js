import { PureComponent } from "react";

export default class extends PureComponent {

  state = { highlights: [], clientX: 0, clientY: 0, showTooltip: false, latestColor: 'yellow' }

  onMouseUp = ({ clientX, clientY }) => {

    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    selection.empty();

    // skip if its not selecting enought chars
    if ( range.endOffset - range.startOffset === 0 ) {
      this.setState({showTooltip: false})
      return;
    };

    const highlightSpan = document.createElement('span');
    highlightSpan.setAttribute('style', `background-color: ${this.state.latestColor};`)

    // NOTE: clears inner spans so it doesnt breakAfter
    // TODO: could change the highlight list as its differs from page
    const selectedTextNode = document.createTextNode( range.toString() );
    highlightSpan.appendChild(selectedTextNode);
    range.deleteContents();
    range.insertNode(highlightSpan);

    const currentHighlight = { range, string: range.toString(), color: this.state.latestColor };

    this.setState(({highlights, latestColor}) => ({
      highlights: [...highlights, currentHighlight],
      clientX, clientY, showTooltip: true,
      setColor: color => this.setColor(highlightSpan, color, currentHighlight)
    }));

  }

  // TODO: it can be used for old ones too =) but needs some more efforts
  setColor = (elm, color, highlight) => {
    // Replace highlight color and span background
    this.setState(({highlights}) => {
      const index = highlights.indexOf(highlight);
      return ({
        highlights: [
          ...highlights.slice(0, index),
          {...highlight, color},
          ...highlights.slice(index + 1)
        ],
        latestColor: color
      })
    }, () => elm.setAttribute('style', `background-color: ${color};`))
  }

  render() {
    const { props: {children}, state, onMouseUp } = this;
    return children({...state, onMouseUp })
  }
}
