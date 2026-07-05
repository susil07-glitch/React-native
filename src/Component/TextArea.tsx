import { ComponentProps, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

type Props = ComponentProps<typeof TextInput>;
export const NoteArea = ({ style, ...Props }: Props) => {
  const [selsected, setSelected] = useState();

  return (
    <View style={styles.textAreaNotes}>
      <TextInput
        numberOfLines={5}
        textAlign="left"
        textAlignVertical="top"
        style={styles.notesInput}
        placeholder="Write your notes here..."
        {...Props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textAreaNotes: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginTop: 20,
    marginLeft: 7,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    height: 100,
    marginLeft: 15,
    width: "90%",
  },
});
