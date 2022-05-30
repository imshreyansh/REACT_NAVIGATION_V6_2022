import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ParentDashboard from '../dashboard/ParentDashboard';

const ParentStack = props => {
  const ParentStackNavigator = createNativeStackNavigator();

  return (
    <ParentStackNavigator.Navigator>
      <ParentStackNavigator.Screen
        name="ParentDashboard"
        component={ParentDashboard}
        options={{headerShown: false}}
      />
    </ParentStackNavigator.Navigator>
  );
};

export default ParentStack;
