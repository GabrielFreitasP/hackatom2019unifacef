import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import SplashScreen from './screens/SplashScreen'
import SignInScreen from './screens/SignInScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import TranslatorScreen from './screens/TranslatorScreen'
import Icon from 'react-native-vector-icons/FontAwesome';

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    Register: RegisterScreen,
}, {
    initialRouteName: 'SignIn'
})

const AppStack = createMaterialBottomTabNavigator ({
    Home: { 
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={30} name={'home'} style={{ color: tintColor }} />
            )
        }
    },
    Translator: { 
        screen: TranslatorScreen,
        navigationOptions: {
            title: 'Tradutor',
            tabBarLabel: 'Tradutor',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={30} name={'home'} style={{ color: tintColor }} />
            )
        }
    },
}, {
    initialRouteName: 'Home',
    barStyle: { backgroundColor: '#08b3aa' }
})

const RootSwitch = createSwitchNavigator({
    Splash: SplashScreen,
    Auth: AuthStack,
    App: AppStack,
}, {
    initialRouteName: 'Splash'
})

export default createAppContainer(RootSwitch)