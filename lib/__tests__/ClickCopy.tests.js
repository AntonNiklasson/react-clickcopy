import React from 'react';
import { mount } from 'enzyme';
import ClickCopy from '..';

test('it should mount', () => {
  const withString = mount(<ClickCopy>This is a string</ClickCopy>);
  expect(withString.exists()).toBe(true);
});

test('it passes the className prop through', () => {
  const mounted = mount(<ClickCopy className="lorem-ipsum">Lorem Ipsum</ClickCopy>);
  expect(mounted.props().className).toContain('lorem-ipsum');
});

test.skip('the current text contents is copied on click', () => {
  global.getSelection = jest.fn(() => (
    {
      removeAllRanges: jest.fn(),
      addRange: jest.fn(),
    }
  ));

  global.document.createRange = jest.fn(() => ({ selectNodeContents: jest.fn() }));
  global.document.execCommand = jest.fn();

  const mounted = mount(<ClickCopy>Copy me</ClickCopy>);
  mounted.simulate('click');

  expect(global.getSelection).toHaveBeenCalled();
  expect(global.document.createRange).toHaveBeenCalled();
  expect(global.document.execCommand).toHaveBeenCalledWith('copy');
});
