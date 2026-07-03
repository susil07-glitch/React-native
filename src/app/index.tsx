import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Emoji } from "@/Component/emoji";
import { emojies } from "@/Constant/Emojies";
import { P } from "@/Component/text";
import { NoteArea } from "@/Component/TextArea";
import { color } from "@/theme/color";

export default function Index() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top + 16 }]}>
      <P style={[styles.questionText]}>How are you feeling today?</P>

      <ScrollView
        horizontal={true}
      >
        {emojies.map((emoji) => (
          <Emoji text={emoji.name} key={emoji.name} source={emoji.image} />
        ))}
      </ScrollView>

      <View>
        <P style={styles.notesText}>Notes</P>
        <NoteArea/>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 15,
  },
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    paddingHorizontal:10
  },
  notesText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 15,
  },

});
