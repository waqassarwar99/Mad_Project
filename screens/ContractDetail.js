import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { Icon } from "react-native-elements";
const ContractDetail = ({ navigation, route }) => {
  const [data, setData] = React.useState(route.params.data);
  return (
    <View style={styles.container}>
      <View style={{justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 30}}>
        <Icon
          name="info"
          type="font-awesome"
          size={30}
          style={{ marginRight: 5, padding: 5 }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 35 }}>Details</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 90,
        }}
      >
        <Card style={styles.card}>
          <Card.Title
            title={data.name}
            titleStyle={{
              marginLeft: 40,
              fontWeight: "bold",
              fontSize: 25,
              marginBottom: 20,
            }}
          />
          <Card.Content>
            <Paragraph style={{ marginBottom: 20 }}>
              <Text style={styles.text}>Contract Type: {data.type} </Text>
            </Paragraph>
            <Paragraph style={{ marginBottom: 20 }}>
              <Text style={styles.text}>Contract Date: {data.date} </Text>
            </Paragraph>
            <Paragraph style={{}}>
              <Text style={styles.text}>Contract Amount: {data.amount} </Text>
            </Paragraph>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: 140,
                padding: 10,
                borderRadius: 20,
                marginTop: 40,
                marginLeft: 40,
                height: 60,
                backgroundColor: "#778899",
              }}
              onPress={() => navigation.navigate("Chat")}
            >
              <Icon
                name="commenting-o"
                type="font-awesome"
                size={25}
                style={{ marginRight: 5, padding: 5 }}
              />
              <Text
                style={{
                  fontSize: 25,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                CHAT
              </Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default ContractDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 20,
    width: 280,
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
  },
  text: {
    fontWeight: "bold",
  },
});
