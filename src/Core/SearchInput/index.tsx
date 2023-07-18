import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchInput = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={{width: 20, marginLeft: 20, alignSelf: 'center'}}>
        <AntDesign name={'search1'} size={15} color={'grey'} />
      </View>
      <View style={{flex: 1}}>
        <TextInput
          style={styles.textInput}
          placeholder={'search'}
          placeholderTextColor={'black'}
        />
      </View>
    </View>
  );
};

export {SearchInput};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    marginHorizontal: 25,
    borderRadius: 40,
    padding: 5,
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: '#F6F6F6',
    marginLeft: 5,
    marginEnd: 20,
    padding: -10,
    borderRadius: 25,
  },
});
