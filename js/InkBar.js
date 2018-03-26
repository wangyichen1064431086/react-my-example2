import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import styles from '../css/style.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class InkBar extends React.Component {
  static propTypes = {
    left: PropTypes.number,
    width: PropTypes.number
  };
  render() {
    const { left, width } = this.props;

    const classes = classnames({
      inkBar: true
    });
    return (
      <div styleName={classes} style={{
        WebkitTransform: `translate3d(${left}px, 0, 0)`,
        transform:`translate3d(${left}px, 0, 0)`,
        width: width
      }}>
      </div>
    );
  }
}

export default InkBar;