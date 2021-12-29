import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ImageBackground,
} from "react-native";

import AddContract from "./AddContract";
import ViewContract from "./ViewContract";
import Chat from "./Chat";
import { Icon } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  const image = {
    uri: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -200,
          }}
        >
          <Icon name="handshake-o" type="font-awesome" size={35} />
          <Text
            style={{
              fontSize: 55,
              fontWeight: "bold",
              padding: 5,
              color: "black",
            }}
          >
            Contract
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AddContract")}
          >
            <Icon
              name="plus"
              type="font-awesome"
              size={25}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 25}}>ADD</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ViewContract")}
          >
            <Icon
              name="eye"
              type="font-awesome"
              size={25}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 25}}>VIEW</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("UpdateContract")}
          >
            <Icon
              name="edit"
              type="font-awesome"
              size={25}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 25 }}>UPDATE</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Chat")}
          >
            <Icon
              name="commenting-o"
              type="font-awesome"
              size={25}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 25 }}>CHAT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#F5F5DC",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    width: 130,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default HomeScreen;
