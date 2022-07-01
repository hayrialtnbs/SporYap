import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from "../Modules/GetStarted/Screens/GetStarted";

const Stack = createNativeStackNavigator();
export default function MainNavigation({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitle: false
            }}>
            <Stack.Screen name='GetStarted' component={GetStarted} />
            {/*           
            <Stack.Screen name='Destek' component={Destek}
                options={{
                    headerTitle: true,
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#063221',
                        alignItems: 'center',
                    },
                    headerTitleStyle: {
                        color: "white"
                    },
                    headerTitleAlign: "center"

                }}
            /> */}
        </Stack.Navigator>
    )
}