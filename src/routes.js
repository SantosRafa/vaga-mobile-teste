import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './pages/SearchScreen';
const StackRoutes = createStackNavigator();

export default function Routes(){
    return(
        <StackRoutes.Navigator>
            <StackRoutes.Screen
            name="Seach"
            component={SearchScreen}
            options={{headerShown:false}}/>
        </StackRoutes.Navigator>
    );
}