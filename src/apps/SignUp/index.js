/* eslint-disable no-shadow */
import React, {useState, useRef} from 'react';
import {Platform, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Container,
  Header,
  Logo,
  Title,
  Content,
  Grid,
  Input,
  Submit,
  Link,
  Message,
} from '../../components';
import {save, showMessage} from './store/ducks';

export const SignUp = ({navigation, save, showMessage}) => {
  const [values, setValue] = useState({
    first_name: {value: null, ref: useRef()},
    last_name: {value: null, ref: useRef()},
    username: {value: null, ref: useRef()},
    cpf: {value: null, ref: useRef()},
    email: {value: null, ref: useRef()},
    password: {value: null, ref: useRef()},
  });

  const handleChange = fieldName => value => {
    setValue({...values, [fieldName]: value});
  };

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const handleCreateAccountPress = () => {
    let is_required = false;
    let user = {};

    Object.keys(values).map(field => {
      if (!is_required) {
        is_required = values[field].value === null;
      }
      user[field] = values[field].value;
    });

    if (!is_required) {
      save(user, navigation);
    } else {
      showMessage({
        message: 'Required fields.',
        variant: 'warning',
        open: true,
      });
    }
  };

  return (
    <Container
      behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}>
      <StatusBar hidden />
      <Header>
        <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
        <Title>Sign Up to Eletronic Point</Title>
      </Header>
      <Content>
        <Message />
        <Grid>
          <Input
            width="41%"
            marginRight="6px"
            placeholder="First Name"
            value={values.first_name.value}
            onChangeText={handleChange('first_name')}
            returnKeyType="next"
            onSubmitEditing={() => values.last_name.ref.current.focus()}
          />
          <Input
            width="41%"
            marginLeft="6px"
            placeholder="Last Name"
            value={values.last_name.value}
            onChangeText={handleChange('last_name')}
            returnKeyType="next"
            ref={values.last_name.ref}
            onSubmitEditing={() => values.username.ref.current.focus()}
          />
        </Grid>
        <Grid>
          <Input
            width="41%"
            marginRight="6px"
            placeholder="Username"
            value={values.username.value}
            onChangeText={handleChange('username')}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            ref={values.username.ref}
            onSubmitEditing={() => values.cpf.ref.current.focus()}
          />
          <Input
            width="41%"
            marginLeft="6px"
            placeholder="Cpf"
            value={values.cpf.value}
            onChangeText={handleChange('cpf')}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            ref={values.cpf.ref}
            onSubmitEditing={() => values.email.ref.current.focus()}
          />
        </Grid>
        <Input
          placeholder="Email Address"
          value={values.email.value}
          onChangeText={handleChange('email')}
          autoCapitalize="none"
          returnKeyType="next"
          ref={values.email.ref}
          onSubmitEditing={() => values.password.ref.current.focus()}
        />
        <Input
          placeholder="Password"
          value={values.password.value}
          onChangeText={handleChange('password')}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          ref={values.password.ref}
        />
        <Submit label="SIGN UP" onPress={handleCreateAccountPress} />
        <Link
          label="Already have an account? Sign In"
          onPress={handleSignInPress}
        />
      </Content>
    </Container>
  );
};

const mapStateToProps = ({message}) => ({message: message});
const mapDispatchToProps = dispatch =>
  bindActionCreators({save, showMessage}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
