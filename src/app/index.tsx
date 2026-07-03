import { Image, View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import text from "@/Component/text";
import { Emoji } from "@/Component/emoji";
import { emojies } from "@/Constant/Emojies";

export default function Index() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Text>How are you feeling today?</Text>

          {emojies.map((emoji) => (
            <Emoji text={emoji.name} key={emoji.name} source={emoji.image} />
          ))}
      
      <Text style={styles.notesText}>Notes</Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 5, marginTop: 20, marginLeft: 7 }}>
        <TextInput style={styles.notesInput} placeholder="Write your notes here..." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionText: {
    fontSize:18,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft:15,
  },
  container: {
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: 50,
    width: 50,
  },
  emojiText: {
    fontSize: 12,
    textAlign: "center",
  },
  notesText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 15,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    height: 100,
    marginLeft: 15,
    width:"90%",
  },
});
