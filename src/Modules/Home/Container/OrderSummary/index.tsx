import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OrderSummary = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <View
      style={{
        marginHorizontal: 20,
        borderTopWidth: 2,
        borderColor: '#F8F8F8',
        paddingVertical: 4,
        marginVertical: 5,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 20,
        }}>
        {'Order Item Summary'}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
          marginHorizontal: 10,
        }}>
        <Text style={{fontSize: 12}}>{'Total Quantity'}</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>
          {'06 Qty'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 30,
        }}>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>
          {'Price Details'}
        </Text>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            setIsShowMore(!isShowMore);
          }}>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#CF2379'}}>
            {'Show More'}
          </Text>
          <AntDesign
            name={isShowMore ? 'up' : 'down'}
            size={12}
            color={'#CF2379'}
            style={{marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {OrderSummary};

const styles = StyleSheet.create({});
