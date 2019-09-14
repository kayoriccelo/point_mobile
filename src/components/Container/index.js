import styled from 'styled-components';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  alignitems: ${props => (props.alignItens ? props.alignItens : 'center')};
  justifycontent: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  backgroundcolor: #24292e;
`;

export default Container;
