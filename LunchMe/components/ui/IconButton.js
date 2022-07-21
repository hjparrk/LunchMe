import { Pressable, Text, View } from "react-native";

function IconButton({ children, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View className="border-8 border-double border-lime-300">
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

export default IconButton;