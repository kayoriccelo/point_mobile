import styled from 'styled-components';


export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    alignItems: ${props => props.alignItens ? props.alignItens : 'center'};
    justifyContent: ${props => props.justifyContent ? props.justifyContent : 'center'};
    backgroundColor: #24292e;
`;

export default Container;