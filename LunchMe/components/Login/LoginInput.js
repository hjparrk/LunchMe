import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function LoginInput(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function loginEmailInputHandler(enteredText) {
    setEnteredEmail(enteredText);
  }

  function loginPasswordInputHandler(enteredText) {
    setEnteredPassword(enteredText);
  }

  function loginHandler() {
    props.onLogin(enteredEmail, enteredPassword);
    setEnteredEmail("");
    setEnteredPassword("");
  }

  return (
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Username"
        onChangeText={loginEmailInputHandler}
        value={enteredEmail}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Password"
        onChangeText={loginPasswordInputHandler}
        value={enteredPassword}
      />
      <View style={styles.button}>
        <Button title="Log in" color="black" onPress={loginHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "grey",
    backgroundColor: "white",
    color: "black",
    width: "50%",
    padding: 16,
    margin: 16,
  },
  button: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "grey",
    width: "30%",
    margin: 16,
  },
});
