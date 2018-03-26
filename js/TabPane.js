import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import styles from '../css/style.scss';

@immutableRenderDecorator 
@CSSModules(styles, { allowMultiple: true })
class TabPane extends React.Component {
  static propTypes = {
    tab: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]).isRequired,
    order: PropTypes.string.isRequired,
    disable: PropTypes.bool,
    isActive: PropTypes.bool
  }

  render() {
    const { className, isActive, children } = this.props;

    const classes = classnames({
      panel: true,
      contentActive: isActive
    });
    return (
      <div 
        role="tabpanel"
        styleName={classes}
        aria-hidden={!isActive}>
        {children}
      </div>
    );
  }
};

export default TabPane;

