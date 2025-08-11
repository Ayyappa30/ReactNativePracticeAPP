import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import navigationSerivices from './src/routes/navigationSerivices';
import RouteStack from './src/routes';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BottomTabs from './src/routes/bottomTabs';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { useNotification } from './src/notification/useNotification';

const AppRoutes = () => {
  const routeNameRef = useRef<string | undefined>(undefined);

  const insets = useSafeAreaInsets();
  return (
    <View style={{paddingBottom: insets.bottom || 10, flex: 1}}>
      <NavigationContainer
        ref={navigationSerivices.navigationRef}
        onReady={() => {
          routeNameRef.current =
            navigationSerivices?.navigationRef?.getCurrentRoute()?.name;
        }}>
        <RouteStack initiinitialRouteName="intro" />
      </NavigationContainer>
    </View>
  );
};

const App = () => {
  useNotification()
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  
  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <AppRoutes />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
