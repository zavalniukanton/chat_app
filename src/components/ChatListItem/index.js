import { View, Text, Image } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { styles } from "./styles";

const ChatListItem = ({ chat }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: chat.user.image }} style={styles.avatar} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{chat.user.name}</Text>
          <Text style={styles.text}>
            {dayjs(chat.lastMessage.createdAt).fromNow()}
          </Text>
        </View>

        <Text style={styles.text}>{chat.lastMessage.text}</Text>
      </View>
    </View>
  );
};

export default ChatListItem;
