import styled from 'styled-components';


const Message = styled.Text`
  textAlign: center;
  color: ${props => props.is_error ? '#ce2029' : '#08a092'};
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

export default Message;