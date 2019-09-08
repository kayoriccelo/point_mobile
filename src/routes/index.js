import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignIn from '../apps/SignIn';
import SignUp from '../apps/SignUp';
import Dashboard from '../apps/Dashboard';
import Profile from '../apps/Profile';
import MyPoints from '../apps/MyPoints';
import PointMarking from '../apps/PointMarking';


export const RoutesPrimary = createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp,
        Main: createMaterialBottomTabNavigator({
            Dashboard: {
                screen: Dashboard,
                navigationOptions: () => ({
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home" size={20} color={focused ? '#fff' : '#ddd'} />
                    ),
                }),
            },
            Profile: {
                screen: Profile,
                navigationOptions: () => ({
                    tabBarIcon: ({ focused }) => (
                        <Icon name="user-circle" size={20} color={focused ? '#fff' : '#ddd'} />
                    ),
                }),
            },
            Points: {
                screen: MyPoints,
                navigationOptions: () => ({
                    tabBarIcon: ({ focused }) => (
                        <Icon name="list-alt" size={20} color={focused ? '#fff' : '#ddd'} />
                    ),
                }),
            },
            Marking: {
                screen: PointMarking,
                navigationOptions: () => ({
                    tabBarIcon: ({ focused }) => (
                        <Icon name="plus-circle" size={20} color={focused ? '#fff' : '#ddd'} />
                    ),
                }),
            },
        },
            {
                barStyle: {
                    backgroundColor: '#161a1d',
                },
            })
    })
);
