import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icons} from '../../assests/icons/iconpath';
import AppText from '../../components/appText';
import AppTextInputController from '../../components/appText/AppTextInputController';
import {useForm} from 'react-hook-form';
import AppColors from '../../themes/colors';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import navigationSerivices from '../../routes/navigationSerivices';
import auth from "@react-native-firebase/auth"

const SignUp = () => {
 
    type FormDataType = yup.InferType<typeof loginSchema>

  const loginSchema = yup.object({
    userName:yup
    .string()
    .required("User Name is Required")
    .min(3,"Atleast three Characters"),

    email: yup
    .string()
    .required("email is Required"),

    password: yup
    .string()
    .required("password is Required")
    .min(6,"Password minimum six digits")
    
  }).required();

   const {control, handleSubmit,reset} = useForm({
    resolver:yupResolver(loginSchema)
  });

  const LoginValidate = async(FormData:FormDataType)=>{
    console.log("first",FormData)
    try{

      const response = await auth().createUserWithEmailAndPassword(FormData?.email,FormData?.password)
      if(response){
        Alert.alert("user is successfully created")
        reset()
      }
    }catch(err){
      console.log("An Error occured while creating the user")
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          {Icons.cart({color: 'black', size: 90})}
        </View>
        <View>
          <AppText
            title={'Smart'}
            style={{
              fontSize: 60,
              fontWeight: '800',
              justifyContent: 'center',
              marginStart: 10,
            }}
          />
          <AppText
            title={'E COMMERCE'}
            style={{
              fontSize: 30,
              fontWeight: '400',
              justifyContent: 'center',
              marginStart: 10,
            }}
          />
        </View>
      </View>
      <View style={{marginTop: 20}}>
         <AppTextInputController
          control={control}
          name={'userName'}
          placeholder="Full Name..."
          placeholderTextColor={'#000'}
          style={styles.textContiner}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <AppTextInputController
          control={control}
          name={'email'}
          placeholder="Email ..."
          placeholderTextColor={'#000'}
          style={styles.textContiner}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <AppTextInputController
          control={control}
          name={'password'}
          placeholder="Password"
          placeholderTextColor={'#000'}
          style={styles.textContiner}
          keyboardType={'default'}
          secureTextEntry={false}
        />
      </View>
      <View>
        <AppText
          title={'Smart E Commerce'}
          style={{
            fontSize: 16,
            fontWeight: '800',
            textAlign: 'center',
            marginTop: 10,
          }}
        />
      </View>
      <View style={{marginTop: 20, margin: 10, rowGap: 20}}>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: 'black',
            padding: 15,
            borderRadius: 20,
          }}
          onPress={handleSubmit(LoginValidate)}
          >
          <AppText
            title={'Create a new account'}
            style={{
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
              color: 'white',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 20,
            borderColor: 'black',
            borderWidth: 1,
          }}
          onPress={()=>{
            navigationSerivices.navigate("Login")
          }}
          >
          <AppText
            title={'Go to sign in'}
            style={{
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
              color: 'black',
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textContiner: {
    borderColor: AppColors.lightBorderGray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
});
