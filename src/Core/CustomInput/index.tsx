import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {FC} from 'react';
import {CustomInputProps} from './interface';

const CustomInput = React.forwardRef(
  (
    {
      heading,
      keyBoardType = 'default',
      onChangeValue,
      textValue,
    }: CustomInputProps,
    ref: any,
  ) => {
    return (
      <>
        <Text style={{color: 'white', padding: 10}}>{heading}</Text>
        <TextInput
          ref={ref}
          keyboardType={keyBoardType}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            marginHorizontal: 10,
            textAlignVertical: 'bottom',
            color: 'white',
          }}
          onChangeText={text => {
            if (onChangeValue) {
              onChangeValue(text);
            }
          }}
          value={textValue}
        />
      </>
    );
  },
);

export {CustomInput};

const styles = StyleSheet.create({});
