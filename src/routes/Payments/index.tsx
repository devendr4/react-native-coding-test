import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, ScrollView, Text, View } from "dripsy";
import { useCallback, useState } from "react";
import { Button, RefreshControl } from "react-native";

import { API_URL } from "@/app";
import { PaymentsList } from "@/components/PaymentList";
import { colors } from "@/design-system/colors";
import { User } from "@/types";

export const PaymentsRoute = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["orders"],

    // can be changed for 789.json or 500.json to test the other cases, alongside the pull to refresh feature
    queryFn: () =>
      fetch(API_URL + "/789.json").then(res => res.json() as unknown as User),
  });

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().then(() => {
      setRefreshing(false);
    });
  }, [refetch]);
  return (
    <ScrollView
      sx={{ margin: "$l" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"$primary"} />
      ) : data?.orders ? (
        <PaymentsList
          paymentOrders={data.orders
            .flatMap(order =>
              order.payments.map(payment => ({
                ...payment,
                companyName: order.companyName,
                // gets number of finished payments for payments list component
                finishedPaymentsCount: order.payments.filter(
                  v => v.status === "PAID",
                ).length,
              })),
            )
            .sort((payment1, payment2) => {
              if (payment1.status === "PAID" && payment2.status === "PENDING") {
                return -1;
              } else if (
                payment1.status === "PENDING" &&
                payment2.status === "PAID"
              ) {
                return 1;
              }

              // If statuses are the same, sort by due date
              const date1 = new Date(payment1.dueDate).valueOf();
              const date2 = new Date(payment2.dueDate).valueOf();
              return date1 - date2;
            })}
        />
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
