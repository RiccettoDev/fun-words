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
    backgroundColor: "#e5cef2",
    alignItems: "center",
    justifyContent: "center",
    padding: 60,
    borderRadius: "100%",
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 12,
  },
  title: {
    marginTop: 40,
    fontSize: 42,
    fontWeight: "900",
    color: "#8f1fcf",
  },
  subtitle: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 22,
    fontWeight: "500",
    color: "#898989",
  },
  container_button: {
    marginTop: 40,
    width: "100%",
    height: 52,
  },
});

export default styles;
