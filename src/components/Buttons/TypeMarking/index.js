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
  borderradius: 5px;
  backgroundcolor: white;
  justifycontent: center;
  alignitems: center;
`;

export const Text = styled.Text`
  fontsize: 16px;
  textalign: center;
`;

export default TypeMarking;
