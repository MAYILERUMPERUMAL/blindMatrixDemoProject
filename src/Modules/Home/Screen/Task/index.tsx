import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
        {'Task Screen'}
      </Text>
    </View>
  );
};

export {TaskScreen};

const styles = StyleSheet.create({});
