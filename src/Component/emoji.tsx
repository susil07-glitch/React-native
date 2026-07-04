
import { color } from "@/theme/color";
import { P } from "./text";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

type Props = {
  text: string;
  source: ImageSourcePropType;
};

export function Emoji({ text, source }: Props) {
  return (
    <View style={styles.emojiContainerSingle}>
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
  emojiContainerSingle: {
    height: 100,
    width: "auto",
    backgroundColor: "#c8d4d4",
    display: "flex",  
    borderWidth: 1,
    borderColor: "blue",
    borderRadius:10
  
  },
  emojiText: {
    textAlign: "center",
  },
});