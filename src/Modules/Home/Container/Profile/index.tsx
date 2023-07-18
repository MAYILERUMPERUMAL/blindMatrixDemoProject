import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
const Profile = () => {
  const {selectedListItem} = useSelector(
    (state: any) => state.NavigationReducer,
  );
  return (
    <View
      style={{flexDirection: 'row', marginHorizontal: 30, paddingVertical: 20}}>
      <Image
        style={{height: 40, width: 40, tintColor: 'grey'}}
        source={{uri: 'https://cdn-icons-png.flaticon.com/128/64/64572.png'}}
      />
      <View style={{flex: 1, marginLeft: 7, marginTop: 3}}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
          {'Mr.' + selectedListItem.userName}
        </Text>
        <Text
          style={{fontSize: 12, marginTop: -3, textTransform: 'capitalize'}}>
          {selectedListItem.industry}
        </Text>
      </View>
      <AntDesign
        name={'downcircleo'}
        size={15}
        color={'grey'}
        style={{marginTop: 8}}
      />
    </View>
  );
};

export {Profile};

const styles = StyleSheet.create({});
