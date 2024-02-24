import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts as useInterFont,
} from "@expo-google-fonts/inter";
import { useFonts as useExpoFonts } from "expo-font";

import { defaultTheme, fontName, headingFontName } from "@/design-system/theme";

export function useFonts() {
  const [interFontsLoaded] = useInterFont({
    [defaultTheme.customFonts.Inter[100]]: Inter_100Thin,
    [defaultTheme.customFonts.Inter[200]]: Inter_200ExtraLight,
    [defaultTheme.customFonts.Inter[300]]: Inter_300Light,
    [fontName]: Inter_400Regular,
    [defaultTheme.customFonts.Inter[500]]: Inter_500Medium,
    [defaultTheme.customFonts.Inter[600]]: Inter_600SemiBold,
    [defaultTheme.customFonts.Inter[700]]: Inter_700Bold,
    [defaultTheme.customFonts.Inter[800]]: Inter_800ExtraBold,
    [defaultTheme.customFonts.Inter[900]]: Inter_900Black,
  });

  const [clashDisplayFontsLoaded] = useExpoFonts({
    [defaultTheme.customFonts
      .ClashDisplay[200]]: require("@/assets/fonts/ClashDisplay-Extralight.otf"),
    [defaultTheme.customFonts
      .ClashDisplay[300]]: require("@/assets/fonts/ClashDisplay-Light.otf"),
    [headingFontName]: require("@/assets/fonts/ClashDisplay-Regular.otf"),
    [defaultTheme.customFonts
      .ClashDisplay[500]]: require("@/assets/fonts/ClashDisplay-Medium.otf"),
    [defaultTheme.customFonts
      .ClashDisplay[600]]: require("@/assets/fonts/ClashDisplay-Semibold.otf"),
    [defaultTheme.customFonts
      .ClashDisplay[700]]: require("@/assets/fonts/ClashDisplay-Bold.otf"),
  });

  return {
    interFontsLoaded,
    clashDisplayFontsLoaded,
  };
}
