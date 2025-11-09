import Button from "@/components/button";
import Input from "@/components/input";
import Link from "@/components/link";
import colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";
import styles from "./styles";

export default function Register() {

  const onSubmit = () => {
    Alert.alert("Cadastrar")
  }

  return (
    <View style={styles.container}>
        <Pressable style={styles.buttonReturn} onPress={router.back}>
            <Ionicons name="arrow-back-outline" size={30} color={colors.white}/>
        </Pressable>

        <View style={styles.header}>
          <Text style={styles.logoText1}>
            Fun<Text style={styles.logoText2}>Words</Text>
          </Text>
          <Text style={styles.subtitle}>
            Criar uma conta
          </Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.label}>Nome completo</Text>
            <Input placeholder="Digite seu nome completo" />
          </View>
          
          <View>
            <Text style={styles.label}>E-mail</Text>
            <Input placeholder="Digite seu e-mail" />
          </View>
          
          <View>
            <Text style={styles.label}>Password</Text>
            <Input placeholder="Digite sua senha" secureTextEntry/>
          </View>
          
          <View style={{ marginTop: 50 }}>
            <Button title="Cadastrar" onPress={onSubmit} />
          </View>
          
          <View style={styles.register}>
              <Link
                onPress={router.back} 
                title="Já possui cadastro?" 
              />
          </View>
        </View>
    </View>
  );
}