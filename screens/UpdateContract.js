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
import db from "../firebase";

const UpdateContract = ({ navigation, route }) => {
  const [name, setName] = React.useState("");
  const [contType, setType] = React.useState("");
  const [date, setDate] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [contId, setContId] = React.useState(route.params.id);

  const updateCont = () => {
    return db
      .collection("contracts")
      .doc(contId)
      .update({
        name: name,
        amount: amount,
        date: date,
        type: contType,
      })
      .then(() => navigation.navigate("ViewContract"));
  };

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
        style={{ borderWidth: 1 }}
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <Text style={{ fontSize: 20 }}> Contract Type </Text>
      <TextInput
        placeholder="Enter Contract Type"
        style={{ borderWidth: 1 }}
        value={contType}
        onChangeText={(type) => setType(type)}
      />
      <Text style={{ fontSize: 20 }}> Contract Date </Text>
      <TextInput
        placeholder="Enter Contract Date"
        style={{ borderWidth: 1 }}
        value={date}
        onChangeText={(date) => setDate(date)}
      />
      <Text style={{ fontSize: 20 }}> Contract Amount </Text>
      <TextInput
        placeholder="Enter Contract Amount"
        style={{ borderWidth: 1 }}
        value={amount}
        onChangeText={(amount) => setAmount(amount)}
      />
      <Button title="Submit" onPress={updateCont} />
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
