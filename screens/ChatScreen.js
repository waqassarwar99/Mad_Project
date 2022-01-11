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
  TouchableOpacity,
  Keyboard,
  Platform,
} from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";
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
              uri: route.params.image,
            }}
          />
          <Text style={{ fontWeight: "bold", marginLeft: 10, color: "white" }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
    });
  }, []);

  const sendMessage = () => {
    Keyboard.dismiss();
    db.collection("Contchat").doc(route.params.id).collection("chatting").add({
      message: input,
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useLayoutEffect(() => {
    const gettingMessages = db
      .collection("Contchat")
      .doc(route.params.id)
      .collection("chatting")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessage(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    return gettingMessages;
  }, [route]);

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={-210}
      >
        <>
          <ScrollView>
            {messages.map(({ id, data }) => (
              <View key={id} style={styles.receiver}>
                <Text>{data.message}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.footer}>
            <TextInput
              placeholder="Chat"
              style={styles.textInput}
              value={input}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity onPress={sendMessage}>
              <Ionicons name="send" color="#2b68e6" size={24} />
            </TouchableOpacity>
          </View>
        </>
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
    bottom: 0,
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
