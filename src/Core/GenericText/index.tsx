import {View, Text} from 'react-native';
import React from 'react';

const GenericText = ({title, subTitle}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: '#70D6F5',
          textTransform: 'uppercase',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          marginTop: -4,
          color: '#939393',
          fontWeight: '500',
        }}>
        {subTitle}
      </Text>
    </View>
  );
};

export {GenericText};
