# react-clickcopy

Copy a piece of text by clicking on it.

## Install

```
npm install --save react-clickcopy
yarn add react-clickcopy
```

## Usage

```javascript
export default () => (
  <h3><ClickCopy>http://localhost:8080</CopyClick><h3>
);
```

The component itself does not validate its children. The text extrapolation is handled natively by the browser through [Range.selectNodeContents](https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNodeContents) and [Document.execCommand('copy')](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand).
