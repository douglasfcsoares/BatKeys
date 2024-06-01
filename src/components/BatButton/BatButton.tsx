import React, { useState } from "react";
import { Button, View, Text, Pressable } from "react-native";

import { styles } from "./BatButtonStyle";
import { BatTextInput } from "../BatTextInput/BatTextInput";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    setPass("Olá React Native");
  }

  return (
    <View>
      <BatTextInput pass={pass} />
      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.textButton}>GENERATE</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("Cliquei no COPY");
        }}
      >
        <Text style={styles.textButton}>⚡COPY⚡</Text>
      </Pressable>
    </View>
  );
}
