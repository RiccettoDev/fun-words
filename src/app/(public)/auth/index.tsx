import Button from "@/components/button";
import Input from "@/components/input";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
        <View style={styles.container_logo}>
            {/* <Image source={logo} style={styles.logo} /> */}
            <Text style={styles.title}>Login</Text>
        </View>

        <View style={styles.container_input}>
          <Input placeholder="Email" />
          <Input placeholder="Senha"/>
        </View>
        
        <View style={styles.container_button}>
            <Button title="Entrar" />
        </View>
    </View>
  );
}
