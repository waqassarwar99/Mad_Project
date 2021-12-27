import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";

const UpdateContract = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="edit" size={25} />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          {" "}
          Update Contract
        </Text>
      </View>
      <Text style={{ fontSize: 20 }}> Contract Name </Text>
      <TextInput
        placeholder="Enter Contract Name"
        style={{ border: "1px solid black" }}
      />
      <Text style={{ fontSize: 20 }}> Contract Type </Text>
      <TextInput
        placeholder="Enter Contract Type"
        style={{ border: "1px solid black" }}
      />
      <Text style={{ fontSize: 20 }}> Contract Date </Text>
      <TextInput
        placeholder="Enter Contract Date"
        style={{ border: "1px solid black" }}
      />
      <Text style={{ fontSize: 20 }}> Contract Amount </Text>
      <TextInput
        placeholder="Enter Contract Amount"
        style={{ border: "1px solid black" }}
      />
      <Button title="Submit" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default UpdateContract;
