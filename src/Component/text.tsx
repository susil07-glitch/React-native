
import { ComponentProps } from "react";
import { StyleSheet, Text } from "react-native";

type props = ComponentProps<typeof Text>;

const P = ({ style, ...props }:props) => {
    return (
        <Text style={[styles.text, style]}{...props} />
    )
 };
export default P;   

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#000000",
        fontWeight: "400",
    },
});
