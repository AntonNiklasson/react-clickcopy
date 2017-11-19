import React from 'react';
import PropTypes from 'prop-types';

class ClickCopy extends React.Component {

  constructor(props) {
    super(props);

    ['onClick', 'ref', 'copyText'].forEach((k) => { this[k] = this[k].bind(this); });
  }

  onClick() {
    if (this.node) {
      this.copyText();
    }
  }

  copyText() {
    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(this.node);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
    selection.removeAllRanges();
  }

  ref(node) {
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

ClickCopy.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ClickCopy.defaultProps = {
  className: '',
};

export default ClickCopy;
