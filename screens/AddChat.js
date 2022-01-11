import React from "react";
import { Text, View, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useLayoutEffect } from "react";
import db from "../firebase";
import * as ImagePicker from "expo-image-picker";

const AddChat = ({ navigation }) => {
  const [input, setInput] = React.useState("");
  const [image, setImage] = React.useState(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = () => {
    
    db.collection("Contchat")
      .add({
        chatName: input,
        image: image,
      })
      .then(() => navigation.goBack())
      .catch((err) => console.log(err));
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
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

          justifyContent: "center",
          padding: 10,
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                borderRadius: 100,
                width: 100,
                height: 100,
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            />
          )}
        </View>
        <Text style={{ fontSize: 22 }}> Enter Name: </Text>
        <Input
          placeholder="Enter a chat name"
          value={input}
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={createChat}
          style={{ fontSize: 18 }}
        />
        <View style={{justifyContent: "center", alignItems: "center"}}>

        <Button
          title=" Image "
          onPress={pickImage}
          buttonStyle={{ backgroundColor: "#778899", width: 100, borderRadius: 30 }}
        />
        </View>
      </View>

      <Button
        onPress={createChat}
        title="Add Chat"
        buttonStyle={{
          marginTop: 40,
          width: 150,
          height: 60,
          borderRadius: 20,
          backgroundColor: "#778899",
        }}
      />
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
