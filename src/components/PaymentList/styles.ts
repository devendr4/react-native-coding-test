import { Styles } from "dripsy";

import { colors } from "@/design-system/colors";

export const styles = Styles.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.$border,
    padding: 20,
  },
  title: {
    fontSize: "$2",
  },
  payBtn: {
    backgroundColor: "$primary",
    color: "$white",
    display: "flex",
    textAlign: "center",
    borderRadius: 20,
    padding: 10,
    fontSize: "$2",
  },
});
