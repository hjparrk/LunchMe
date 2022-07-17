import { View } from "react-native";
import AuthContent from "../components/Auth/AuthContent";

export default function LoginScreen() {
  return (
    <View>
      <AuthContent isLogin={true} />
    </View>
  );
}
