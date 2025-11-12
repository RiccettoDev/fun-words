import Button from "@/components/button";
import Input from "@/components/input";
import Link from "@/components/link";
import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, SafeAreaView, ScrollView, Text, View } from "react-native";
import { z } from "zod";
import styles from "./styles";

interface RegisterForm {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSignIn = async (dataForm: RegisterForm) => {
    setLoading(true)
    
    const {data, error} = await supabase.auth.signInWithPassword({
      email: dataForm.email,
      password: dataForm.password,
    })

    if(error){
      Alert.alert('Erro ao fazer o login', error.message)
      setLoading(false)
      return;
    }

    setLoading(false)
    router.push("/(private)/home/page")
  }

  const handleRegister = () => {
    router.push("/(public)/register/page");
  }
  
  const handleForgotPassword = () => {
    router.push("/(public)/forgot-password/page");
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
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
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <Input
                      placeholder="Digite seu e-mail"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      keyboardType="email-address"
                      error={error?.message}
                    />
                  )}
                />
              </View>
              
              <View>
                <Text style={styles.label}>Password</Text>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <Input
                      placeholder="Digite sua senha"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      secureTextEntry
                      error={error?.message}
                    />
                  )}
                />
              </View>

              <View style={styles.forgotPassword}>
                <Link
                  onPress={handleForgotPassword} 
                  title="Esqueceu a senha?" 
                />
              </View>
              
              <Button title={loading ? 'Carregando...' : 'Entrar'} onPress={handleSubmit(handleSignIn)} />
              
              <View style={styles.register}>
                  <Link
                    onPress={handleRegister} 
                    title="Não possui uma conta? Cadastre-se aqui." 
                  />
              </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}