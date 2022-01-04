//screen for chatting between users.

import React from "react";
import { useLayoutEffect } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import * as firebase from "firebase";
import firestore from "@react-native-firebase/firestore";
import db from "../firebase";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = React.useState("");
  const [messages, setMessage] = React.useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            }}
          />
          <Text style={{ fontWeight: "bold", marginLeft: 10, color: "white" }}>
            {" "}
            {route.params.chatName}{" "}
          </Text>
        </View>
      ),
    });
  }, []);

  const sendMessage = () => {
    Keyboard.dismiss();
    db.collection("chats").doc(route.params.id).collection("messages").add({
      message: input,
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessage(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    return unsubscribe;
  }, [route]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
        {messages.map(({ id, data }) => (
          <View key={id} style={styles.receiver}>
            <Text>{data.message}</Text>
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={90}
      >
        <View style={styles.footer}>
          <TextInput
            placeholder="Chat"
            style={styles.textInput}
            value={input}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage} style={{ bottom: -240 }}>
            <Ionicons name="send" color="#2b68e6" size={24} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: -240,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: "#ECECEC",
    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
  receiver: {
    bottom: 0,
    padding: 15,
    backgroundColor: "#ECECEC",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
});
