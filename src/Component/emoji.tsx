
import { color } from "@/theme/color";
import { P } from "./text";
import { Image, ImageSourcePropType, Pressable, StyleSheet, View } from "react-native";
import { Component, ComponentProps } from "react";

type Props = {
  text: String;
  source: ImageSourcePropType;
  isSelected: boolean;
} &ComponentProps<typeof Pressable>;

export function Emoji({ text, source ,isSelected,...rest}: Props) {
  return (
    <Pressable
      style={[styles.emojiContainerSingle, {
      borderColor:isSelected ?color.primary:color.border,
    }]}
    >
      <Image style={styles.image} source={source} />
      <P style={styles.emojiText}>{text}</P>
    </Pressable>
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