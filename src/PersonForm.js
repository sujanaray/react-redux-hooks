import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { addPerson } from "./actions/person";

const PersonForm = ({ navigation }) => {
  const [person, setPerson] = useState("");

  const dispatch = useDispatch();

  const submitPerson = (person) => dispatch(addPerson(person));

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo.jpg")} />
      <Text style={styles.title}>Enter Your Name</Text>
      <TextInput
        value={person}
        placeholder="name"
        style={styles.personInput}
        onChangeText={(person) => setPerson(person)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitPerson(person);
          setPerson("");
        }}
      >
        <Text style={{ fontSize: 22, color: "black" }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => navigation.navigate("WaitingList")}
      >
        <Text style={{ fontSize: 22, color: "black" }}>Check Waiting List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fadadd",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 38,
    marginBottom: 30,
    marginTop: 16,
    color: "#c21e56",
  },
  personInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#cc8899",
  },
  image: {
    width: 120,
    height: 120,
    borderColor: "#c21e56",
    borderWidth: 4,
    borderRadius: 100,
  },
});

export default PersonForm;
