import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getShrinkDescription} from '../../../../Constant';
const ListImageTitle = ({title, subTitle, icon}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{height: 45, width: 45}}
        source={{
          uri: icon,
        }}
      />
      <View style={{marginLeft: 5, marginRight: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          {title}
        </Text>
        <View style={{marginRight: 15}}>
          <Text style={{fontSize: 12}}>{getShrinkDescription(subTitle)}</Text>
        </View>
      </View>
    </View>
  );
};

export {ListImageTitle};

const styles = StyleSheet.create({});
