
import { color } from "@/theme/color";
import P from "./text";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

type Props = {
  text: string;
  source: ImageSourcePropType;
};

export function Emoji({ text, source }: Props) {
  return (
    <View style={styles.emojiContainer}>
      <Image style={styles.image} source={source} />
      <P style={styles.emojiText}>{text}</P>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    
  },
    emojiContainer: {
        height: 100,
        width: "auto",
        display: "flex",
        alignItems: "center",
        borderRadius: 20,

      
  },
  emojiText: {
    textAlign: "center",
  },
});