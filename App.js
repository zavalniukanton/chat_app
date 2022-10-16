import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { COLORS } from "./src/constants";
import AppNavigator from "./src/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whitesmoke,
    justifyContent: "center",
  },
});
