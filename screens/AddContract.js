import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input } from "react-native-elements";
import db from "../firebase";

const AddContract = ({ navigation }) => {
  const [contractName, setContractName] = React.useState("");
  const [contractType, setType] = React.useState("");
  const [contractDate, setDate] = React.useState("");
  const [contractAmount, setAmount] = React.useState("");

  const postData = () => {
    db.collection("contracts")
      .add({
        amount: contractAmount,
        date: contractDate,
        name: contractName,
        type: contractType,
      })
      .then(() => navigation.goBack())
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Icon name="plus" size={35} style={{ padding: 10 }} />
        <Text style={{ fontSize: 45, fontWeight: "bold", color: "black" }}>
          Add Contract
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          backgroundColor: "#D3D3D3",
          borderRadius: 30,
          width: 300,
          padding: 40,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Contract Name</Text>
        <Input
          placeholder="Enter Contract Name"
          value={contractName}
          onChangeText={(name) => setContractName(name)}
          onSubmitEditing={postData}
          style={{ borderbottomWidth: 1, fontSize: 15 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "700" }}> Contract Type </Text>
        <Input
          placeholder="Enter Contract Type"
          value={contractType}
          onChangeText={(type) => setType(type)}
          onSubmitEditing={postData}
          style={{ borderbottomWidth: 1, fontSize: 15 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "700" }}> Contract Date </Text>
        <Input
          placeholder="Enter Contract Date"
          value={contractDate}
          onChangeText={(date) => setDate(date)}
          onSubmitEditing={postData}
          style={{ borderbottomWidth: 1, fontSize: 15 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "700" }}>
          {" "}
          Contract Amount
        </Text>
        <Input
          placeholder="Enter Contract Amount"
          value={contractAmount}
          onChangeText={(amount) => setAmount(amount)}
          onSubmitEditing={postData}
          style={{ borderbottomWidth: 1, fontSize: 15 }}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button
          title="ADD"
          buttonStyle={{
            marginTop: 20,
            borderRadius: 10,
            width: 90,
            height: 50,
            marginTop: 30,
          }}
          onPress={postData}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    
  },
});

export default AddContract;
