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
  cardTitle: {
    variant: "text.h3",
    fontFamily: defaultTheme.customFonts.ClashDisplay[700],
  },
  circleNumber: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderColor: "$primary",
    borderWidth: 2,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
