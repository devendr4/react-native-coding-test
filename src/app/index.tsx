import { H1, Text } from "dripsy";
import { useState } from "react";
import { SafeAreaView, useWindowDimensions, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import { styles } from "./styles";

const EmptyState = () => (
  <View style={styles.container}>
    <Text
      sx={{
        display: "flex",
        textAlign: "center",
        marginTop: "$2xl",
        variant: "text.h2",
      }}>
      {"Good luck :)"}
    </Text>
  </View>
);

const OrdersRoute = () => <EmptyState />;

const PaymentsRoute = () => <EmptyState />;

const renderScene = SceneMap({
  orders: OrdersRoute,
  payments: PaymentsRoute,
});

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
