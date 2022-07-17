import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AuthForm from "./AuthForm";
import FlatButton from "../ui/FlatButton";

export default function AuthContent({ isLogin }) {
  const navigation = useNavigation();

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    console.log(email);
    console.log(confirmEmail);
    console.log(password);
    console.log(confirmPassword);
  }

  return (
    <View>
      <AuthForm isLogin={isLogin} onSubmit={submitHandler} />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Back to log in"}
        </FlatButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
