// screen for chat home screen.
import * as React from "react";
import { onSnapshot } from "firebase/firestore";
import { useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Avatar, Icon, ListItem } from "react-native-elements";

import db from "../firebase";

const Chat = ({ navigation }) => {
  const [chats, setChats] = React.useState([]);

  // for displaying chat
  React.useEffect(() => {
    db.collection("Contchat").onSnapshot({
      next: (querySnapshot) => {
        const chat = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          chatName: doc.data().chatName,
          image: doc.data().image,
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
      headerTitleStyle: { color: "white", marginLeft: 10 },
      headerTitleAlign: "left",
      headerTintColor: "white", // If there are any icons then the color will be black
      headerLeft: () => (
        <View style={{ marginLeft: 10, flexDirection: "row" }}>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="arrow-left"
                size={24}
                type="font-awesome-5"
                color="white"
              />
            </TouchableOpacity>
          </View>
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
            <Icon name="plus" color="white" type="font-awesome-5" size={24} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const enterChat = (id, chatName, image) => {
    navigation.navigate("ChatScreen", {
      id,
      chatName,
      image
    });
  };

  const deleteChat = (id) => {
    db.collection("Contchat").doc(id).delete();
  };

  return (
    <View>
      <ScrollView style={StyleSheet.container}>
        {chats.map(({ id, chatName, image }) => (
          <ListItem
            onPress={() => enterChat(id, chatName, image)}
            key={id}
            chatName={chatName}
            enterChat={enterChat}
            buttomDivider
          >
            <Avatar
              rounded
              source={{
                uri: image,
              }}
            />

            <ListItem.Content style={{ marginTop: 15 }}>
              <ListItem.Title style={{ fontWeight: "bold", fontSize: 20 }}>
                {chatName}
              </ListItem.Title>
              <ListItem.Subtitle style={{ alignSelf: "flex-end" }}>
                <TouchableOpacity onPress={() => deleteChat(id)}>
                  <Icon name="trash" type="font-awesome" color="red" />
                </TouchableOpacity>
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
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
