jest.unmock('../js/Tabs');
jest.unmock('../js/TabPane');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Tabs from '../js/Tabs';
import TabPane from '../js/TabPane';

describe('Tab', () => {
  it('render the tab content', () => {
    const tab = ReactTestUtils.renderIntoDocument(
      <Tabs activeIndex={0} className="tabs-bar">
        <TabPane order="0" tab="Tab 1">
          第一个Tab里的内容
        </TabPane>
        <TabPane order="1" tab="Tab 2">
          第二个Tab里的内容
        </TabPane>
        <TabPane order="2" tab="Tab 3">
          第三个Tab里的内容
        </TabPane>
      </Tabs>
    );
    const tabNode = ReactDOM.findDOMNode(tab);

    expect(tabNode.querySelectorAll('[role="tab"]').length).toEqual(3);
    expect(tabNode.querySelectorAll('[role="tab"]')[0].getAttribute("aria-selected")).toBe("true");
  })
});

describe('Tab', () => {
  it('changes active tab after click', () => {
    const tab = ReactTestUtils.renderIntoDocument(
      <Tabs activeIndex={0} className="tabs-bar">
         <TabPane order="0" tab="Tab 1">
          第一个Tab里的内容
        </TabPane>
        <TabPane order="1" tab="Tab 2">
          第二个Tab里的内容
        </TabPane>
        <TabPane order="2" tab="Tab 3">
          第三个Tab里的内容
        </TabPane>
      </Tabs>
    );

    const tabNode = ReactDOM.findDOMNode(tab);
    ReactTestUtils.Simulate.click(//模拟点击第3个tab
      tabNode.querySelectorAll('[role="tab"]')[2]
    );
    expect(tabNode.querySelectorAll('[role="tab"]')[0].getAttribute("aria-selected")).toBe("false");
    expect(tabNode.querySelectorAll('[role="tab"]')[2].getAttribute("aria-selected")).toBe("true");
  })
})