import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ModalComponent from "./ModalComponent";

const FoodListItem = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.brans}>
              {item.cal} cal, {item.brand}
            </Text>
          </View>
          <View>
            <AntDesign name="pluscircleo" size={24} color="royalblue" />
          </View>
        </View>
      </TouchableOpacity>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
      />
    </>
  );
};

export default FoodListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f8",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    gap: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
  },
  brans: {
    color: "dimgray",
  },
});
