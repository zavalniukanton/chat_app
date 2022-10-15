import { FlatList } from "react-native";

import chats from "../../../assets/data/chats.json";
import ChatListItem from "../../components/ChatListItem";
import { styles } from "./styles";

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
      style={styles.list}
    />
  );
};

export default ChatsScreen;
