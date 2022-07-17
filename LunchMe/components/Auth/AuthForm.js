import { useState } from "react";
import { View, StyleSheet } from "react-native";

import Input from "./Input";
import Button from "../ui/Button";

export default function AuthForm({ isLogin, onSubmit }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View>
      <View>
        <Input
          label="Email Address"
          value={enteredEmail}
          keyboardType="email-address"
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            value={enteredConfirmEmail}
            keyboardType="email-address"
            onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
          />
        )}
        <Input
          label="Password"
          value={enteredPassword}
          keyboardType="default"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            value={enteredConfirmPassword}
            keyboardType="default"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "confirmPassword"
            )}
          />
        )}
      </View>
      <View style={styles.buttons}>
        <Button onPress={submitHandler}>
          {isLogin ? "Login up" : "Sign up"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
    backgroundColor: "black",
  },
});
