import { Text, Image, Pressable, View } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { styles } from "./styles";

const ContactListItem = ({ contact }) => {
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <Image source={{ uri: contact.image }} style={styles.avatar} />

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {contact.name}
        </Text>

        <Text style={styles.status}>{contact.status}</Text>
      </View>
    </Pressable>
  );
};

export default ContactListItem;
