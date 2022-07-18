import React, { useContext } from "react";
import { SafeAreaView, Text } from "react-native";

import { AuthContext } from "../store/auth-context";
import IconButton from "../components/ui/IconButton";

function HomeScreen() {
  const authCtx = useContext(AuthContext);

  function logoutHandler() {
    authCtx.logout();
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-red-500 text-3xl italic tracking-widest">
        Home Screen!!!!
      </Text>
      <IconButton
        iconFamily="AntDesign"
        name="logout"
        size={36}
        color="black"
        onPress={logoutHandler}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
