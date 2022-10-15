import { ImageBackground, FlatList } from "react-native";

import background from "../../../assets/images/BG.png";
import messages from "../../../assets/data/messages.json";
import Message from "../../components/Message";
import { styles } from "./styles";

const ChatScreen = () => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
    </ImageBackground>
  );
};

export default ChatScreen;
