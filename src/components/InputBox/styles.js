import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "whitesmoke",
  },
  input: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 99,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    fontSize: 18,
    backgroundColor: "white",
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 99,
    overflow: "hidden",
  },
});
