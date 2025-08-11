import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { FC } from 'react';
import {s, vs} from 'react-native-size-matters';
import AppColors from '../../themes/colors';
import AppText from '../appText';
import {Icons} from '../../assests/icons/iconpath';

type data ={
    bookImage:string,
    bookName:string,
    authorName:string,
    price:string
}

interface BookCardProps {
  data:data,
  deleteOnClick:()=>void,
  updateOnClick:()=>void,
}

const BookCard: FC<BookCardProps>= ({data, deleteOnClick, updateOnClick}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.bookImage}>
          <Image
            source={{
              uri: data?.bookImage,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.bookDetails}>
          <AppText
            title={data?.bookName}
            style={{lineHeight: 20, fontSize: 20, fontWeight: '800'}}
          />
          <AppText
            title={data?.authorName}
            style={{lineHeight: 20, color: AppColors?.mediumGray}}
          />
          <AppText
            title={data?.price}
            style={{lineHeight: 20, fontSize: 16, color: AppColors?.royalBlue}}
          />
        </View>
        <View style={styles.bookEditOptions}>
          <TouchableOpacity style={styles.btnBG} onPress={deleteOnClick}>
            {Icons?.delete}
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBG} onPress={updateOnClick}>
            {Icons?.edit}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: s(10),
  },
  cardContainer: {
    // flex:.01,
    width: '100%',
    shadowColor: AppColors?.mediumGray,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  bookImage: {
    flex: 1.5,
    // backgroundColor: 'red',
    padding: s(5),
  },
  bookDetails: {
    flex: 2,
    // backgroundColor: 'yellow',
    marginTop: s(10),
  },
  bookEditOptions: {
    flex: 1.3,
    // backgroundColor: 'green',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: s(90),
    height: vs(100),
  },
  btnBG: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: AppColors.lightBorderGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
