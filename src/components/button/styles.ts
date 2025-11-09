import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 60,
    backgroundColor: colors.darkPurple,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default styles;
