import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const ListContainer = ({children}) => {
  return (
    <View style={styles.container1}>
      <View style={{flex: 1, paddingVertical: 10, paddingHorizontal: 10}}>
        {children}
      </View>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <AntDesign name={'copy1'} size={18} color={'black'} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginLeft: 4,
              textAlignVertical: 'center',
              color: 'black',
            }}>
            {'Copy'}
          </Text>
        </View>
        <View style={styles.container4}>
          <AntDesign name={'pausecircleo'} size={18} color={'black'} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginLeft: 4,
              textAlignVertical: 'center',
              color: 'black',
            }}>
            {'Hold'}
          </Text>
        </View>
        <View style={styles.container5}>
          <Entypo name={'controller-record'} size={18} color={'#F6F6F6'} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginLeft: 4,
              textAlignVertical: 'center',
              color: 'black',
            }}>
            {'Ready'}
          </Text>
        </View>
        <View style={styles.container6}>
          <AntDesign
            name={'delete'}
            size={18}
            color={'black'}
            style={{marginTop: 3}}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginLeft: 4,
              marginTop: 3,
              color: 'black',
            }}>
            {'Delete'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export {ListContainer};

const styles = StyleSheet.create({
  container1: {
    height: 150,
    backgroundColor: 'white',
    elevation: 5,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  container3: {
    flex: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  container4: {
    flex: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  container5: {
    flex: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  container6: {
    flex: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
