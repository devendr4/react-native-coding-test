import { icons } from "@/design-system/assets";
import { colors } from "@/design-system/colors";

export interface BottomTabProps {
  title: string;
  color: keyof typeof colors;
  icon: keyof typeof icons;
}
