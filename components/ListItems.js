// component that is used for chat home screen

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { Icon } from "react-native-elements";
import { firebase } from "@firebase/app";
import db from "../firebase";

const ListItems = ({ id, chatName, enterChat }) => {
  // const deleteChat = (id) => {
  //   var docRef = db.collection("chats").doc(id).collection("messages");
  //   // docRef.delete();
  // };

   const deleteChat = (id) => {
     db.collection("chats")
       .doc(id)
       .delete()
   };

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} buttomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        }}
      />

      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle style={{ alignSelf: "flex-end" }}>
          <TouchableOpacity onPress={() => deleteChat(id)}>
            <Icon name="trash" type="font-awesome" color="red" />
          </TouchableOpacity>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ListItems;
