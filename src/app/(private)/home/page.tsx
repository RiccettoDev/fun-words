import { useAuth } from "@/context/auth.context";
import { supabase } from "@/lib/supabase";
import { Alert, Text, View } from "react-native";

import Button from "@/components/atoms/button";
import styles from "./styles";

export default function Home() {
    const { setAuth } = useAuth()

    async function handleSignOut() {
      const {error} = await supabase.auth.signOut(); 
      setAuth(null)

      if(error){
        Alert.alert("Error", "Erro ao deslogar da conta");
        return
      }
    }

    return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Home</Text>
      <View style={{ width: "100%", marginTop: 100 }}>
        <Button title="Logout" onPress={() => {handleSignOut()}} />
      </View>
    </View>
  );
}