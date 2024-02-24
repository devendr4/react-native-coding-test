import { Styles } from "dripsy";

import { colors } from "@/design-system/colors";
import { defaultTheme } from "@/design-system/theme";

export const styles = Styles.create({
  indicatorStyle: {
    borderBottomColor: colors.$primary,
    borderBottomWidth: 2,
  },
  tabBar: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderBottomWidth: 0,
    shadowOpacity: 0,
    borderTopColor: "rgba(18, 18, 31, 0.10)",
  },
  label: {
    color: colors.$black,
    fontSize: 20,
    textTransform: "none",
    fontFamily: defaultTheme.customFonts.ClashDisplay[600],
  },
  container: {
    flex: 1,
  },
  title: { marginTop: "$xl", marginLeft: "$xl", marginBottom: "$mm" },
});
