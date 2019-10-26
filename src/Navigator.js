import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from './screens/SplashScreen'
import SignInScreen from './screens/SignInScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import TranslatorScreen from './screens/TranslatorScreen'

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    Register: RegisterScreen,
}, {
    initialRouteName: 'SignIn'
})

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Translator: TranslatorScreen,
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