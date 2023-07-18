import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CalendarScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
        {'Calendar Screen Screen'}
      </Text>
    </View>
  );
};

export {CalendarScreen};

const styles = StyleSheet.create({});
