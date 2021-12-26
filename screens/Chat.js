import * as React from "react";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import ListItems from "../components/ListItems";

const Chat = ({ navigation }) => {
  // useLayoutEffect is used to customize the header
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Waqas Sarwar",
      headerStyle: { backgroundColor: "#8A2BE2" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black", // If there are any icons then the color will be black
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              uri: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            }}
          />
        </View>
      ),
    });
  }, []);

  return (
    <View>
      <ScrollView>
        <ListItems />
      </ScrollView>
    </View>
  );
};

export default Chat;
