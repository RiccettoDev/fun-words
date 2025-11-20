import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "900",
    color: colors.darkPurple,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.darkPurple,
  },
});

export default styles;
