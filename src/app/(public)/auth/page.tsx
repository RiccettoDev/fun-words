import Button from "@/components/button";
import Input from "@/components/input";
import Link from "@/components/link";
import { router } from "expo-router";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Login() {

  const handleClick = () => {
    router.push("/home/page");
  }

  const handleRegister = () => {
    router.push("/(public)/register/page");
  }
  
  const handleForgotPassword = () => {
    router.push("/(public)/forgot-password/page");
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logoText1}>
            Fun<Text style={styles.logoText2}>Words</Text>
          </Text>
          <Text style={styles.subtitle}>
            Divirta-se em um jogo de adivinhação com os amigos.
          </Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.label}>E-mail</Text>
            <Input placeholder="Digite seu e-mail" />
          </View>
          
          <View>
            <Text style={styles.label}>Password</Text>
            <Input placeholder="Digite sua senha" secureTextEntry/>
          </View>

          <View style={styles.forgotPassword}>
            <Link
              onPress={handleForgotPassword} 
              title="Esqueceu a senha?" 
            />
          </View>
          
          <Button title="Entrar" onPress={handleClick} />
          
          <View style={styles.register}>
              <Link
                onPress={handleRegister} 
                title="Não possui uma conta? Cadastre-se aqui." 
              />
          </View>
        </View>
    </View>
  );
}