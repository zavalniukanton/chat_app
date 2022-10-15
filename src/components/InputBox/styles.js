import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS.whitesmoke,
  },
  input: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 99,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.lightgray,
    fontSize: 18,
    backgroundColor: COLORS.white,
  },
  send: {
    backgroundColor: COLORS.royalblue,
    padding: 7,
    borderRadius: 99,
    overflow: "hidden",
  },
});
