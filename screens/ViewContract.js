import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  TextInput,
} from "react-native";
import { useEffect } from "react";
import db from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import AddContract from "./AddContract";

const ViewContract = () => {
  const [contract, setContract] = React.useState([]);
  // const getData = () => {
  //   getDocs(collection(db, "contracts"))
  //     .then((snapshot) => {
  //       let cont = [];
  //       setContract([...cont])
  //       snapshot.docs.forEach((doc) => {
  //         cont.push({...doc.data(), id: doc.id });
  //       });
  //       setContract(cont)
  //       console.log(cont);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, "contracts"), (snapshot) => {
  //     setContract(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //   });
  //   return unsubscribe;
  // }, []);

  useEffect(() => {
    const unsubscribe = async () => {
      const data = await getDocs(collection(db, "contracts"));
      setContract(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    unsubscribe();
  }, []);

  const delCont = () => {
    doc(db, "contracts");
  };
  return (
    <View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          {" "}
          View Contracts
        </Text>
      </View>
      <Text></Text>
     
      <Text>
        {" "}
        {contract.map((cont) => {
          return(
            <View>
              <Text> Name: {cont.name} </Text>
              <Text> Amount: {cont.amount} </Text>
              <Text> type: {cont.type} </Text>
              <Text> date: {cont.date} </Text>
            </View>
            )
          }
        )}{" "}
      </Text>
      <TextInput></TextInput>
    </View>
  );
};

export default ViewContract;
