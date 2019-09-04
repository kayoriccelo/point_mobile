import React, { useState } from 'react';

import {
    Container,
    Header, Content,
    Logo, Title, Input, Button, ButtonText, Link, LinkText
} from './styles';

export default function SignIn({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignInPress = () => {
        console.log('Sign in Press;')
    };

    const handleCreateAccountPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <Container>
            <Header>
                <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
                <Title>Sign In to Eletronic Point</Title>
            </Header>
            <Content>
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
                <Button onPress={handleSignInPress}>
                    <ButtonText>Sign In</ButtonText>
                </Button>
                <Link onPress={handleCreateAccountPress}>
                    <LinkText>Not already have an account? Sign Up</LinkText>
                </Link>
            </Content>
        </Container>
    );
};
