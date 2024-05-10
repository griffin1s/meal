import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import InputBoxForm from "../../components/Form/InputBoxForm";
import SubmitFormButton from "../../components/Form/SubmitFormButton";
import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LoginScreen = ({ navigation }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }
    setError("");
    setLoading(false);
    console.log(data);
    // if (data) {
    navigation.navigate("Tabs");
    // }
  };

  const onSignUpPress = async () => {
    navigation.navigate("SignUpScreenProfile");
  };

  return (
    <ImageBackground
      source={require("../../../assets/img5.jpg")}
      resizeMode="cover"
      style={styles.container}
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
        <View>
          <Text style={styles.mainText}>Авторизація</Text>
        </View>
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
          text={loading ? "Завантаження..." : "Увійти"}
          onPress={handleSubmit(onSignInPressed)}
        />
        <View style={styles.buttonContainer}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignItems: "flex-start",
            }}
          >
            <SubmitFormButton
              text={loading ? "Завантаження..." : "Google"}
              type="SECONDARY"
              width={wp("39%")}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <SubmitFormButton
              text={loading ? "Завантаження..." : "FaceBook"}
              type="THIRD"
              width={wp("39%")}
            />
          </View>
        </View>
        <SubmitFormButton
          text="Створити акаунт"
          type="TERTIARY"
          onPress={onSignUpPress}
        />
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: wp("80%"),
  },
  mainText: {
    fontWeight: "500",
    fontSize: hp(4),
    color: "#000000",
  },
});
