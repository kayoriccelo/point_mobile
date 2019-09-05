import React from 'react';
import styled from 'styled-components';


export default function Button({ label, onPress }) {
    return (
        <Link onPress={onPress}>
            <LinkText>{label}</LinkText>
        </Link>
    );
};

export const Link = styled.TouchableHighlight`
    padding: 6px;
    marginHorizontal: 10px;
    alignSelf: stretch;
`;

export const LinkText = styled.Text`
    fontSize: 16px;
    textAlign: center;
    color: #fff;
`;
