import React, { useState, useRef } from 'react';
import { Platform } from 'react-native';

import {
    Container,
    Header, Content,
    Logo, Title, Button, ButtonText, Link, LinkText
} from './styles';
import { Input } from '../../components';


export default function SignUp({ navigation }) {
    const [values, setValue] = useState({
        first_name: { value: null },
        last_name: { value: null, ref: useRef() },
        username: { value: null, ref: useRef() },
        cpf: { value: null, ref: useRef() },
        email: { value: null, ref: useRef() },
        password: { value: null, ref: useRef() }
    });

    const handleChange = (fieldName) => (value) => {
        setValue({ ...values, [fieldName]: value });
    };

    const handleSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const handleCreateAccountPress = () => {
        console.log('Create Account Press;')
        values['last_name']['ref'].current.focus();
    };

    return (
        <Container
            behavior={Platform.select({
                ios: 'padding',
                android: null,
            })}
        >
            <Header>
                <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
                <Title>Sign Up to Eletronic Point</Title>
            </Header>
            <Content>
                <Input
                    placeholder="First Name"
                    value={values['first_name']['value']}
                    onChangeText={handleChange('first_name')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => console.log(values.last_name.ref)}
                />
                <Input
                    placeholder="Last Name"
                    value={values['last_name']['value']}
                    onChangeText={handleChange('last_name')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    ref={ref => values.last_name.ref = ref}
                    onSubmitEditing={() => values['username'].focus()}
                />
                <Input
                    placeholder="Username"
                    value={values['username']}
                    onChangeText={handleChange('username')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    ref={values['username']}
                    onSubmitEditing={() => values['cpf'].focus()}
                />
                <Input
                    placeholder="Cpf"
                    value={values['cpf']}
                    onChangeText={handleChange('cpf')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    ref={values['cpf']}
                    onSubmitEditing={() => values['email'].focus()}
                />
                <Input
                    placeholder="Email Address"
                    value={values['email']}
                    onChangeText={handleChange('email')}
                    autoCapitalize="none"
                    ref={values['email']}
                    onSubmitEditing={() => values['password'].focus()}
                />
                <Input
                    placeholder="Password"
                    value={values['password']}
                    onChangeText={handleChange('password')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    ref={values['password']}
                    onSubmitEditing={() => handleCreateAccountPress()}
                />
                <Button onPress={handleCreateAccountPress}>
                    <ButtonText>Sign Up</ButtonText>
                </Button>
                <Link onPress={handleSignInPress}>
                    <LinkText>Already have an account? Sign In</LinkText>
                </Link>
            </Content>
        </Container>
    );
};
