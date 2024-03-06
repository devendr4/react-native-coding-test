import "dayjs/locale/es";

import dayjs from "dayjs";
import { H1 } from "dripsy";
import { useState } from "react";
import { SafeAreaView, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import { OrdersRoute } from "@/routes/Orders";
import { PaymentsRoute } from "@/routes/Payments";

import { styles } from "./styles";

const renderScene = SceneMap({
  orders: OrdersRoute,
  payments: PaymentsRoute,
});

// this would ideally reside in an environment variable
export const API_URL = "https://finity-take-home.s3.amazonaws.com";

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabBar}
    labelStyle={styles.label}
    inactiveColor="grey"
    activeColor="black"
  />
);

export default function HomeScreen() {
  const layout = useWindowDimensions();

  dayjs.locale("es");

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "payments", title: "Pagos" },
    { key: "orders", title: "Ordenes" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <H1 sx={styles.title}>Gestionar Pagos</H1>
      <TabView
        swipeEnabled={false}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}
