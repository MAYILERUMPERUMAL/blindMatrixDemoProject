import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListContainer} from '../ListContainer';
import {ListImageTitle} from '../ListImageTitle';
const ProductCard = ({item}) => {
  const {title, description, quantity, price, net, vot, imageUrl} = item;
  return (
    <>
      <ListContainer>
        <ListImageTitle title={title} subTitle={description} icon={imageUrl} />

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{borderWidth: 1, padding: 2}}>
            <Text style={{fontSize: 10}}>{'Qty:' + quantity}</Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 20,
            }}>
            {price}
          </Text>
          <Text
            style={{fontSize: 10, textAlignVertical: 'center', marginLeft: 5}}>
            {'net:' + net}
          </Text>
          <Text
            style={{fontSize: 10, textAlignVertical: 'center', marginLeft: 5}}>
            {'vot:' + vot}
          </Text>
        </View>
      </ListContainer>
    </>
  );
};

export {ProductCard};

const styles = StyleSheet.create({});
