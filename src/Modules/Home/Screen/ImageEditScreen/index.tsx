import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {GenericText} from '../../../../Core/GenericText';
import {GenericTextWithImage} from '../../../../Core/GenericTextWithImage';
import {CommonCard} from '../../../../Core/CommonCard';
import {Header} from '../../../../Core/Header';
import {HEADER_VARIANT} from '../../../../Constant';
import {getListItem} from '../../Services/ListItem';
import {AppLoader} from '../../../../Core/AppLoader';
import {setSelectedItem} from '../../../../Redux';
import {useDispatch} from 'react-redux';
const ImageEditScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const params = '';
    setIsloading(true);
    getListItem(
      params,
      res => {
        setData(res);
        setIsloading(false);
      },
      err => {
        console.log('errr===>', err);
        setIsloading(false);
      },
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header
        variant={HEADER_VARIANT.JOB_TAB}
        searchInput={true}
        heading={'All Jobs'}
      />
      <AppLoader loading={isLoading} />
      {data && data.length > 0 && (
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            paddingBottom: 80,
          }}>
          <FlatList
            scrollEnabled
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}: {item: any; index: number}) => {
              const {
                userName,
                industry,
                documentType,
                date,
                invoice,
                location,
                purpose,
              } = item;
              return (
                <CommonCard
                  cardPress={() => {
                    dispatch(setSelectedItem(item));
                    navigation.navigate('StackNavigation', {
                      screen: 'ImageTableView',
                    });
                  }}>
                  <View style={{marginHorizontal: 3}}>
                    <View style={{paddingHorizontal: 5, paddingVertical: 5}}>
                      <GenericText title={userName} subTitle={industry} />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        padding: 6,
                      }}>
                      <View style={{flex: 1}}>
                        <GenericTextWithImage
                          imageName={'carryout'}
                          sideHeading={documentType}
                        />
                      </View>
                      <View style={{flex: 1, marginRight: 10}}>
                        <GenericTextWithImage
                          imageName={'layout'}
                          sideHeading={date}
                        />
                      </View>
                      {invoice && (
                        <View style={{flex: 1, marginLeft: 10}}>
                          <GenericTextWithImage
                            imageName={'carryout'}
                            sideHeading={invoice}
                          />
                        </View>
                      )}
                    </View>
                    <View style={{padding: 5}}>
                      <GenericTextWithImage
                        imageName={'enviromento'}
                        sideHeading={location}
                        textSize={11}
                        textColor={'#8E8E8E'}
                      />
                    </View>
                  </View>
                </CommonCard>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export {ImageEditScreen};

const styles = StyleSheet.create({});
