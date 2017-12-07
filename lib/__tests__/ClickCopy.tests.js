import React from 'react';
import { mount } from 'enzyme';
import ClickCopy from '../ClickCopy';

test('it mounts', () => {
  const withString = mount(<ClickCopy>This is a string</ClickCopy>);
  expect(withString.exists()).toBe(true);
});

test('it applies the given className', () => {
  const mounted = mount(<ClickCopy className="lorem-ipsum">Lorem Ipsum</ClickCopy>);
  expect(mounted.props().className).toContain('lorem-ipsum');
});

test('it applies the given inline style', () => {
  const mounted = mount(<ClickCopy style={{ background: 'gold' }} />);
  expect(mounted.props().style).toEqual({ background: 'gold' });
});

test('the current text contents is copied on click', () => {
  const mounted = mount(<ClickCopy>Copy me</ClickCopy>);
  global.getSelection = jest.fn(() => (
    {
      removeAllRanges: jest.fn(),
      addRange: jest.fn(),
    }
  ));
  global.document.createRange = jest.fn(() => ({ selectNodeContents: jest.fn() }));
  global.document.execCommand = jest.fn();

  mounted.simulate('click');

  expect(global.getSelection).toHaveBeenCalled();
  expect(global.document.createRange).toHaveBeenCalled();
  expect(global.document.execCommand).toHaveBeenCalledWith('copy');
});
