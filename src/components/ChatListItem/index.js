import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { styles } from "./styles";

const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();

  const onNavigateToChat = () => {
    navigation.navigate("Chat", { id: chat.id, name: chat.user.name });
  };

  return (
    <Pressable style={styles.container} onPress={onNavigateToChat}>
      <Image source={{ uri: chat.user.image }} style={styles.avatar} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text numberOfLines={1} style={styles.name}>
            {chat.user.name}
          </Text>
          <Text style={styles.text}>
            {dayjs(chat.lastMessage.createdAt).fromNow()}
          </Text>
        </View>

        <Text numberOfLines={2} style={styles.text}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatListItem;
