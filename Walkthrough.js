import React, {Component} from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AppNavigator from "./Navigation/Navigation";
import Home from "./Screen/Home";
export class Expenso extends Component {

    render() {
        return (
            <Onboarding onDone={()=>this.props.navigation.navigate('Signup')}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image style={{width: 200, height: 200}} source={require('./Screen/money.png')} />,
                        title: 'A better Way to track Your expenses',
                        subtitle: 'Split and Share your expenses',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={{width: 200, height: 200}} source={require('./Screen/money.png')} />,
                        title: 'Lets get started',
                        subtitle: '',
                    },
                ]}
            />


        );
    }
}











