import React, { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";

interface InputProps extends TextInputProps {
  value?: string;
  error?: string;
}

export default function Input({ placeholder, style, value = "", error, onChangeText, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        pointerEvents="none"
        style={[
          styles.placeholder,
          (!value && !isFocused) ? styles.placeholderVisible : styles.placeholderHidden
        ]}
      >
        {placeholder}
      </Text>

      <TextInput
        {...rest}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
        placeholder=""
        style={[styles.input, style]}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
