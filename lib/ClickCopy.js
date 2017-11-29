import React from 'react';
import PropTypes from 'prop-types';

class ClickCopy extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    className: '',
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
    const { children, className } = this.props;
    return (
      <span ref={this.ref} onClick={this.onClick} className={className}>
        {children}
      </span>
    );
  }
}

export default ClickCopy;
