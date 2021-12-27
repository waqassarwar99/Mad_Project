import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { useLayoutEffect } from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { collection, addDoc } from "firebase/firestore"; 
import { getDatabase, ref, onValue, set } from "firebase/database";
// import * as firebase from 'firebase';
import db from "../firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = React.useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    try {
      const docRef = await addDoc(collection(db, "chats"), {
       chatName: input
      }).then(() => {
          navigation.goBack();
      })
      console.log("Chat added with id: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        // leftIcon={<Icon name="comments" size={24} type="font-awesome" />}
      />
      <Button onPress={createChat} title="Create new Chat" />
    </View>
  );
};

export default AddChat;

