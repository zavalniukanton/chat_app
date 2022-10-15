import { View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

const InputBox = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput style={styles.input} />
      <MaterialIcons style={styles.send} name="send" size={24} color="white" />
    </View>
  );
};

export default InputBox;
