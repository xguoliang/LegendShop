'use strict';

import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class TabNavigatorItem extends React.Component {
  static propTypes = {
    renderIcon: PropTypes.func.isRequired,
    renderSelectedIcon: PropTypes.func,
    badgeText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    renderBadge: PropTypes.func,
    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    selectedTitleStyle: Text.propTypes.style,
    bacStyle: View.propTypes.style,
    selectedBacStyle: View.propTypes.style,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    allowFontScaling: PropTypes.bool
  };
  //定义了必需传递的props
  static defaultProps = {
    renderIcon: () => <View />,
  };

  render() {
    let child = React.Children.only(this.props.children);
    return React.cloneElement(child, {
      style: [child.props.style, this.props.style],
    });
  }
}
