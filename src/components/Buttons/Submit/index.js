/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const Submit = ({label, onPress}) => {
  return (
    <Touch onPress={onPress}>
      <Text>{label}</Text>
    </Touch>
  );
};

export const Touch = styled.TouchableHighlight`
  paddingHorizontal: 10px;
  paddingVertical: 6px;
  marginBottom: 5px;
  borderRadius: 5px;
  backgroundColor: #3f51b5;
  alignSelf: stretch;
`;

export const Text = styled.Text`
  color: #fff;
  fontSize: 16px;
  textAlign: center;
`;

export default Submit;
