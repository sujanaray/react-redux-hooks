import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { deletePerson } from "./actions/person";

const WaitingList = () => {
  const dispatch = useDispatch();

  const deleteCurrent = (key) => dispatch(deletePerson(key));

  const persons = useSelector((state) => state.personReducer.WaitingList);

  return (
    <FlatList
      style={styles.listContainer}
      data={persons}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={(data) => (
        <ListItem
          title={data.item.name}
          bottomDivider
          rightIcon={
            <Icon
              name="delete"
              size={36}
              onPress={() => deleteCurrent(data.item.key)}
            />
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#cc8899",
    padding: 16,
  },
  listText: {
    fontSize: 33,
  },
});

export default WaitingList;
