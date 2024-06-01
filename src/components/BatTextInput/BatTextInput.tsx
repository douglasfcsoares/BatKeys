import React from "react";
import { TextInput } from "react-native";

import { styles } from "./BatTextInputStyle";

interface BatTextinputProps {
  pass: string;
}

export function BatTextInput(props: BatTextinputProps) {
  return (
    <TextInput style={styles.textInput} placeholder="PASS" value={props.pass} />
  );
}
