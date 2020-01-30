import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screen/Home';
import Boarding from '../Screen/Boarding';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Image } from 'react-native'
import Icon from "react-native-vector-icons/Feather";
import Header from "../Screen/Header";

import Signup from "../Screen/Signup";
import Signin from "../Screen/Signup";
import Forgotpass from "../Screen/Forgotpass";
import SignUp from "../Screen/Signup";
import {Expenso} from "../Walkthrough";
class Drawerstyle extends Component{

    render(){
        return(<View><Text>Hello hackers</Text></View>
        )
    }
}

const Appdraw = createDrawerNavigator({


    Home: {
        screen: Home,
    },
    Boarding: {
        screen: Boarding,

    },

}, {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: Drawerstyle,

});

const AppNavigator = createStackNavigator({

        Signup: {
            screen: Signup,
            navigationOptions: {
                headerShown: false
            }
        },

        Home: {
        screen: Appdraw,
        navigationOptions: {
            headerShown: false
        }
    },

    Boarding: {
        screen: Appdraw,
    },
        Sig: {
            screen: Signin
            , navigationOptions: {
                headerShown: false
            }

        },
        Forgotpass: {
            screen: Forgotpass
            , navigationOptions: {
                headerShown: false
            }

        },
        Header:{screen:Header},
        Expenso: {
            screen: Expenso
        },


},
    {
        initialRouteName: 'Home'
    }

);


export default createAppContainer(AppNavigator);
