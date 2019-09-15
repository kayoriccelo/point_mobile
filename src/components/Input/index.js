/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Input = styled.TextInput`
    paddingHorizontal: 10px;
    paddingVertical: 8px;
    borderRadius: 5px;
    backgroundColor: #FFF;
    alignSelf: stretch;
    marginBottom: 10px;
    fontSize: 16px;
    border: 1px solid #d1d5da;
    ${props => props.width && 'width: ' + props.width + ';'}
    ${props => props.marginLeft && 'marginLeft: ' + props.marginLeft + ';'}
    ${props => props.marginTop && 'marginTop: ' + props.marginTop + ';'}
    ${props => props.marginRight && 'marginRight: ' + props.marginRight + ';'}
    ${props => props.marginBottom && 'marginBottom: ' + props.marginBottom + ';'}
`;

export default Input;
