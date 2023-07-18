import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SecondaryButton = () => {
  return (
    <View
      style={{
        padding: 8,
        borderWidth: 1,
        width: 110,
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 30,
        marginBottom: 10,
        borderColor: 'grey',
      }}>
      <Text style={{fontSize: 13, fontWeight: '500'}}>{'More Option'}</Text>
    </View>
  );
};

export {SecondaryButton};

const styles = StyleSheet.create({});
