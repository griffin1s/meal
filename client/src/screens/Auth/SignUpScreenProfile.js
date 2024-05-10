import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import InputBoxForm from "../../components/Form/InputBoxForm";
import SubmitFormButton from "../../components/Form/SubmitFormButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SignUpScreen = ({ navigation }) => {
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
    navigation.navigate("SignUpScreenHealthInfo");
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
        <Text style={styles.secondText}>Особиста інформація</Text>
        <Text>{error && error}</Text>
        <InputBoxForm
          name="username"
          placeholder="Логін"
          control={control}
          rules={{
            required: "Логін є обов'язковим",
            minLength: {
              value: 3,
              message: "Логін має містити мінімум 3 символи",
            },
          }}
        />
        <InputBoxForm
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: "Email є обов'язковим",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Введіть валідний email",
            },
          }}
        />
        <InputBoxForm
          name="firstName"
          placeholder="Ім'я"
          control={control}
          rules={{
            required: "Ім'я є обов'язковим",
            minLength: {
              value: 3,
              message: "Ім'я має містити мінімум 3 символи",
            },
          }}
        />
        <InputBoxForm
          name="lastName"
          placeholder="Прізвище"
          control={control}
          rules={{
            required: "Прізвище є обов'язковим",
            minLength: {
              value: 3,
              message: "Прізвище має містити мінімум 3 символи",
            },
          }}
        />
        <InputBoxForm
          name="password"
          placeholder="Пароль"
          secureTextEntry
          control={control}
          rules={{
            required: "Пароль є обов'язковим",
            minLength: {
              value: 3,
              message: "Пароль має містити мінімум 3 символи",
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
export default SignUpScreen;

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
