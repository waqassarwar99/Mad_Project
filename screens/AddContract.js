import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  TextInput,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Input } from "react-native-elements";
import db from "../firebase";

const AddContract = ({ navigation }) => {
  const image = {
    uri: "https://images.unsplash.com/photo-1533053055599-1b4e73e7be89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  };

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
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Icon name="plus" size={35} />
          <Text style={{ fontSize: 45, fontWeight: "bold", color: "black" }}>
            {" "}
            Add Contract
          </Text>
        </View>
        <View>
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {" "}
            Contract Amount{" "}
          </Text>
          <Input
            placeholder="Enter Contract Amount"
            value={contractAmount}
            onChangeText={(amount) => setAmount(amount)}
            onSubmitEditing={postData}
            style={{ borderWidth: 2, fontWeight: "bold", color: "white" }}
          />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              title="ADD"
              buttonStyle={{ marginTop: 20, borderRadius: 10, width: 90 }}
              onPress={postData}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.7,
  },
});

export default AddContract;
