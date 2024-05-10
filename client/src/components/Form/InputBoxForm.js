import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const InputBoxForm = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      // rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[styles.container, { borderColor: error ? "red" : "grey" }]}
          >
            <TextInput
              value={value}
              onChangeText={(text) => onChange(text.trim())}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          <View style={styles.errorContainer}>
            {error && (
              <Text style={styles.error}>{error.message || "Error"}</Text>
            )}
          </View>
        </>
      )}
    />
  );
};

export default InputBoxForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: wp("80%"),
    height: hp("6%"),
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    borderColor: "#4169E1",
  },
  input: { fontSize: hp(2) },
  error: {
    color: "red",
    // alignSelf: "stretch",
    fontSize: hp(1.7),
  },
  errorContainer: {
    alignItems: "flex-end",
    width: wp("80%"),
  },
});
