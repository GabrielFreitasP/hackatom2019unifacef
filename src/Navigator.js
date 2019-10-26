import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from './screens/SplashScreen'
import SignInScreen from './screens/SignInScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen';
import HomeInScreen from './screens/HomeInScreen';

const AuthStack = createStackNavigator({
    HomeIn: HomeInScreen,
    SignIn: SignInScreen,
    Register: RegisterScreen,
}, {
    initialRouteName: 'HomeIn'
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