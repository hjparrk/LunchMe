import { Pressable, Text, View } from "react-native";

function FlatButton({ children, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;
