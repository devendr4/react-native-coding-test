import { Image } from "dripsy";
import React from "react";

import { icons } from "@/design-system/assets";

import type { IconProps } from "./types";

const Icon = ({ name, iconSx, size = 24, ...props }: IconProps) => {
  const source = icons[name]();

  return (
    <Image
      {...props}
      sx={{ height: size, width: size, ...iconSx }}
      source={source}
    />
  );
};

export { Icon };
