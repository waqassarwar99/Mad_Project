import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { useLayoutEffect } from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import db from "../firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = React.useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = () => {
    db.collection("chats")
      .add({
        chatName: input,
      })
      .then(() => navigation.goBack())
      .catch((err) => console.log(err));
  };

  return (
    <View>
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
