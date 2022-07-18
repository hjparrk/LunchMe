import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";

import { AuthContext } from "../store/auth-context";
import IconButton from "../components/ui/IconButton";

function HomeScreen() {
  const [isClicked, setIsClicked] = useState(false);
  const [titleColor, setTitleColor] = useState(
    "text-red-500 text-3xl italic tracking-widest"
  );
  const authCtx = useContext(AuthContext);

  function logoutHandler() {
    authCtx.logout();
  }

  function loginHandler() {
    if (isClicked) {
      setTitleColor("text-green-500");
    } else {
      setTitleColor("text-red-500");
    }
    setIsClicked(!isClicked);
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className={`${titleColor} text-3xl italic tracking-widest`}>
        Home Screen!!!!
      </Text>
      <IconButton
        iconFamily="AntDesign"
        name="logout"
        size={36}
        color="black"
        onPress={logoutHandler}
      />
      <IconButton
        iconFamily="AntDesign"
        name="checkcircle"
        size={36}
        color="black"
        onPress={loginHandler}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
