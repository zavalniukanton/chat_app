import { View, Text, Image } from "react-native";

import { styles } from "./styles";

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.ibb.co/DKMJJQT/Steve.jpg" }}
        style={styles.avatar}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>Anton</Text>
          <Text style={styles.text}>12:00</Text>
        </View>

        <Text style={styles.text}>How are you?</Text>
      </View>
    </View>
  );
};

export default ChatListItem;
