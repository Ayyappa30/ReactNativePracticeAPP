import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppColors from '../../themes/colors';
import AppTextInputController from '../appText/AppTextInputController';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const CheckOut = () => {
  const schema = yup
    .object({
      fullName: yup
        .string()
        .required('Name is required')
        .min(3, 'Atleast 3 charactors'),

        phoneNumber: yup
        .string()
        .required("Phone Number is Required")
        .matches(/^[0-9]+$/,"Must be only Digits")
        .max(10,'phone number must be 10 digits'),

        detailedAddress: yup
        .string()
        .required("Address is required")
        .min(15, "please provide a vaild address")
    })
    .required();

    type FormDataType = yup.InferType<typeof schema>;

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(schema)
  });

  const formSubmit = (formData:FormDataType) => {
    console.log('first', formData);
  };
  return (
    <View style={{flex: 1, margin: 10}}>
      <View style={{flex: 1}}>
        <View style={styles.cardContainer}>
          <AppTextInputController
            control={control}
            name={'fullName'}
            placeholder="Full Name"
            placeholderTextColor={'#000'}
            style={styles.textContiner} keyboardType={'default'} secureTextEntry={false}            // rules={{required:"full Name is Required"}}
          />
          <AppTextInputController
            control={control}
            name={'phoneNumber'}
            placeholder="Phone Number"
            placeholderTextColor={'#000'}
            style={styles.textContiner} keyboardType={'default'} secureTextEntry={false}          />
          <AppTextInputController
            control={control}
            name={'detailedAddress'}
            placeholder="Detailed Address"
            placeholderTextColor={'#000'}
            style={styles.textContiner}
            rules={undefined}
            keyboardType={"default"}
            secureTextEntry={false}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}
          onPress={handleSubmit(formSubmit)}>
          <Text style={{color: 'white'}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    padding: 10,
  },
  textContiner: {
    borderColor: AppColors.lightBorderGray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});
