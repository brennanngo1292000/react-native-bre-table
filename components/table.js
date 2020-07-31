import React from 'react';
import { View, ViewPropTypes } from 'react-native';

export const Table = props => {
  const { borderStyle, children, style } = props;
  const _renderChildren = () => {
    return React.Children.map(children, child =>
      React.cloneElement(child, borderStyle && child.type.displayName !== 'ScrollView' ? { borderStyle } : {})
    );
  };

  const borderLeftWidth = (borderStyle && borderStyle.borderWidth) || 0;
  const borderBottomWidth = borderLeftWidth;
  const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

  return (
    <View
      style={[
        style,
        {
          borderLeftWidth,
          borderBottomWidth,
          borderColor
        }
      ]}
    >
      {_renderChildren()}
    </View>
  );
};

Table.propTypes = {
  style: ViewPropTypes.style,
  borderStyle: ViewPropTypes.style
};

export const TableWrapper = props => {
  const { style, children, borderStyle } = props;
  const _renderChildren = () => {
    return React.Children.map(children, child => React.cloneElement(child, borderStyle ? { borderStyle } : {}));
  };

  return <View style={style}>{_renderChildren()}</View>;
};

TableWrapper.propTypes = {
  style: ViewPropTypes.style
};
