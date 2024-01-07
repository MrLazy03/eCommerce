import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

//custom imports
import {
  Container,
  CustomButton,
  CustomLoader,
  CustomTextInput,
} from '../../components';
import {signinUser} from '../../store/Modules/Authentication/authSlice';
import {emailValidator, passwordValidator} from '../../utilities/validator';
import styles from './styles';

const SignIn = ({}) => {
  const {loading} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleSignIn = () => {
    const isEmailInValid = emailValidator(email.trim(), 'email');
    const isPasswordInValid = passwordValidator(password.trim(), 'password');

    if (isEmailInValid) {
      showMessage({type: 'danger', message: isEmailInValid});
      return;
    }
    if (isPasswordInValid) {
      showMessage({type: 'danger', message: isPasswordInValid});
      return;
    }

    // continue for login
    const payload = {};
    payload['email'] = email;
    payload['password'] = password;
    dispatch(signinUser(payload))
      .unwrap()
      .then(response => {
        showMessage({
          message: response?.message || 'Login Successfully',
          type: 'success',
        });
      })
      .catch(error => {
        showMessage({
          message: error?.error || 'something went wrong',
          type: 'danger',
        });
      });
  };

  const renderHeaderText = () => {
    return (
      <View style={styles.headerTextContainer}>
        <Text style={[styles.headerText]}>Login to Shoply</Text>
      </View>
    );
  };

  const renderSignInButton = () => {
    return (
      <View style={styles.signButtonContainer}>
        <CustomButton title={'LOG IN'} onPress={handleSignIn} />
      </View>
    );
  };

  const renderInputField = () => {
    return (
      <View style={styles.inputFieldContainer}>
        <View>
          <CustomTextInput
            label="Email"
            value={email}
            onChange={text => {
              setEmail(text);
              setEmailError('');
            }}
            errorText={emailError}
            customStyle={{width: '92%'}}
            placeholder={'Email Id'}
          />
          <CustomTextInput
            label="Password"
            value={password}
            onChange={text => {
              setPassword(text);
              setPasswordError('');
            }}
            type={'PASSWORD'}
            errorText={passwordError}
            secureText={passwordVisibility}
            onTogglePasswordVisibility={setPasswordVisibility}
            customStyle={{width: '92%'}}
            placeholder={'Password'}
          />
        </View>
        {renderSignInButton()}
      </View>
    );
  };

  return (
    <Container customStyle={{flex: 1}}>
      <ScrollView>
        {renderHeaderText()}
        {renderInputField()}
      </ScrollView>
      {<CustomLoader loading={loading} />}
    </Container>
  );
};

export default SignIn;
