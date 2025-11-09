import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  onPress?: () => void; // deixei opcional — você pode forçar obrigatório se quiser
}

export default function Link({ title, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} {...rest}>
      <Text style={styles.subtitle}>{title}</Text>
    </TouchableOpacity>
  );
}
