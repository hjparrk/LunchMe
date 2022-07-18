import { useContext } from "react";
import { View } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import { AuthContext } from "../store/auth-context";
import { createUser } from "../util/auth";

export default function SignupScreen({ navigation }) {
  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    try {
      const token = await createUser(email, password);
      navigation.replace("Login");
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create a user. Please check your inputs or try later!"
      );
    }
  }

  return (
    <View>
      <AuthContent isLogin={false} onAuthenticate={signupHandler} />
    </View>
  );
}
