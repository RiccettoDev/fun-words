import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import styles from "./styles";

interface Props extends TouchableOpacityProps{
    title: string;
}

export default function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest} activeOpacity={0.7} style={styles.button}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}