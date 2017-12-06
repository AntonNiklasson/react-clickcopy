import React from 'react';
import PropTypes from 'prop-types';

class ClickCopy extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    children: null,
    style: null,
    className: null,
  };

  onClick = () => {
    if (this.node) {
      this.copyText();
    }
  }

  copyText = () => {
    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(this.node);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
    selection.removeAllRanges();
  }

  ref = (node) => {
    this.node = node;
  }

  render() {
    const { children, className, style } = this.props;
    return (
      <span
        ref={this.ref}
        onClick={this.onClick}
        className={className}
        style={style}
      >
        {children}
      </span>
    );
  }
}

export default ClickCopy;
