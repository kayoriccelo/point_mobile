import React from 'react';
import styled from 'styled-components';


export default function Link({ label, onPress }) {
    return (
        <Touch onPress={onPress}>
            <LinkText>{label}</LinkText>
        </Touch>
    );
};

export const Touch = styled.TouchableHighlight`
    padding: 6px;
    marginHorizontal: 10px;
    alignSelf: stretch;
`;

export const LinkText = styled.Text`
    fontSize: 16px;
    textAlign: center;
    color: #fff;
`;
