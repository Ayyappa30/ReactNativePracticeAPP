import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React from 'react';
import {shopCardData} from '../../data/shoppingCartData/cardData';
import {s, vs} from 'react-native-size-matters';
import AppColors from '../../themes/colors';

interface cardItemsProps {
  id: number;
  title: string;
  btnText: string;
  bgclr: string;
}

const ShopHomeCard = ({shopCardData}) => {
  const renderCard = (item: cardItemsProps) => {
    return (
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: `hsl(${item.bgclr[0]}, ${item.bgclr[1] * 100}%, ${
              item.bgclr[2] * 100
            }%)`,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: AppColors.white,
            width: s(70),
            height: vs(30),
            justifyContent: 'center',
            marginLeft: 16,
            borderRadius: s(17),
          }}>
          <Text style={styles.button}>{item.buttonText}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={shopCardData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderCard(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ShopHomeCard;

const styles = StyleSheet.create({
  card: {
    width: s(260),
    height: vs(120),
    borderRadius: s(15),
    marginRight: 20,
    justifyContent: 'center',
  },
  title: {
    padding: s(16),
    color: AppColors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  button: {
    textAlign: 'center',
    color:"black"
  },
});
