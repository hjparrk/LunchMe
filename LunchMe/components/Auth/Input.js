import { View, Text, TextInput } from "react-native";

function Input({ label, keyboardType, secure, value, onUpdateValue }) {
  return (
    <View className="items-center">
      <Text className="m-5 text-lg">{label}</Text>
      <TextInput
        className="bg-yellow-400 rounded-md border-2 border-dashed space-y-1 w-1/2 pb-2 pl-2 text-2xl"
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
