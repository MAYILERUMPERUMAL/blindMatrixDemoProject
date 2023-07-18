import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {GenericTextWithImageProps} from './interface';

const GenericTextWithImage: FC<GenericTextWithImageProps> = ({
  imageName,
  sideHeading,
  textSize = 13,
  textColor = 'black',
  location = false,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{justifyContent: 'center'}}>
        <AntDesign name={imageName} color={'black'} size={15} />
      </View>
      <Text
        style={{
          fontSize: textSize,
          fontWeight: '700',
          color: textColor,
          marginLeft: 5,
        }}>
        {sideHeading}
      </Text>
    </View>
  );
};

export {GenericTextWithImage};

const styles = StyleSheet.create({});
