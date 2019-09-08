import React, { useState } from 'react';
import { Platform, StatusBar } from 'react-native';

import {
    Container, Header, Logo, Title, Content,
    Input, Button, Link
} from '../../components';

export default function SignIn({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignInPress = () => {
        console.log('Sign in Press;');
        navigation.navigate('Dashboard');
    };

    const handleCreateAccountPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <Container
            behavior={Platform.select({
                ios: 'padding',
                android: null,
            })}
        >
            <Content width="90%">
                <StatusBar hidden />
                <Header>
                    <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
                    <Title>Sign In to Eletronic Point</Title>
                </Header>
                <Input
                    placeholder="Username"
                    value={username}
                    onChangeText={(e) => setUsername(e)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <Button label="SIGN IN" onPress={handleSignInPress} />
                <Link label="Not already have an account? Sign Up" onPress={handleCreateAccountPress} />
            </Content>
        </Container>
    );
};
