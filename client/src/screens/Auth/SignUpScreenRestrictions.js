import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import InputBoxForm from "../../components/Form/InputBoxForm";
import SubmitFormButton from "../../components/Form/SubmitFormButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CheckboxItemForm from "../../components/Form/CheckboxItemForm";

const SignUpScreenRestrictions = ({ navigation }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const diet_and_allergies = {
    Allergies: {
      Gluten:
        "An immune reaction to gluten, a protein found in wheat, barley, and rye.",
      Lactose:
        "Inability to digest lactose, the sugar found in milk and dairy products.",
      Nuts: "Allergic reaction to tree nuts or peanuts.",
      Shellfish: "Allergy to shellfish like shrimp, crab, lobster, etc.",
      Soy: "Allergic reaction to soybeans or soy products.",
      Eggs: "Allergic reaction to eggs or egg products.",
      Fish: "Allergy to various types of fish.",
      Nuts2: "Allergic reaction to tree nuts or peanuts.",
      Shellfish2: "Allergy to shellfish like shrimp, crab, lobster, etc.",
      Soy2: "Allergic reaction to soybeans or soy products.",
      Eggs2: "Allergic reaction to eggs or egg products.",
      Fish2: "Allergy to various types of fish.",
    },
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignUpPressed = async (data) => {
    const groupedData = {};
    Object.entries(data).forEach(([key, value]) => {
      // Extract group name and option name
      const [groupName, optionName] = key.split("_");

      if (!groupedData[groupName]) {
        groupedData[groupName] = {};
      }

      // Add option to its respective group
      groupedData[groupName][optionName] = value;
    });
    console.log(groupedData);
  };

  const onSignInPress = async () => {
    console.log("data");
  };

  const renderCheckboxItems = () => {
    return Object.entries(diet_and_allergies).map(([groupName, options]) => (
      <View key={groupName}>
        <Text style={{ marginBottom: 5, fontWeight: "400", fontSize: hp(2.8) }}>
          {groupName}:
        </Text>
        <ScrollView style={{ marginBottom: 20, gap: 10, height: hp(35) }}>
          <View style={{ marginBottom: 20, gap: 10 }}>
            {Object.entries(options).map(([optionName, description]) => (
              <CheckboxItemForm
                key={optionName}
                label={optionName}
                name={`${groupName}_${optionName}`}
                defaultValue={false}
                control={control}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    ));
  };

  return (
    <ImageBackground
      source={require("../../../assets/img5.jpg")}
      resizeMode="cover"
      style={styles.main}
      blurRadius={9}
    >
      <ScrollView
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          paddingRight: 20,
          paddingLeft: 20,
          paddingVertical: 20,
          gap: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.mainText}>Реєстрація</Text>
            <Text style={styles.secondText}>Харчові обмеження</Text>
          </View>

          {renderCheckboxItems()}
          <SubmitFormButton
            text={loading ? "Завантаження..." : "Наступний крок"}
            onPress={handleSubmit(onSignUpPressed)}
          />
          <SubmitFormButton
            text="Вже маєте акаунт? Увійти"
            type="TERTIARY"
            onPress={onSignInPress}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUpScreenRestrictions;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f6f6f8",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
    paddingLeft: 20,
    gap: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  mainText: {
    fontWeight: "500",
    fontSize: hp(4),
    color: "#808080",
  },
  secondText: {
    fontWeight: "400",
    fontSize: hp(2.8),
    color: "#808080",
  },
});
