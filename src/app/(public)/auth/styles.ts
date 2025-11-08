import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container_logo: {
    width: "90%",
    height: 300,
    backgroundColor: "#e5cef2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
  },
  container_input: {
    width: "100%",
    gap: 20,
    marginTop: 70,
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 12,
  },
  title: {
    fontSize: 42,
    fontWeight: "900",
    color: "#8f1fcf",
  },
  container_button: {
    marginTop: 40,
    width: "100%",
    height: 52,
  },
});

export default styles;
