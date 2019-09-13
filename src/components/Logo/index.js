import React from 'react';
import styled from 'styled-components';


export const Image = styled.Image`
    height: ${props => props.height ? props.height : '100px'};
    width: ${props => props.width ? props.width : '100px'};
`;

export const View = styled.View`
    borderRadius: 10px;
    backgroundColor: #fff;
    marginBottom: 10px;
`;

const Logo = (props) => {
    return (
        <View>
            <Image {...props} />
        </View>
    );
};

export default Logo;
