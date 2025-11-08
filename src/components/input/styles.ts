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
    borderColor: "#8f1fcf",
    backgroundColor: "#e5cef2",
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#000",
    zIndex: 0,
  },
  placeholder: {
    position: "absolute",
    left: 12,
    top: 14,
    fontSize: 16,
    fontWeight: "700",
    color: "#8f1fcf",
    opacity: 0.9,
    zIndex: 2,
  },
  placeholderVisible: {
    opacity: 0.9,
  },
  placeholderHidden: {
    opacity: 0,
  },
});

export default styles;
