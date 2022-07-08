import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginInput from "./components/Login/LoginInput";

export default function App() {
  function loginHandler(enteredEmail, enteredPassword) {
    console.log("Entered email: " + enteredEmail);
    console.log("Entered Password " + enteredPassword);
    console.log("");
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Lunch Me</Text>
      </View>
      <View style={styles.loginContainer}>
        <LoginInput onLogin={loginHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 0,
  },
  loginContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 35,
    textAlign: "center",
    borderColor: "grey",
    margin: 16,
    padding: 16,
    borderWidth: 3,
    borderRadius: 16,
    width: "50%",
  },
});
