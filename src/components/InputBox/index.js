import { View, TextInput } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");

  const onSendMesage = () => {
    console.warn("Send a new message");

    setNewMessage("");
  };

  return (
    <View style={styles.container}>
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
        color="white"
        style={styles.send}
        onPress={onSendMesage}
      />
    </View>
  );
};

export default InputBox;
