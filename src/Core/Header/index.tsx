import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SearchInput} from '../SearchInput';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = ({variant, searchInput = false, menuDot = false, heading}) => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', paddingVertical: 5, elevation: 5}}>
      <View
        style={{backgroundColor: 'white', flexDirection: 'row', padding: 10}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name={'left'} size={20} color={'grey'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginRight: 60,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              textTransform: 'uppercase',
            }}>
            {heading}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginRight: 20,
          }}>
          {variant === 'JOB_TAB' && (
            <>
              <TouchableOpacity style={{marginRight: 10}}>
                {/* <AntDesign name={'Trophy'} size={20} color={'green'} /> */}
                <Feather name={'filter'} size={20} color={'black'} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name={'bell'} size={20} color={'black'} />
              </TouchableOpacity>
            </>
          )}
          {variant === 'EDIT_TAB' && (
            <TouchableOpacity>
              <Entypo name={'dots-three-vertical'} size={18} color={'black'} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {searchInput && <SearchInput />}
    </View>
  );
};

export {Header};

const styles = StyleSheet.create({});
