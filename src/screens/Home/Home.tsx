import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import s from "./HomeStyles";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

const Home = () => {
  return (
    <View style={s.appContainer}>
      <View style={s.logoContainer}>
        <BatLogo />
      </View>
      <View style={s.buttonContainer}>
        <BatButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default Home;
