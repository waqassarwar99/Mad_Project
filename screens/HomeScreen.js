import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from "react-native";

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
        }}
      >
        <Icon name="lock" type="font-awesome"  />
        <Text style={{ fontSize: 35, fontWeight: "bold" , padding: 5 }}>
          Contract
        </Text>
      </View>

      <View style={{flexDirection: "row"}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddContract")}
        >
          <Icon name="plus" type="font-awesome" size={25} />
          <Text style={{ fontSize: 25 }}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ViewContract")}
        >
          <Icon name="eye" type="font-awesome" size={25} />
          <Text style={{ fontSize: 25 }}>VIEW</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("UpdateContract")}
      >
        <Text style={{ fontSize: 25 }}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={{ fontSize: 25 }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    marginBottom: 30,
    width: 105,
    alignItems: "center",
  },
});

export default HomeScreen;
