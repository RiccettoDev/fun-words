import { Text, View } from "react-native";
import styles from "./styles";

export default function ForgotPassword() {

  return (
    <View style={styles.container}>
        <View >
            <Text style={{ fontSize: 24, fontWeight: "bold"}}>Recuperar senha</Text>
        </View>
    </View>
  );
}