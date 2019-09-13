import styled from 'styled-components';

export const Time = styled.Text`
    fontWeight: bold;
    fontSize: ${props => props.fontSize ? props.fontSize : '30px'};
    fontFamily: sans-serif;
    color: white;
    marginBottom: 40px
`;

export default Time;
