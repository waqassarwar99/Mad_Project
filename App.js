import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AddContract from "./screens/AddContract";
import ViewContract from "./screens/ViewContract";
import UpdateContract from "./screens/UpdateContract";
import Chat from "./screens/Chat";
import AddChat from "./screens/AddChat";
import ChatScreen from "./screens/ChatScreen";
import ContractDetail from "./screens/ContractDetail";
const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#778899" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
  headerTitleAlign: "center",
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Home"
          options={{ title: "Home" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="AddContract"
          options={{ title: "ADD CONTRACT" }}
          component={AddContract}
        />
        <Stack.Screen
          name="ViewContract"
          component={ViewContract}
          options={{ title: "View" }}
        />
        <Stack.Screen
          name="UpdateContract"
          component={UpdateContract}
          options={{ title: "Update" }}
        />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="AddChat" component={AddChat} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen
          name="ContractDetail"
          component={ContractDetail}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
