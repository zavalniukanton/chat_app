import { View, Text } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { styles } from "./styles";
import { COLORS } from "../../constants";

const Message = ({ message }) => {
  const isMyMessage = message.user.id === "u1";

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage ? COLORS.lightgreen : COLORS.white,
          alignSelf: isMyMessage ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

export default Message;
