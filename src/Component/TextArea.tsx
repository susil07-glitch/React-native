import { View, TextInput, StyleSheet } from "react-native";

export const NoteArea = () => {
  return (
    <View style={styles.textAreaNotes}>
      <TextInput
        style={styles.notesInput}
        placeholder="Write your notes here..."
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
