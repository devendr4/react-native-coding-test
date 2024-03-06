import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, ScrollView, Text, View } from "dripsy";
import { Button } from "react-native";

import { API_URL } from "@/app";
import { styles } from "@/app/styles";
import { OrderList } from "@/components/OrderList";
import { colors } from "@/design-system/colors";
import { User } from "@/types";

export const OrdersRoute = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetch(API_URL).then(res => res.json() as unknown as User),
  });
  return (
    <ScrollView sx={{ margin: "$l" }}>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"$primary"} />
      ) : data?.orders ? (
        <View>
          <Text sx={styles.cardTitle}>Activo</Text>
          <View>
            <OrderList
              orders={data.orders.filter(
                order =>
                  order.orderStatus === "PENDING" ||
                  order.orderStatus === "LATE",
              )}
            />
          </View>

          <Text sx={styles.cardTitle}>Previo</Text>
          <View>
            <OrderList
              orders={data.orders.filter(order => order.orderStatus === "PAID")}
            />
          </View>
        </View>
      ) : (
        <View sx={{ display: "flex", gap: "$xl" }}>
          <Text>
            No se encontraron ordenes, por favor presiona el botón para
            actualizar.
          </Text>
          <Button
            color={colors.$primary}
            title="Recargar"
            onPress={() => refetch()}
          />
        </View>
      )}
    </ScrollView>
  );
};
