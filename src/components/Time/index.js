import styled from 'styled-components';

export const Time = styled.Text`
  fontweight: bold;
  fontsize: ${props => (props.fontSize ? props.fontSize : '30px')};
  fontfamily: sans-serif;
  color: white;
  marginbottom: 40px;
`;

export default Time;
