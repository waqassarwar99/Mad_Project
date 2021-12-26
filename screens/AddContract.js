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
// import * as firebase from 'firebase';
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyA7qLvHbQ5Nk0-967Wzc-glrM0OQDp_vME",
//   authDomain: "madproject-98dac.firebaseapp.com",
//   projectId: "madproject-98dac",
//   storageBucket: "madproject-98dac.appspot.com",
//   messagingSenderId: "823943753173",
//   appId: "1:823943753173:web:30d6a320d798d4a673615c",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const FIREBASE_API_ENDPOINT =
//   "https://madproject-98dac-default-rtdb.firebaseio.com/";

const AddContract = () => {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [date, setDate] = React.useState("");
  const [amount, setAmount] = React.useState("");

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
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="plus" size={25} />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}> Add Contract</Text>
      </View>
      <Text> Contract Name </Text>
      <TextInput
        placeholder="Enter Contract Name"
        onChangeText={(a) => setName(name)}
      />
      <Text> Contract Type </Text>
      <TextInput
        placeholder="Enter Contract Type"
        onChangeText={(a) => setType(type)}
      />
      <Text> Contract Date </Text>
      <TextInput
        placeholder="Enter Contract Date"
        onChangeText={(a) => setDate(date)}
      />
      <Text> Contract Amount </Text>
      <TextInput
        placeholder="Enter Contract Amount"
        onChangeText={(a) => setAmount(amount)}
      />
      <Button title="Add" />
    </View>
  );
};

export default AddContract;
