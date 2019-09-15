/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

export const View = styled.View`
  position: absolute;
  right: 10px;
`;

export const Touch = styled.TouchableHighlight`
  paddingHorizontal: 12px;
  paddingVertical: 6px;
`;

export default function MenuCustom({navigation}) {
  _menu = null;

  setMenuRef = ref => {
    _menu = ref;
  };

  openProfile = () => {
    navigation.navigate('Profile');
    _menu.hide();
  };

  signOut = () => {
    navigation.navigate('SignIn');
    _menu.hide();
  };

  showMenu = () => {
    _menu.show();
  };

  return (
    <View>
      <Menu
        ref={setMenuRef}
        button={
          <Touch onPress={showMenu}>
            <Icon name="ellipsis-v" color="#fff" size={20} />
          </Touch>
        }>
        <MenuItem onPress={openProfile}>Profile</MenuItem>
        <MenuDivider />
        <MenuItem onPress={signOut}>Sign Out</MenuItem>
      </Menu>
    </View>
  );
}
