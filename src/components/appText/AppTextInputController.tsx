import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import React, { FC } from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';

interface AppTextInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  rules?: object;
  keyboardType: 'default' | 'numeric' | 'email-address';
  secureTextEntry: boolean;
  placeholderTextColor: string;
  style: StyleProp<TextStyle>;
}

const AppTextInputController = <T extends FieldValues>({
  control,
  name,
  placeholder,
  rules,
  keyboardType,
  secureTextEntry,
  placeholderTextColor,
  style,
}: AppTextInputControllerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
        <View>
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={placeholderTextColor}
            style={[style,error&&{borderColor:"red"}]}
          />
          {error && (
            <Text style={{color: 'red', marginLeft: 15}}>{error.message}</Text>
          )}
        </View>
      )}
    />
  );
};

export default AppTextInputController;

const styles = StyleSheet.create({});
