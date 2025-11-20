import { supabase } from "@/lib/supabase";
import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from "react-native";
import { z } from "zod";

import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import Link from "@/components/atoms/link";

import colors from "@/constants/colors";
import styles from "./styles";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const schema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function Register() {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (dataForm: RegisterForm) => {
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email: dataForm.email,
      password: dataForm.password,
      options: {
        data: {
          name: dataForm.name,
        }
      }
    })

    if(error){
      Alert.alert('Erro ao cadastrar', error.message)
      setLoading(false)
      return;
    }

    setLoading(false)
    router.push("/(private)/home/page")
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Pressable style={styles.buttonReturn} onPress={router.back}>
            <Ionicons name="arrow-back-outline" size={30} color={colors.white} />
          </Pressable>

          <View style={styles.header}>
            <Text style={styles.logoText1}>
              Fun<Text style={styles.logoText2}>Words</Text>
            </Text>
            <Text style={styles.subtitle}>Criar uma conta</Text>
          </View>

          <View style={styles.form}>
            {/* substituí <form> por View */}
            <View>
              <Text style={styles.label}>Nome completo</Text>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu nome completo"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                  />
                )}
              />
            </View>

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

            <View style={{ marginTop: 50 }}>
              {/* chame handleSubmit aqui */}
              <Button title={loading ? 'Carregando...' : 'Cadastrar'} onPress={handleSubmit(onSubmit)} />
            </View>

            <View style={styles.register}>
              <Link onPress={router.back} title="Já possui cadastro?" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
