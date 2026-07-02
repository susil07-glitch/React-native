import { Image, View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";


export default function Index() {
  const { top } = useSafeAreaInsets();
  const [IsHovered, setIsHovered] = React.useState(false);
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Text style={styles.questionText}>How are you feeling today?</Text>
      <View style={{ display: "flex", flexDirection: "row", gap:5, marginTop:20,marginLeft:7 }}>
        <Pressable style={styles.emojiContainer}
        >
          <Image
            style={styles.image}
            source={require("@/Image/Emoji/VeryHappy.png")}
          />
          <Text style={styles.emojiText}>Very Happy</Text>
        </Pressable>
        <Pressable style={styles.emojiContainer}>
          <Image
            style={styles.image}
            source={require("@/Image/Emoji/happy.png")}
          />
          <Text style={styles.emojiText}>Happy</Text>
        </Pressable>
        <Pressable style={styles.emojiContainer}>
          <Image
            style={styles.image}
            source={require("@/Image/Emoji/Neutral.png")}
          />
          <Text style={styles.emojiText}>Neutral</Text>
        </Pressable>
        <Pressable style={styles.emojiContainer}>
          <Image
            style={styles.image}
            source={require("@/Image/Emoji/sad.png")}
          />
          <Text style={styles.emojiText}>Sad</Text>
        </Pressable>
        <Pressable style={styles.emojiContainer}>
          <Image
            style={styles.image}
            source={require("@/Image/Emoji/stressed.png")}
          />
          <Text style={styles.emojiText}>Stressed</Text>
        </Pressable>
      </View>
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
  emojiContainer: {
    marginLeft: 5,
    gap: 8,
    backgroundColor: "white",
    height:100,
    width:65,
    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center",
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
    marginLeft: 15,
    width:"90%",
  },
});
