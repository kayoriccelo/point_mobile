import styled from 'styled-components';


export const Content = styled.View`
    ${props => props.width && 'width: ' + props.width + ';'}
    alignItems: center;
    justifyContent: center;
`;

export default Content;