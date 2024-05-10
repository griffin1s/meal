import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import InputBoxForm from "../../components/Form/InputBoxForm";
import SubmitFormButton from "../../components/Form/SubmitFormButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SignUpScreenHealthInfo = ({ navigation }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignUpPressed = async (data) => {
    if (loading) {
      return;
    }
    setError("");
    setLoading(false);
    console.log(data);
    // if (data) {
    navigation.navigate("SignUpScreenRestrictions");
    // }
  };

  const onSignInPress = async () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../../../assets/img5.jpg")}
      resizeMode="cover"
      style={styles.main}
      blurRadius={10}
    >
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 20,
          paddingLeft: 20,
          paddingVertical: 20,
          gap: 10,
          borderRadius: 10,
        }}
      >
        <Text style={styles.mainText}>Реєстрація</Text>
        <Text style={styles.secondText}>Фізичні показники</Text>
        <Text>{error && error}</Text>
        <InputBoxForm
          name="age"
          placeholder="Вік"
          control={control}
          rules={{
            required: "Вік є обов'язковим",
            min: {
              value: 18,
              message:
                "У системі можуть реєструватись користувачі віком від 18 до 99 років",
            },
            max: {
              value: 99,
              message:
                "У системі можуть реєструватись користувачі віком від 18 до 99 років",
            },
          }}
        />
        <InputBoxForm
          name="weight"
          placeholder="Вага"
          control={control}
          rules={{
            required: "Вага є обов'язковим полем",
            pattern: {
              min: {
                value: 10,
                message: "Вага є недопустимою",
              },
              max: {
                value: 999,
                message: "Вага є недопустимою",
              },
            },
          }}
        />
        <InputBoxForm
          name="height"
          placeholder="Зріст"
          control={control}
          rules={{
            required: "Зріст є обов'язковим полем",
            pattern: {
              min: {
                value: 10,
                message: "Зріст є недопустимим",
              },
              max: {
                value: 300,
                message: "Зріст є недопустимим",
              },
            },
          }}
        />
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
    </ImageBackground>
  );
};
export default SignUpScreenHealthInfo;

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
