import { useContext } from "react";
import { SafeAreaView } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { AuthContext } from "../store/auth-context";
import { loginUser } from "../util/auth";

function LoginScreen() {
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    try {
      const token = await loginUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      console.log("LOGIN ERROR!");
    }
  }

  return (
    <SafeAreaView>
      <AuthContent isLogin={true} onAuthenticate={loginHandler} />
    </SafeAreaView>
  );
}

export default LoginScreen;
