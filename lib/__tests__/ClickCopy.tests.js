import React from "react";
import { mount } from "enzyme";

import ClickCopy from "../ClickCopy";

test("it renders the text in a span by default", () => {
  const wrapper = mount(<ClickCopy>Hello World</ClickCopy>);

  expect(wrapper.find("span").exists()).toBe(true);
});

test("the text is copied on click", () => {
  const mounted = mount(<ClickCopy>Hello World</ClickCopy>);
  global.getSelection = jest.fn(() => ({
    removeAllRanges: jest.fn(),
    addRange: jest.fn(),
  }));
  global.document.createRange = jest.fn(() => ({ selectNodeContents: jest.fn() }));
  global.document.execCommand = jest.fn();

  mounted.simulate("click");

  expect(global.getSelection).toHaveBeenCalled();
  expect(global.document.createRange).toHaveBeenCalled();
  expect(global.document.execCommand).toHaveBeenCalledWith("copy");
});
