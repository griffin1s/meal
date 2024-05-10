import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";

const CheckboxItemForm = ({ name, label, defaultValue, control }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Controller
      control={control}
      render={({ field: { value, onChange } }) => (
        <View style={styles.checkboxContainer}>
          <Pressable
            style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}
            onPress={() => {
              setIsChecked(!isChecked);
              onChange(!isChecked);
            }}
          >
            {isChecked && <Ionicons name="checkmark" size={24} color="white" />}
          </Pressable>
          <Text style={styles.checkboxLabel}>{label}</Text>
        </View>
      )}
      name={name}
      defaultValue={false}
    />
    //   )}
    // />
  );
};

export default CheckboxItemForm;

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "coral",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "coral",
  },
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 18,
  },
});
