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
  paddinghorizontal: 10px;
  paddingvertical: 6px;
  marginbottom: 5px;
  borderradius: 5px;
  backgroundcolor: #3f51b5;
  alignself: stretch;
`;

export const Text = styled.Text`
  color: #fff;
  fontsize: 16px;
  textalign: center;
`;

export default Submit;
