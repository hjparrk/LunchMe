import { View, Text, TextInput, StyleSheet } from "react-native";

function Input({ label, keyboardType, secure, value, onUpdateValue }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        value={value}
        onChangeText={onUpdateValue}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "grey",
    marginBottom: 4,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "pink",
    borderRadius: 4,
    fontSize: 16,
  },
});
