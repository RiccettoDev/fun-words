import { Text, View } from "react-native";

import styles from "./styles";

export default function Home() {
    return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Home</Text>
    </View>
  );
}