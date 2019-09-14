import styled from 'styled-components';

export const Content = styled.View`
  ${props => props.width && 'width: ' + props.width + ';'}
  ${props =>
    props.height && 'height: ' + props.height + ';'}
  alignItems: center;
  justifycontent: center;
`;

export default Content;
