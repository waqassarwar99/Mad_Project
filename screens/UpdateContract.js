import * as React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import db from "../firebase";

const UpdateContract = ({ navigation, route }) => {
  const [name, setName] = React.useState("");
  const [contType, setType] = React.useState("");
  const [date, setDate] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [contId, setContId] = React.useState(route.params.id);
  const [contract, setContract] = React.useState([]);

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
  React.useEffect(() => {
    db.collection("contracts").onSnapshot({
      next: (querySnapshot) => {
        const contract = querySnapshot.docs.map((docSnapshot) => ({
          id: docSnapshot.id,
          name: docSnapshot.data().name,
          date: docSnapshot.data().date,
          type: docSnapshot.data().type,
          amount: docSnapshot.data().amount,
        }));
        var contractData = contract.filter((item) => item.id == contId);
        setContract(contractData[0]);
        setName(contractData[0].name);
        setType(contractData[0].type);
        setDate(contractData[0].date);
        setAmount(contractData[0].amount);
      },
      error: (err) => console.log(err),
    });
  }, []);

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
        <Icon name="edit" size={25} />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          {" "}
          Update Contract
        </Text>
      </View>
      <View style={styles.detail}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}> Contract Name </Text>
        <TextInput
          placeholder="Enter Contract Name"
          style={{ borderBottomWidth: 1, padding: 5 }}
          value={name}
          onChangeText={(name) => setName(name)}
        />
        <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20 }}>
          {" "}
          Contract Type{" "}
        </Text>
        <TextInput
          placeholder="Enter Contract Type"
          style={{ borderBottomWidth: 1, padding: 5 }}
          value={contType}
          onChangeText={(type) => setType(type)}
        />
        <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20 }}>
          {" "}
          Contract Date{" "}
        </Text>
        <TextInput
          placeholder="Enter Contract Date"
          style={{ borderBottomWidth: 1, padding: 5 }}
          value={date}
          onChangeText={(date) => setDate(date)}
        />
        <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 20 }}>
          {" "}
          Contract Amount{" "}
        </Text>
        <TextInput
          placeholder="Enter Contract Amount"
          style={{ borderBottomWidth: 1, padding: 5 }}
          value={amount}
          onChangeText={(amount) => setAmount(amount)}
        />
      </View>
      <Button
        title="Update"
        onPress={updateCont}
        buttonStyle={{
          borderRadius: 20,
          width: 130,
          padding: 15,
          marginTop: 30,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  detail: {
    margin: 40,
    marginBottom: 20,
    justifyContent: "space-between",
    backgroundColor: "#D3D3D3",
    padding: 50,
    borderRadius: 30,
  },
});

export default UpdateContract;
