import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../../../../Core/Header';
import {ProductCard} from '../../Container/ProductCard';
import {AddProduct} from '../../Container/AddProduct';
import {Profile} from '../../Container/Profile';
import {HEADER_VARIANT} from '../../../../Constant';
import {OrderSummary} from '../../Container/OrderSummary';
import {SecondaryButton} from '../../../../Core/SecondarButton';
import {getProducts} from '../../Services/getProduct';
import {useSelector} from 'react-redux';
import {getShrinkTitle} from '../../../../Constant';
import {AppLoader} from '../../../../Core/AppLoader';
const ImageTableView = () => {
  const {selectedListItem} = useSelector(
    (state: any) => state.NavigationReducer,
  );

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    handleGetProducts();
  }, []);
  const handleGetProducts = () => {
    setIsLoading(true);
    const params = {
      id: selectedListItem.id,
    };

    getProducts(
      params,
      res => {
        setProductData(res);
        setIsLoading(false);
      },
      err => {
        console.log('error');
        setIsLoading(false);
      },
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        variant={HEADER_VARIANT.EDIT_TAB}
        menuDot={true}
        heading={getShrinkTitle(selectedListItem.userName)}
      />
      <Profile />

      <AddProduct />
      <AppLoader loading={isLoading} />
      <View style={{paddingHorizontal: 10, paddingVertical: 10, flex: 1}}>
        <FlatList
          data={productData}
          renderItem={({item}: {item: any; index: number}) => {
            return <ProductCard item={item} />;
          }}
        />
      </View>
      <OrderSummary />
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 15,
          elevation: 25,
        }}>
        <SecondaryButton />
      </View>
    </View>
  );
};

export {ImageTableView};

const styles = StyleSheet.create({});
