import { Pressable } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

function IconButton({ iconFamily, name, size, color, onPress }) {
  function iconFamilyHandler() {
    switch (iconFamily) {
      case "AntDesign":
        return <AntDesign name={name} size={size} color={color} />;
      case "MaterialIcons":
        return <MaterialIcons name={name} size={size} color={color} />;
    }
  }

  const icon = iconFamilyHandler();

  return <Pressable onPress={onPress}>{icon}</Pressable>;
}

export default IconButton;
// test
