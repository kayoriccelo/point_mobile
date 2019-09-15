/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const TypeMarking = ({label, onPress}) => {
  return (
    <Touch onPress={onPress}>
      <Text>{label}</Text>
    </Touch>
  );
};

export const Touch = styled.TouchableHighlight`
  height: 100px;
  width: 100px;
  margin: 5px;
  borderRadius: 5px;
  backgroundColor: white;
  justifyContent: center;
  alignItems: center;
`;

export const Text = styled.Text`
  fontSize: 16px;
  textAlign: center;
`;

export default TypeMarking;
