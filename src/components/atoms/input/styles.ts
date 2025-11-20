import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    marginBottom: 12,
  },
  input: {
    width: "100%",
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.darkPurple,
    backgroundColor: colors.midlePurple,
    paddingHorizontal: 12,
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    zIndex: 0,
  },
  placeholder: {
    position: "absolute",
    left: 12,
    top: 14,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
    opacity: 0.9,
    zIndex: 2,
  },
  placeholderVisible: {
    opacity: 0.9,
  },
  placeholderHidden: {
    opacity: 0,
  },
  errorText: {
    color: "red",
  },
});

export default styles;
