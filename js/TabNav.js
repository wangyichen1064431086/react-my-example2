import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import styles from '../css/style.scss';
import { Motion, spring } from 'react-motion';

import InkBar from './InkBar';

function getOuterWidth(el) {
  return el.offsetWidth;
}

function getOffset(el) {
  const html = el.ownerDocument.documentElement;
  const box = el.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset - html.clientTop,
    left: box.left + window.pageXOffset - html.clientLeft
  }
}

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class TabNav extends React.Component {
  static propTypes = {
    panels: PropTypes.object,
    activeIndex: PropTypes.number
  }
  constructor(props) {
    super(props);
    this.state = {
      inkBarWidth: 0,
      inkBarLeft: 0
    }
  }

  componentDidMount() {
    const { activeIndex } = this.props;
    const node = ReactDOM.findDOMNode(this);
    const el = node.querySelectorAll('li')[activeIndex];

    this.setState({
      inkBarWidth: getOuterWidth(el),//计算激活的tab的宽度
      inkBarLeft: getOffset(el).left//计算激活的tab相对屏幕左侧的距离
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeIndex !== this.props.activeIndex) {
      const { activeIndex } = this.props;
      const node = ReactDOM.findDOMNode(this);
      const el = node.querySelectorAll('li')[activeIndex];

      this.setState({
        inkBarWidth: getOuterWidth(el),
        inkBarLeft: getOffset(el).left
      });
    }
  }

  getTabs() {
    const { panels, activeIndex } = this.props;

    return panels.map((panel) => {
      if(!panel) {
        return;
      }
      const order = parseInt(panel.props.order, 10);
      let classes = classnames({
        tab: true,
        tabActive: activeIndex === order,
        disabled: panel.props.disabled
      });
      let events = {};
      if (!panel.props.disabled) {
        events = {
          onClick: this.props.onTabClick.bind(this, order)
        }
      }

      const ref = {};
      if (activeIndex === order) {//如果activeIndex是当前tabNav的order
        ref.ref = 'activeTab';
      }

      return (
        <li 
          role="tab"
          aria-disabled={panel.props.disabled ? 'true' : 'false'}
          aria-selected={activeIndex === order ? 'true' : 'false'}
          {...events}
          styleName={classes}
          key={order}
          {...ref}
        >
          { panel.props.tab }
        </li>
        
      );

    });
  }

  render() {
    const { activeIndex } = this.props;
    const rootClasses = classnames({
      bar: true,
    });
    const classes = classnames({
      nav: true
    });

    return (
      <div styleName={ rootClasses } role="tablist">
        <Motion style={{ left: spring(this.state.inkBarLeft) }}>
        {
          ({ left }) => 
            <InkBar width={this.state.inkBarWidth} left={left} />
        }
        </Motion>
        <ul styleName={classes} >
          {this.getTabs()}
        </ul>
      </div>
    )
  }
}

export default TabNav;