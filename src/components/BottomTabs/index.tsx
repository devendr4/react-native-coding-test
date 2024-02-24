import { Tabs } from "expo-router";

import { routes } from "@/constants/routes";
import { colors } from "@/design-system/colors";

import { BottomTab } from "../BottomTab";
import { styles } from "./styles";

export function BottomTabs() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarStyle: styles.mainContainer,
        tabBarActiveTintColor: colors.$primary,
        headerShown: false,
      }}
      sceneContainerStyle={styles.sceneContainer}>
      <Tabs.Screen
        name="index"
        options={{
          href: routes.PAYMENTS_URL,
          tabBarLabel: "",
          tabBarIcon: PaymentsTabItem,
        }}
      />
    </Tabs>
  );
}

function PaymentsTabItem() {
  return <BottomTab title="Pagos" color="$primary" icon="money" />;
}
