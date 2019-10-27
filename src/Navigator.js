import React from 'react'
import { View } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import SplashScreen from './screens/SplashScreen'
import SignInScreen from './screens/SignInScreen'
import LevelsScreen from './screens/LevelsScreen'
import QuestionsScreen from './screens/QuestionsScreen'
import RegisterScreen from './screens/RegisterScreen'
import TranslatorScreen from './screens/TranslatorScreen'
import ProfileScreen from './screens/ProfileScreen'
import RankingScreen from './screens/RankingScreen'

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    Register: RegisterScreen,
}, {
    initialRouteName: 'SignIn'
})

const TabsStack = createMaterialBottomTabNavigator({
    Learn: {
        screen: LevelsScreen,
        navigationOptions: {
            title: 'Learn',
            tabBarLabel: 'Aprenda',
            tabBarColor: '#f43973',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon style={[{color: tintColor}]} size={22} name={'gamepad'}/>  
            )
        }
    },
    Translator: {
        screen: TranslatorScreen,
        navigationOptions: {
            title: 'Translator',
            tabBarLabel: 'Tradutor',
            tabBarColor: '#08b3aa',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon style={[{color: tintColor}]} size={22} name={'sign-language'}/>  
            )
        }
    },
    Ranking: {
        screen: RankingScreen,
        navigationOptions: {
            title: 'Ranking',
            tabBarLabel: 'Ranking',
            tabBarColor: '#e55b20',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon style={[{color: tintColor}]} size={22} name={'star'}/>  
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Perfil',
            tabBarLabel: 'Perfil',
            tabBarColor: '#822fa8',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon style={[{color: tintColor}]} size={22} name={'user'}/>  
            )
        }
    },
}, {
    initialRouteName: 'Learn'    
})

const AppStack = createSwitchNavigator({
    Tabs: TabsStack,
    Questions: QuestionsScreen,
}, {
    initialRouteName: 'Tabs'
})

const RootSwitch = createSwitchNavigator({
    Splash: SplashScreen,
    Auth: AuthStack,
    App: AppStack,
}, {
    initialRouteName: 'Splash'
})

export default createAppContainer(RootSwitch)