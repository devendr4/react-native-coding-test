import { Styles } from "dripsy";
import { Platform } from "react-native";

export const styles = Styles.create({
  mainContainer: {
    shadowOpacity: 0,
    elevation: 0,
    borderWidth: 0,
    alignItems: "center",
    backgroundColor: "$white",
    height: Platform.OS === "android" ? 60 : 80,
  },
  sceneContainer: {
    backgroundColor: "$white",
  },
});
