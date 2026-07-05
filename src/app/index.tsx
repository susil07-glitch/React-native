import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Emoji } from "@/Component/emoji";
import { P } from "@/Component/text";
import { NoteArea } from "@/Component/TextArea";
import { Link } from "expo-router";
import { Heart } from "lucide-react-native"
import { emojies } from "@/Constant/Emojies";


export default function Index() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top + 16 }]}>
      <ScrollView
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.formContainer}>
      <P style={[styles.questionText]}>How are you feeling today?</P>

      <ScrollView
          horizontal={true}
          contentContainerStyle={styles.emoji}
      >
        {Emoji.map((emojies) => (
          <Emoji isSelected={emojies.id} text={emojies.name} key={emojies.name} source={emojies.image} />
        ))}
        </ScrollView>
        </View>

      <View>
        <P style={styles.notesText}>Notes</P>
        <NoteArea/>
      </View>
        <Pressable style={styles.button}>
        <Heart />
        <P style={styles.buttonsave}>Save</P>
        </Pressable>
        
        <Link href="/about">Go to about</Link>
      </ScrollView>
  
      
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
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    gap:10
    
    
  },
  buttonsave: {
    fontSize: 20,
    color:"white"


  },
  emoji: {
    gap: 10
    
  }

});
