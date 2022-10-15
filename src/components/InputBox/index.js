import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { COLORS } from "../../constants";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");

  const onSendMesage = () => {
    console.warn("Send a new message");

    setNewMessage("");
  };

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        multiline
        style={styles.input}
      />
      <MaterialIcons
        name="send"
        size={24}
        color={COLORS.white}
        style={styles.send}
        onPress={onSendMesage}
      />
    </SafeAreaView>
  );
};

export default InputBox;
