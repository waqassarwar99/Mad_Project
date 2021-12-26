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
    <View>
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
      <Text> Contract Name </Text>
      <TextInput placeholder="Enter Contract Name" />
      <Text> Contract Type </Text>
      <TextInput placeholder="Enter Contract Type" />
      <Text> Contract Date </Text>
      <TextInput placeholder="Enter Contract Date" />
      <Text> Contract Amount </Text>
      <TextInput placeholder="Enter Contract Amount" />
      <Button title="Submit" />
    </View>
  );
};

export default UpdateContract;
