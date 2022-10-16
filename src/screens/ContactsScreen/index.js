import { FlatList } from "react-native";

import { styles } from "./styles";
import chats from "../../../assets/data/chats.json";
import ContactListItem from "../../components/ContactListItem";

const ContactsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ContactListItem contact={item.user} />}
      style={styles.list}
    />
  );
};

export default ContactsScreen;
