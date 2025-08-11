import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WatchCart from '../components/watchCart';
import EmptyCart from '../components/watchCart/EmptyCart';
import TotalsView from '../components/watchCart/TotalsView';
import {products} from '../data/products';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {
  increaseItemFromCart,
  removeItemFromCart,
  removeProductFromCart,
} from '../store/reducers/cartSlice';
import {shipping_Fees, taxes} from '../constants/constants';

const cart = () => {
  const {items} = useSelector((state: RootState) => state.cartReducer);

  const totalItemsPrice = items.reduce((acc, item) => acc + item.sum, 0);

  const orderTotalPrice = totalItemsPrice + taxes + shipping_Fees;

  const dispatch = useDispatch();

  console.log('DrawerItemList', items);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <WatchCart
            imageUri={item?.imageURL}
            productName={item?.title}
            price={item?.sum}
            quantity={item?.qty}
            onDeletePress={() => dispatch(removeProductFromCart(item))}
            onIncreasePress={() => dispatch(increaseItemFromCart(item))}
            onDecressPress={() => dispatch(removeItemFromCart(item))}
          />
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100%',
            }}>
            <EmptyCart />
          </View>
        )}
        contentContainerStyle={{
          marginBottom: 10,
        }}
      />
      {items.length === 0 ? null : (
        <TotalsView itemsPrice={totalItemsPrice} orderTotal={orderTotalPrice} />
      )}
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({});
