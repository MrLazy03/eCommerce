import {View, TextInput, Text, Pressable} from 'react-native';
import React from 'react';

import styles from './styles';
import {Icon} from '..';

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChange,
  type,
  secureText,
  onTogglePasswordVisibility,
  keyboardType,
  customStyle,
  required,
}) => {
  return (
    <View style={[styles.constainer, customStyle]}>
      <View style={{flexDirection: 'row'}}>
        {label && <Text style={[styles.label]}>{label}</Text>}
        {required && <Text style={{color: 'red'}}>*</Text>}
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChange}
          keyboardType={keyboardType}
          placeholderTextColor="gray"
          showSoftInputOnFocus={true}
          cursorColor={'blue'}
          value={value}
          style={[styles.input]}
          secureTextEntry={type === 'PASSWORD' ? !secureText : false}
        />
        {type == 'PASSWORD' && (
          <Pressable
            onPress={() => onTogglePasswordVisibility(!secureText)}
            style={{position: 'absolute', right: -10, top: 8}}>
            <Icon
              type={'FontAwesome'}
              name={!secureText ? 'eye-slash' : 'eye'}
              size={20}
              color={'blue'}
              style={styles.eyeIcon}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default React.memo(CustomTextInput);
