// screen for chat home screen.
import * as React from "react";
import { onSnapshot } from "firebase/firestore";
import { useLayoutEffect, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import ListItems from "../components/ListItems";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import AddChat from "./AddChat";
import ChatScreen from "./ChatScreen";
import db from "../firebase";

const Chat = ({ navigation }) => {
  const [chats, setChats] = React.useState([]);

  // for displaying chat
  React.useEffect(() => {
    db.collection("chats").onSnapshot({
      next: (querySnapshot) => {
        const chat = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          chatName: doc.data().chatName,
        }));
        setChats(chat);
      },
      error: (err) => console.log(err),
    });
  }, []);

  // useLayoutEffect is used to customize the header
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Waqas Sarwar",
      headerStyle: { backgroundColor: "#778899" },
      headerTitleStyle: { color: "black" },
      headerTitleAlign: "left",
      headerTintColor: "black", // If there are any icons then the color will be black
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              uri: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 ",
            }}
          />
        </View>
      ),

      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: -30,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const enterChat = (id, chatName) => {
    navigation.navigate("ChatScreen", {
      id,
      chatName,
    });
  };

  

  return (
    <View>
      <ScrollView style={StyleSheet.container}>
        {chats.map(({ id, chatName }) => (
          <ListItems
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
