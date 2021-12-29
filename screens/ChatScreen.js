import React from "react";
import { useLayoutEffect } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
// import * as firebase from 'firebase'
import db from "../firebase";
import Chat from "./Chat";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = React.useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      //   headerTitleAlign: "left",
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
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const sendMessage = () => {
    db.collection("chats").doc(route.params.id).collection("messages").add({
      message: input,
    });
    setInput("");
  };

  return (
    <View>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/* React Fragment */}
        <>
          <ScrollView>{/* ALL the Chat goes here */}</ScrollView>

          <View>
            <TextInput
              placeholder="Signal Chat"
              // style={styles.textInput}
              value={input}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity onPress={sendMessage}>
              <Icon name="paper-plane" type="font-awesome" />
            </TouchableOpacity>
          </View>
        </>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  // footer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   width: "100%",
  //   padding: 15,
  // },
  // textInput: {
  //   bottom: 0,
  //   height: 40,
  //   flex: 1,
  //   marginRight: 15,
  //   backgroundColor: "#ECECEC",
  //   padding: 10,
  //   color: "grey",
  //   borderRadius: 30,
  // },
});
