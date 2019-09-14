import React from 'react';
import styled from 'styled-components';

export default function Link({label, onPress}) {
  return (
    <Touch onPress={onPress}>
      <LinkText>{label}</LinkText>
    </Touch>
  );
}

export const Touch = styled.TouchableHighlight`
  padding: 6px;
  marginhorizontal: 10px;
  alignself: stretch;
`;

export const LinkText = styled.Text`
  fontsize: 16px;
  textalign: center;
  color: #fff;
`;
