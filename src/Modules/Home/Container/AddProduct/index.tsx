import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddProduct = () => {
  return (
    <View style={{flexDirection: 'row', marginHorizontal: 20}}>
      <View>
        <TouchableOpacity style={styles.touchableContainer}>
          <Text style={{fontSize: 16, color: 'white'}}>{'+ Add Product'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <AntDesign name={'camera'} size={20} color={'#CF2379'} />
        </View>
        <View style={styles.container3}>
          <AntDesign name={'filetext1'} size={18} color={'#CF2379'} />
        </View>
        <View style={styles.container4}>
          <AntDesign name={'windows'} size={20} color={'grey'} />
        </View>
      </View>
    </View>
  );
};

export {AddProduct};

const styles = StyleSheet.create({
  touchableContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#CF2379',
    borderRadius: 5,
  },
  container1: {
    flexDirection: 'row',
    flex: 1,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container2: {
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginRight: 10,
    borderColor: '#CF2379',
    borderRadius: 4,
  },
  container3: {
    borderWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginRight: 10,
    borderColor: '#CF2379',
    borderRadius: 4,
  },
  container4: {
    borderWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginRight: 10,
    borderColor: 'grey',
    borderRadius: 4,
  },
});
