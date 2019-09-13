import React from 'react';

import { Container, Submit, Input, Grid } from '../../components';


export default function PointMarking({ navigation }) {
    return (
        <Container>
            <Grid>
                <Submit label="Entry" onPress={() => { }} />
                <Submit label="Interval Output" onPress={() => { }} />
            </Grid>
            <Grid>
                <Submit label="Return Interval" onPress={() => { }} />
                <Submit label="Leave" onPress={() => { }} />
            </Grid>
            <Input
                placeholder="Password"
                // value={password}
                onChangeText={(e) => setPassword(e)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            <Submit label="Submit" onPress={() => { }} />
        </Container>
    );
};
