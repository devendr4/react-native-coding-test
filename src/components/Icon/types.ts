import { Image } from "dripsy";
import { ComponentProps } from "react";

import { icons } from "@/design-system/assets";

export type IconProps = {
  name: keyof typeof icons;
  iconSx?: ComponentProps<typeof Image>["sx"];
  size?: number;
};
