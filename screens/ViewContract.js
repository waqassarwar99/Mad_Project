import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  TextInput,
  FlatList,
} from "react-native";
import { useEffect } from "react";
import db from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import AddContract from "./AddContract";
import UpdateContract from "./UpdateContract";
import { DataTable } from "react-native-paper";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";

const ViewContract = ({ navigation }) => {
  const [contract, setContract] = React.useState([]);

  // useEffect(() => {
  //   const unsubscribe = async () => {
  //     const data = await getDocs(collection(db, "contracts"));
  //     setContract(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log(contract);
  //   };
  //   unsubscribe();
  // }, []);

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
        setContract(contract);
      },
      error: (err) => console.log(err),
    });
  }, []);

  // const deleteCont = async (id) => {
  //   const contDoc = doc(db, "contracts", id);
  //   await deleteDoc(contDoc).then(() => {
  //     navigation.goBack();
  //   });
  // };

  const deleteCont = (id) => {
    db.collection("contracts")
      .doc(id)
      .delete()
      .then(() => navigation.goBack());
  };

  const updateCont = (id) => {
    return db.collection("contracts").doc(id).update({
      name: "Contract 2",
    });
  };
  return (
    <View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          {" "}
          View Contracts
        </Text>
      </View>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Amount</DataTable.Title>
          <DataTable.Title numeric>Type</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
          <DataTable.Title numeric>Delete</DataTable.Title>
          <DataTable.Title numeric>Update</DataTable.Title>
        </DataTable.Header>

        {contract.map((cont, id) => {
          return (
            <DataTable.Row key={id}>
              <DataTable.Cell>{cont.name}</DataTable.Cell>
              <DataTable.Cell numeric>{cont.amount}</DataTable.Cell>
              <DataTable.Cell numeric>{cont.type}</DataTable.Cell>
              <DataTable.Cell numeric>{cont.date}</DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity onPress={() => deleteCont(cont.id)}>
                  <Icon name="trash" type="font-awesome" color="red" />
                </TouchableOpacity>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("UpdateContract", { id: cont.id })
                  }
                >
                  <Icon name="edit" type="font-awesome" color="red" />
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
};

export default ViewContract;
