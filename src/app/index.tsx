import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Emoji } from "@/Component/emoji";
import { emojies } from "@/Constant/Emojies";
import { P } from "@/Component/text";
import { NoteArea } from "@/Component/TextArea";
import { color } from "@/theme/color";
import { Button } from "expo-router/build/react-navigation";

export default function Index() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top + 16 }]}>
      <View style={styles.formContainer}>
      <P style={[styles.questionText]}>How are you feeling today?</P>

      <ScrollView
          horizontal={true}
          contentContainerStyle={styles.emoji}
      >
        {emojies.map((emoji) => (
          <Emoji text={emoji.name} key={emoji.name} source={emoji.image} />
        ))}
        </ScrollView>
        </View>

      <View>
        <P style={styles.notesText}>Notes</P>
        <NoteArea/>
      </View>
      <Pressable style={styles.button}>
        <P style={styles.buttonsave}>Save</P>
      </Pressable>
  
      
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
  formContainer: {
    gap:12,
  },
  button: {
    backgroundColor: "#2171f2",
    height: 30,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10
    
    
  },
  buttonsave: {
    fontSize: 20,
    color:"white"


  },
  emoji: {
    gap: 10
    
  }

});
