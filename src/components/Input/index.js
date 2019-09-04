import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';


export default function Input(props) {
    return (
            <InputStyled
                {...props}
            />
    );
};

const InputStyled = styled.TextInput`
    paddingHorizontal: 10px;
    paddingVertical: 8px;
    borderRadius: 5px;
    backgroundColor: #FFF;
    alignSelf: stretch;
    marginBottom: 10px;
    marginHorizontal: 10px;
    fontSize: 16px;
    border: 1px solid #d1d5da;
`;
