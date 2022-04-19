import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Marketplace from '../screens/Marketplace';
import Details from '../screens/Details';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Marketplace' component={Marketplace} options={{headerShown:false}} />
                <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
