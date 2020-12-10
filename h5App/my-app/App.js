import React from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  NavigationContainer,
  DrawerActions,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import LandingScreen from './screens/Landing';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import PasswordForgetScreen from './screens/PasswordForget';
import HomeScreen from './screens/Home';
import CalenderScreen from './screens/Calender';
import InfoScreen from './screens/Info';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  menuButton: {
      width: 65,
      height: 44,
  },
  signOutButton: {
    width: 100,
    height: 44,
  }
  });

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Calender" component={CalenderScreen} />
      <Drawer.Screen name="Info" component={InfoScreen} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null,                
            }}/>
    </Drawer.Navigator>
  );
};

const RootStack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  AsyncStorage.getItem('login')
    .then( function (value) {
      setIsAuthenticated(JSON.parse(value));
    })
  const handleSignIn = () => {
    // TODO implement real sign in mechanism
    AsyncStorage.setItem('login', JSON.stringify(true))
    
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism
    AsyncStorage.setItem('login', JSON.stringify(false))
    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
    // TODO implement real sign up mechanism
    AsyncStorage.setItem('login', JSON.stringify(true))
    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isAuthenticated ? (
          <RootStack.Screen
          name="Home"
          component={HomeDrawer}
          options={({ route, navigation }) => ({
            headerTitle: getFocusedRouteNameFromRoute(route),
            headerLeft: () => (
              <View style={styles.menuButton}>
                <Button
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
                title="Menu"
              />
              </View>
              
            ),
            headerRight: () => (
              <View style={styles.signOutButton}>
                <Button onPress={handleSignOut} title="Sign Out" />
              </View>
            ),
          })}
        />
        ) : (
          <>
            
            <RootStack.Screen name="Sign In">
              {(props) => (
                <SignInScreen {...props} onSignIn={handleSignIn} />
              )}
            </RootStack.Screen>
            <RootStack.Screen name="Sign Up">
              {(props) => (
                <SignUpScreen {...props} onSignUp={handleSignUp} />
              )}
            </RootStack.Screen>
            <RootStack.Screen
              name="Password Forget"
              component={PasswordForgetScreen}
            />
            <RootStack.Screen
              name="Calender"
              component={CalenderScreen}
            />
            <RootStack.Screen
              name="Info"
              component={InfoScreen}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;