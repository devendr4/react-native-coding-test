import { Text, View } from "dripsy";

import { colors } from "@/design-system/colors";

import { Icon } from "../Icon";
import { styles } from "./styles";
import { BottomTabProps } from "./types";

export function BottomTab({ title, color: selectedColor }: BottomTabProps) {
  const color = colors[selectedColor] || colors.$text;

  const textStyles = { ...styles.title, color, fontWeight: "semibold" };

  return (
    <View sx={styles.mainContainer}>
      <View>
        <Icon name="money" size={32} />
      </View>
      <Text sx={textStyles}>{title}</Text>
    </View>
  );
}
