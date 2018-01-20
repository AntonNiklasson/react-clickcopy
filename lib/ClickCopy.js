import React from "react";
import PropTypes from "prop-types";

class ClickCopy extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  };

  static defaultProps = {
    children: null,
  };

  onClick = () => {
    if (this.node) {
      this.copyText();
    }
  };

  copyText = () => {
    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(this.node);

    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy");

    selection.removeAllRanges();
  };

  ref = node => {
    this.node = node;
  };

  render() {
    return null;
    // return (
    //   <span ref={this.ref} onClick={this.onClick}>
    //     {this.props.children}
    //   </span>
    // );
  }
}

export default ClickCopy;
