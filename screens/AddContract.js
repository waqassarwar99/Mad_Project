import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input } from "react-native-elements";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

const AddContract = ({ navigation }) => {
  const [contractName, setContractName] = React.useState("");
  const [contractType, setType] = React.useState("");
  const [contractDate, setDate] = React.useState("");
  const [contractAmount, setAmount] = React.useState("");

  const postData = async () => {
    try {
      const docRef = await addDoc(collection(db, "contracts"), {
        amount: contractAmount,
        date: contractDate,
        name: contractName,
        type: contractType,
      }).then(() => {
        navigation.goBack();
      });
      console.log("Contract added: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Icon name="plus" size={25} />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}> Add Contract</Text>
      </View>
      <View style={{flex: 1, width: "100%"}}>
        <Text style={{ fontSize: 20 }}> Contract Name </Text>
        <Input
          placeholder="Enter Contract Name"
          value={contractName}
          onChangeText={(name) => setContractName(name)}
          onSubmitEditing={postData}
          style={{ borderWidth: 1 }}
        />
        <Text style={{ fontSize: 20 }}> Contract Type </Text>
        <Input
          placeholder="Enter Contract Type"
          value={contractType}
          onChangeText={(type) => setType(type)}
          onSubmitEditing={postData}
          style={{ borderWidth: 1 }}
        />
        <Text style={{ fontSize: 20 }}> Contract Date </Text>
        <Input
          placeholder="Enter Contract Date"
          value={contractDate}
          onChangeText={(date) => setDate(date)}
          onSubmitEditing={postData}
          style={{ borderWidth: 1 }}
        />
        <Text style={{ fontSize: 20 }}> Contract Amount </Text>
        <Input
          placeholder="Enter Contract Amount"
          value={contractAmount}
          onChangeText={(amount) => setAmount(amount)}
          onSubmitEditing={postData}
          style={{ borderWidth: 1 }}
        />
        <Button
          title="ADD"
          buttonStyle={{ marginTop: 20, borderRadius: 10, width: 50 }}
          onPress={postData}
        />
      </View>
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

export default AddContract;
