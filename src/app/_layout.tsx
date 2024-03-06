import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DripsyProvider } from "dripsy";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { BottomTabs } from "@/components/BottomTabs";
import { theme } from "@/design-system";
import { useFonts } from "@/hooks/useFonts";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const queryClient = new QueryClient();
  const { interFontsLoaded, clashDisplayFontsLoaded } = useFonts();

  const onLayoutRootView = useCallback(async () => {
    if (interFontsLoaded && clashDisplayFontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [interFontsLoaded, clashDisplayFontsLoaded]);

  if (!interFontsLoaded || !clashDisplayFontsLoaded) {
    return;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <QueryClientProvider client={queryClient}>
        <DripsyProvider theme={theme}>
          <BottomTabs />
        </DripsyProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
