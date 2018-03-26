import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import styles from '../css/style.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class TabContent extends React.Component {
  static propTypes = {
    panels: PropTypes.object,
    activeIndex: PropTypes.number
  };

  getTabPanes() {
    const { activeIndex, panels } = this.props;

    return panels.map((panel) => {
      if (!panel) {
        return ;
      }

      const order = parseInt(panel.props.order, 10);
      const isActive = activeIndex === order;

      return React.cloneElement(panel, {
        isActive,
        children: panel.props.children,
        key: `tabpane-${order}`
      });
    });
  }

  render() {
    const classes = classnames({
      content: true
    });
    return (
      <div styleName={classes}>
        {this.getTabPanes()}
      </div>
    );
  }
}

export default TabContent;