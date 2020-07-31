import React from 'react';
import { View, ViewPropTypes, Text, StyleSheet } from 'react-native';
import { Cell } from './cell';
import { sum } from '../utils';

export const Row = () => {
  const { data, style, widthArr, height, flexArr, textStyle, ...rest } = props;
  let width = widthArr ? sum(widthArr) : 0;

  return data ? (
    <View style={[height && { height }, width && { width }, styles.row, style]}>
      {data.map((item, i) => {
        const flex = flexArr && flexArr[i];
        const wth = widthArr && widthArr[i];
        return <Cell key={i} data={item} width={wth} height={height} flex={flex} textStyle={textStyle} {...rest} />;
      })}
    </View>
  ) : null;
};

export const Rows = props => {
  const { data, style, widthArr, heightArr, flexArr, textStyle, ...rest } = props;
  const flex = flexArr ? sum(flexArr) : 0;
  const width = widthArr ? sum(widthArr) : 0;

  return data ? (
    <View style={[flex && { flex }, width && { width }]}>
      {data.map((item, i) => {
        const height = heightArr && heightArr[i];
        return (
          <Row
            key={i}
            data={item}
            widthArr={widthArr}
            height={height}
            flexArr={flexArr}
            style={style}
            textStyle={textStyle}
            {...rest}
          />
        );
      })}
    </View>
  ) : null;
};

Row.propTypes = {
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style
};

Rows.propTypes = {
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    overflow: 'hidden'
  }
});
