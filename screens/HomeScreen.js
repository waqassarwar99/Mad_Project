import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import AddContract from "./AddContract";
import ViewContract from "./ViewContract";
import Chat from "./Chat";
import { Icon } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Icon name="handshake-o" type="font-awesome" size={35} />
        <Text
          style={{
            fontSize: 55,
            fontWeight: "bold",
            padding: 10,
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
          <Text style={{ fontSize: 25 }}>ADD</Text>
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
          <Text style={{ fontSize: 25 }}>VIEW</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },
  button: {
    backgroundColor: "#B0C4DE",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    marginTop: 100,
    marginBottom: 50,
    width: 140,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
});

export default HomeScreen;
