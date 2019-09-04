import styled from 'styled-components';


export const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #24292e;
`;

export const Header = styled.View`
    width: 85%;
    height: 100px;
    marginBottom: 10px;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #fff;
    borderRadius: 5;
`;

export const Content = styled.View`
    width: 90%;
    alignItems: center;
    justifyContent: center;
`;

export const Logo = styled.Image`
    height: 70px;
`;

export const Title = styled.Text`
    fontWeight: bold;
    fontSize: 18px;
    fontFamily: sans-serif;
`;

export const Input = styled.TextInput`
    paddingHorizontal: 10px;
    paddingVertical: 8px;
    borderRadius: 5px;
    backgroundColor: #FFF;
    alignSelf: stretch;
    marginBottom: 10px;
    marginHorizontal: 10px;
    fontSize: 16px;
    border: 1px solid #d1d5da;
`;

export const Button = styled.TouchableHighlight`
    paddingHorizontal: 10px;
    paddingVertical: 6px;
    marginHorizontal: 10px;
    marginBottom: 5px;
    borderRadius: 5px;
    backgroundColor: #3f51b5;
    alignSelf: stretch;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    fontWeight: bold;
    fontSize: 16px;
    textAlign: center;
`;

export const Link = styled.TouchableHighlight`
    padding: 6px;
    paddingHorizontal: 10px;
    marginHorizontal: 10px;
    alignSelf: stretch;
`;

export const LinkText = styled.Text`
    fontSize: 16px;
    textAlign: center;
    color: #fff;
`;
