import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.zinc,
    paddingTop: 70,
  },
  header: {
    paddingLeft: 14,
    paddingRight: 14,
    padding: 20,
  },
  logoText1: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 20,
  },
  logoText2: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.darkPurple,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 36,
    fontWeight: "400",
    color: colors.white,
    marginBottom: 34,
  },
  form: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    paddingTop: 30,
  },
  label: {
    color: colors.zinc,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 6,
  },
  forgotPassword: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingBottom: 30,
  },
  register: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 30,
  },
  buttonReturn: {
    position: "absolute",
    top: 60,
    right: 40,
  },
});

export default styles;
