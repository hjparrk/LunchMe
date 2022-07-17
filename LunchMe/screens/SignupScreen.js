import { View } from "react-native";
import AuthContent from "../components/Auth/AuthContent";

export default function SignupScreen() {
  return (
    <View>
      <AuthContent isLogin={false} />
    </View>
  );
}
