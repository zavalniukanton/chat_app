import { ImageBackground, FlatList, KeyboardAvoidingView } from "react-native";

import background from "../../../assets/images/BG.png";
import messages from "../../../assets/data/messages.json";
import Message from "../../components/Message";
import InputBox from "../../components/InputBox";
import { styles } from "./styles";

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
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
