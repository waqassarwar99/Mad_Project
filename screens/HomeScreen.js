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
      <View>
        <Icon name="lock" type="font-awesome" />
        <Text>Contract</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddContract")}
      >
        <Text style={{ fontSize: 25 }}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ViewContract")}
      >
        <Text style={{ fontSize: 25 }}>View</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UpdateContract")}>
        <Text style={{ fontSize: 25 }}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Chat")}>
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
