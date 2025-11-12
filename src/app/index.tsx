import colors from "@/constants/colors";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function App() {
 
  return (
    <View style={styles.container}>
        <ActivityIndicator size={44} color={colors.zinc} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.purple,
        justifyContent: "center",
        alignItems: "center",
    },
})