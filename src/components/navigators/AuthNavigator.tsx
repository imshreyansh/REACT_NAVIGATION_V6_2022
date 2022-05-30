import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../auhorization/Login';

const AuthNavigator = props => {
  const AuthStackNavigator = createNativeStackNavigator();

  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigator;
