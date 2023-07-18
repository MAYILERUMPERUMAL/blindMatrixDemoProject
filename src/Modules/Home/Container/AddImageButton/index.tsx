import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddImageButton = () => {
  return (
    <TouchableOpacity style={styles.touchableContainer}>
      <View style={styles.imageContainer}>
        <MaterialIcons name={'add-to-photos'} size={25} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};

export {AddImageButton};

const styles = StyleSheet.create({
  touchableContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 50,
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#F6F7FA',

    alignSelf: 'center',
  },
  imageContainer: {
    backgroundColor: '#1EBFF0',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
