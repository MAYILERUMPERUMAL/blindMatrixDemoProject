import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CustomInput} from '../../Core/CustomInput';
import {ImageTableView} from '../../Modules/Home/Screen/ImageTableView';
import {useNavigation} from '@react-navigation/native';
import {ToastView} from '../../Core/Toast';
import {LoginCredential} from '../../Constant';
import {useDispatch} from 'react-redux';
import {navigateScreen} from '../../Redux/Home';
const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  console.log('navigation========>', navigation);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (validateInputField().status) {
      if (registerUser().status) {
        ToastView(validateInputField().message);
        // navigation.navigate('ImageTableView');
        dispatch(navigateScreen('ImageTableView'));
        resetValue();
      } else {
        ToastView(registerUser().message);
      }
    } else {
      ToastView(validateInputField().message);
    }
  };
  const validateInputField = () => {
    if (email === '') {
      return {status: false, message: 'email does not empty'};
    } else if (password === '') {
      return {status: false, message: 'password does not empty'};
    }
    return {status: true, message: 'Login success'};
  };

  const registerUser = () => {
    if (email !== LoginCredential.email) {
      return {status: false, message: 'user Email does not match'};
    } else if (password !== LoginCredential.password) {
      return {status: false, message: 'user password does not match'};
    }
    return {status: true, message: ''};
  };

  function resetValue() {
    setEmail('');
    setPassword('');
  }
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingVertical: 60,
          paddingHorizontal: 10,
          backgroundColor: '#FE5454',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold',
            padding: 10,
          }}>
          {'Login'}
        </Text>
        <Text style={{color: 'white', padding: 10}}>
          {'Hi Have a good day!'}
        </Text>
        <View style={{marginTop: 10, marginBottom: 20}}>
          <CustomInput
            textValue={email}
            heading={'Email'}
            keyBoardType={'default'}
            onChangeValue={text => {
              setEmail(text);
            }}
          />
          <CustomInput
            textValue={password}
            heading={'Password'}
            keyBoardType={'numeric'}
            onChangeValue={text => {
              setPassword(text);
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',

            paddingVertical: 15,
            marginTop: 25,
            marginHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            handleLogin();
          }}>
          <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>
            {'LOGIN'}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign: 'center', marginTop: 10, fontWeight: 'bold'}}>
        {'Do not have an account ?'}
      </Text>
    </View>
  );
};

export {LoginScreen};

const styles = StyleSheet.create({});
