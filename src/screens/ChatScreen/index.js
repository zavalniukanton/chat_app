import { ImageBackground, FlatList, KeyboardAvoidingView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";

import background from "../../../assets/images/BG.png";
import messages from "../../../assets/data/messages.json";
import Message from "../../components/Message";
import InputBox from "../../components/InputBox";
import { styles } from "./styles";

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 160}
      style={styles.background}
    >
      <ImageBackground source={background} style={styles.background}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          inverted
        />

        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
