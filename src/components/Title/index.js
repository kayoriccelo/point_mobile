import styled from 'styled-components';

export const Title = styled.Text`
  fontweight: bold;
  fontsize: ${props => (props.fontSize ? props.fontSize : '20px')};
  fontfamily: sans-serif;
  color: white;
`;

export default Title;
