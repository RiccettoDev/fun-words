import Button from "@/components/atoms/button";
import logo from "@/img/welcome/11070.jpg";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function App() {

  const handleClick = () => {
    router.push("/auth/page");
  }
 
  return (
    <View style={styles.container}>
        <View style={styles.container_logo}>
            <Image source={logo} style={styles.logo} />
        </View>
        
        <Text style={styles.title}>FunWords</Text>
        
        <Text style={styles.subtitle}>
            Uma competição de descrições divertidas para palavras desconhecidas
        </Text>

        <View style={styles.container_button}>
            <Button title="Play" onPress={handleClick} />
        </View>
    </View>
  );
}