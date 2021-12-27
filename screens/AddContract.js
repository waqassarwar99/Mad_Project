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
import { Button } from "react-native-elements";
import { collection, addDoc } from "firebase/firestore"; 
import db from "../firebase";


// const FIREBASE_API_ENDPOINT =
//   "https://madproject-98dac-default-rtdb.firebaseio.com/";

const AddContract = () => {
  const [contractName, setContractName] = React.useState("");
  const [contractType, setType] = React.useState("");
  const [contractDate, setDate] = React.useState("");
  const [contractAmount, setAmount] = React.useState("");

  const postData = async () => {
    try {
      const docRef = await addDoc(collection(db, "contracts"), {
        name: contractName,
        type: contractType,
        date: contractDate,
        amount: contractAmount
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  //   const postData = () => {
  //     var requestOptions = {
  //       method: "POST",
  //       body: JSON.stringify({
  //         contractName: name,
  //         contractType: type,
  //         contractDate: date,
  //         contractAmount: amount,
  //       }),
  //     };
  //     fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`, requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => console.log(result))
  //       .catch((error) => console.log("error", error));
  //   };
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
      <Text style={{ fontSize: 20 }}> Contract Name </Text>
      <TextInput
        placeholder="Enter Contract Name"
        onChangeText={(a) => setContractName(contractName)}
        style={{ border: "1px solid black" }}
      />
      <Text style={{ fontSize: 20 }}> Contract Type </Text>
      <TextInput
        placeholder="Enter Contract Type"
        onChangeText={(a) => setType(contractType)}
        style={{ border: "1px solid black" }}
      />
      <Text style={{ fontSize: 20 }}> Contract Date </Text>
      <TextInput
        placeholder="Enter Contract Date"
        onChangeText={(a) => setDate(contractDate)}
        style={{ border: "1px solid black" }}
      />
      <Text style={{ fontSize: 20 }}> Contract Amount </Text>
      <TextInput
        placeholder="Enter Contract Amount"
        onChangeText={(a) => setAmount(contractAmount)}
        style={{ border: "1px solid black" }}
      />
      <Button title="ADD" buttonStyle={{marginTop: 20, borderRadius: 10, width: 50}} onPress={() => postData}/>
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
