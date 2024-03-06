import { Styles } from "dripsy";

import { colors } from "@/design-system/colors";

export const styles = Styles.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "$l",
    gap: "$2xs",
    // backgroundColor: "transparent",
    borderWidth: 1,
    marginY: 10,
    borderRadius: 30,
    borderColor: colors.$border,
    // backgroundColor: colors.$primary,
    padding: 20,
  },
  title: {
    fontSize: "$2",
  },
});
