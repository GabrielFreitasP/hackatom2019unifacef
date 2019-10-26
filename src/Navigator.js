import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from './screens/SplashScreen'
import SignInScreen from './screens/SignInScreen'
import HomeScreen from './screens/HomeScreen'

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
}, {
    initialRouteName: 'SignIn'
})

const AppStack = createStackNavigator({
    Home: HomeScreen,
}, {
    initialRouteName: 'Home'
})

const RootSwitch = createSwitchNavigator({
    Splash: SplashScreen,
    Auth: AuthStack,
    App: AppStack,
}, {
    initialRouteName: 'Splash'
})

export default createAppContainer(RootSwitch)