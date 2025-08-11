import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BaseContainer from '../../components/baseContainer';
import Entypo from 'react-native-vector-icons/Entypo';
import AppText from '../../components/appText';
import {s, vs} from 'react-native-size-matters';
import AppColors from '../../themes/colors';
import CategoryItem from '../../components/categoryItem';
import {cardTypes} from '../../data/shoppingCartData/cardData';
import DebitCard from '../../assests/svg/debitCard';
import {Icons} from '../../assests/icons/iconpath';
import navigationSerivices from '../../routes/navigationSerivices';

const PaymentScreen = () => {
  return (
    <BaseContainer
      headerStyle={{
        flexDirection: 'row',
        marginTop: s(40),
        alignItems: 'center',
      }}
      header={
        <>
          <TouchableOpacity onPress={()=>navigationSerivices.goBack()}>
            <View
              style={{
                width: s(32),
                height: vs(32),
                borderRadius: s(16),
                backgroundColor: AppColors?.lightBorderGray,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo name="chevron-left" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <AppText
            title={'Payment'}
            style={{
              marginStart: s(15),
              fontSize: 17,
              fontWeight: '400',
              color: '#181C2E',
            }}
          />
        </>
      }
      bodyStyle={{marginTop: vs(30)}}
      body={
        <>
          <CategoryItem data={cardTypes} style={styles.cardTypes} />
          <View style={styles.cardContainer}>
            <DebitCard />
            <View style={{marginTop: vs(20)}}>
              <AppText
                title="No Master Card Added"
                style={{
                  textAlign: 'center',
                  fontSize: s(16),
                  fontWeight: 700,
                  color: '#32343E',
                  marginBottom: vs(5),
                }}
              />
              <AppText
                title="You can add a mastercard and save it for later"
                style={{
                  textAlign: 'center',
                  fontSize: s(16),
                  fontWeight: 400,
                  color: '#2D2D2D',
                }}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: vs(20),
              height: vs(60),
              borderRadius: s(10),
              borderWidth:s(1),
              borderColor:AppColors?.lightBorderGray
            }}>
            <Pressable>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {Icons?.add}
                <AppText title={'ADD NEW'} style={{marginStart: s(10),color:"#FF7622"}} />
              </View>
            </Pressable>
          </View>

          <View style={{marginTop: vs(30),paddingLeft:s(10),flexDirection:"row"}}>
            <AppText title={'TOTAL : '} style={undefined}/>
            <AppText title={'$ 9000'} style={undefined}/>

          </View>

           <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: vs(10),
              height: vs(60),
              borderRadius: s(10),
              borderWidth:s(1),
              borderColor:AppColors?.lightBorderGray,
              backgroundColor:AppColors?.orange
            }}>
           
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AppText title={'Pay & Confirm'} style={{marginStart: s(10),color:AppColors?.white}} />
              </View>
           
          </TouchableOpacity>
        </>
      }
    />
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  cardTypes: {
    width: s(85),
    height: vs(72),
    borderRadius: s(7),
    backgroundColor: '#D8D3D380',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: s(320),
    height: vs(250),
    backgroundColor: AppColors?.lightBorderGray,
    borderRadius: s(10),
    marginTop: vs(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
