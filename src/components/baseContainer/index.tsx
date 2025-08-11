import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';

interface BaseContainerProps {
  header: React.ReactNode;
  headerStyle: StyleProp<ViewStyle>;
  body: React.ReactNode;
  bodyStyle: StyleProp<ViewStyle>;
}

const BaseContainer: FC<BaseContainerProps> = ({
  header,
  headerStyle,
  body,
  bodyStyle,
}) => {
  return (
    <View style={{flex: 1, padding: 16, }}>
      <View style={headerStyle}>{header}</View>
      <View style={bodyStyle}>{body}</View>
    </View>
  );
};

export default BaseContainer;

const styles = StyleSheet.create({});
