import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";

export default function Input({ placeholder, style, ...rest }: TextInputProps) {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <Text
        pointerEvents="none"
        style={[styles.placeholder, !value ? styles.placeholderVisible : styles.placeholderHidden]}
      >
        {placeholder}
      </Text>

      <TextInput
        {...rest}
        value={value}
        onChangeText={setValue}
        // desativa o placeholder nativo
        placeholder=""
        style={[styles.input, style]}
      />
    </View>
  );
}
