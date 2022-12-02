import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Result from '../screens/Result'
import DashBoard from '../screens/DashBoard'


const Stack = createNativeStackNavigator()

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DashBoard'>
                <Stack.Screen
                    name={'Result'}
                    component={Result}
                    options={{}}
                />
                <Stack.Screen
                    name={'DashBoard'}
                    component={DashBoard}
                    options={{}}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation

const styles = StyleSheet.create({})