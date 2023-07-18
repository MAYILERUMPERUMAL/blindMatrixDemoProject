import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';

const AppLoader = ({loading}) => {
  return (
    <View style={styles.loaderContainer}>
      <View style={styles.container}>
        <ActivityIndicator
          animating={loading}
          size={'large'}
          color={'#70D6F5'}
          style={styles.activityIndicator}
        />
      </View>
    </View>
  );
};

export {AppLoader};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 1,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  loaderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 50,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
