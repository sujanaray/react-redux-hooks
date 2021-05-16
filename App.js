import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PersonForm from "./src/PersonForm";
import WaitingList from "./src/WaitingList";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default (AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="PersonForm"
        component={PersonForm}
        options={{
          title: "Restaurant Reservation",
          headerTintColor: "#de5d83",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="WaitingList"
        component={WaitingList}
        options={{
          headerTintColor: "#de5d83",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
));
