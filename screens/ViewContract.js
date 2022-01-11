import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import db from "../firebase";
import { DataTable } from "react-native-paper";
import { Icon } from "react-native-elements";

const ViewContract = ({ navigation }) => {
  const [contract, setContract] = React.useState([]);

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

  const deleteCont = (id) => {
    db.collection("contracts")
      .doc(id)
      .delete()
      .then(() => navigation.goBack());
  };
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          <Icon
            name="eye"
            type="font-awesome"
            size={25}
            style={{ marginRight: 5 }}
          />
          View Contracts
        </Text>
      </View>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Delete</DataTable.Title>
          <DataTable.Title numeric>Update</DataTable.Title>
        </DataTable.Header>

        {contract.map((cont, id) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ContractDetail", {
                  data: {
                    name: cont.name,
                    type: cont.type,
                    amount: cont.amount,
                    date: cont.date,
                  },
                })
              }
            >
              <DataTable.Row key={id} id={id}>
                <DataTable.Cell>{cont.name}</DataTable.Cell>
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
            </TouchableOpacity>
          );
        })}
      </DataTable>
    </View>
  );
};

export default ViewContract;
