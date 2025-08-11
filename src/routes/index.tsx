import { RouteProp }  from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { screenPath } from "./screenPath";


  export type RouteStackParamsList  ={
        home:undefined,
        intro:undefined,
        paymentScreen:undefined,
        bottomTabs:undefined,
        homeEbook:undefined,
        drawerTabs: undefined,
        counter: undefined,
        CheckOut: undefined,
        Profile:undefined,
        Login:undefined,
        Signup:undefined
    }

    export type HomePageParams =RouteProp<
    RouteStackParamsList,
    "home"
    >;
      export type IntoPageParams =RouteProp<
    RouteStackParamsList,
    "intro"
    >;
      export type PaymentScreenParams =RouteProp<
    RouteStackParamsList,
    "paymentScreen"
    >;

const RouteStack = ({initialRouteName}:any) => {

    const Stack = createNativeStackNavigator<RouteStackParamsList>();
  return (
    <Stack.Navigator
    initialRouteName={initialRouteName}
    screenOptions={{
      headerShown:false,
      gestureEnabled:true,
      // headerStyle:{backgroundColor:"tomato"}
    }}
    >
      <Stack.Screen name="intro" component={screenPath?.introScreen}/>
        <Stack.Screen name="home" component={screenPath.home}/>
      <Stack.Screen name="paymentScreen" component={screenPath?.paymentScreen}/>
      <Stack.Screen name="bottomTabs" component={screenPath?.bottomTabs}/>
      <Stack.Screen name="homeEbook" component={screenPath?.homeEbook}/>
      <Stack.Screen name="drawerTabs" component={screenPath?.drawerTabs}/>
      <Stack.Screen name="Login" component={screenPath?.Login}/>
      <Stack.Screen name="Signup" component={screenPath?.Signup}/>
      <Stack.Screen name="CheckOut" component={screenPath?.CheckOut} options={{
        headerShown:true
      }}/>
    </Stack.Navigator>
 
  )
}

export default RouteStack
