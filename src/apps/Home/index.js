import React from 'react';

import { Container, Title, Toolbar, MenuCustom, Content } from '../../components';


export default function Home({ navigation }) {
    return (
        <Container justifyContent="flex-start">
            <Toolbar>
                <Title fontSize="15px">Eletronic Point</Title>
                <MenuCustom navigation={navigation} />
            </Toolbar>
            <Content height="100%">
                <Title>Welcome, Kayo Riccelo!</Title>
            </Content>
        </Container>
    );
};
