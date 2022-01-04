import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useLayoutEffect } from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import db from "../firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = React.useState("");
  // const [pic, setPic] = React.useState("");
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
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Icon name="plus" size={25} style={{ padding: 10 }} />
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "black" }}>
          Add Chat
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#D3D3D3",
          borderRadius: 20,
          width: 250,
          marginTop: 60,
          height:150,
          justifyContent: "center",
          padding: 10
        }}
      >
        <Text style={{ fontSize: 22 }}> Enter Name: </Text>
        <Input
          placeholder="Enter a chat name"
          value={input}
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={createChat}
          style={{ fontSize: 18 }}
        />
      </View>
      <Button onPress={createChat} title="Create Chat" buttonStyle={{marginTop: 40, width: 180, height: 60, borderRadius: 20}}/>
      {/* <Input
        placeholder="Enter a Picture Url"
        value={pic}
        onChangeText={setPic}
        onSubmitEditing={createChat}
      /> */}
    </View>
  );
};

export default AddChat;
