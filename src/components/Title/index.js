import styled from 'styled-components';


export const Title = styled.Text`
    fontWeight: bold;
    fontSize: ${props => props.fontSize ? props.fontSize : '20px'};
    fontFamily: sans-serif;
    color: white;
`;

export default Title;
