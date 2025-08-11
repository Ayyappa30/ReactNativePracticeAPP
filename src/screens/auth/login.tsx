import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
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
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import navigationSerivices from '../../routes/navigationSerivices';
import {IS_Ios} from '../../constants/constants';
import {signInWithEmailAndPassword} from '@react-native-firebase/auth';
import auth from "@react-native-firebase/auth"
import { showMessage } from 'react-native-flash-message';

const Login = () => {
  type FormDataType = yup.InferType<typeof loginSchema>;

  const loginSchema = yup
    .object({
      email: yup.string().required('email is Required'),

      password: yup
        .string()
        .required('password is Required')
        .min(6, 'Password minimum six digits'),
    })
    .required();

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(loginSchema),
  });

  const LoginValidate = async (FormData: FormDataType) => {
    console.log('first', FormData);
    try {
      const response = await auth().signInWithEmailAndPassword(
        FormData?.email,
        FormData?.password,
      );
      console.log('Logged in:', response.user);
      if (response.user) {
        navigationSerivices.navigate('bottomTabs');
      }
    } catch (err:any) {
      console.log('while Logging in:', err?.code);
      let errorMessage = ''

      if(err?.code === "auth/invalid-email"){
        errorMessage = "Invalid Email Address"
      }
      else if(err?.code === "auth/invalid-credential"){
        errorMessage = "Invalid Password"
      }
      showMessage({
        type:"danger",
        message: errorMessage
      })
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={IS_Ios ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
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
            onPress={handleSubmit(LoginValidate)}>
            <AppText
              title={'Login'}
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
            onPress={() => {
              navigationSerivices.navigate('Signup');
            }}>
            <AppText
              title={'Sign Up'}
              style={{
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
                color: 'black',
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textContiner: {
    borderColor: AppColors.lightBorderGray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
});
