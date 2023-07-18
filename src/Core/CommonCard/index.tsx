import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {CommonCardProps} from './interface';
const CommonCard: FC<CommonCardProps> = ({children, cardPress}) => {
  return (
    <TouchableOpacity
      onPress={cardPress}
      style={{
        paddingHorizontal: 5,
        paddingVertical: 8,
        marginHorizontal: 12,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
        elevation: 5,
      }}>
      <View>{children}</View>
    </TouchableOpacity>
  );
};

export {CommonCard};

const styles = StyleSheet.create({});
