import dayjs from "dayjs";
import { Text, View } from "dripsy";
import { FC } from "react";

import { styles as mainStyles } from "@/app/styles";
import { Order } from "@/types";

import { Icon } from "../Icon";
import { styles } from "./styles";

export const OrderList: FC<{ orders: Order[] }> = ({ orders }) => {
  return (
    <View>
      {orders?.map(v => (
        <View key={v.orderId} sx={styles.mainContainer}>
          <View
            sx={{
              width: 40,
              height: 40,
              borderRadius: 100,
              borderColor: v.orderStatus === "LATE" ? "$danger" : "$primary",
              borderWidth: 2,
              backgroundColor: "transparent",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text sx={{ fontSize: 15, color: "$black", fontWeight: "700" }}>
              {v.payments.filter(payment => payment.status === "PAID")
                .length === 4 ? (
                <Icon size={10} name="check" />
              ) : (
                v.payments.filter(payment => payment.status === "PAID").length
              )}
            </Text>
          </View>
          <View sx={{ wordBreak: "break-word", width: "50%" }}>
            <Text sx={mainStyles.cardTitle}>{v.companyName}</Text>
            <Text>{dayjs(v.orderDate).format("DD MMMM YYYY")}</Text>
          </View>
          <View sx={{ width: "30%" }}>
            <Text
              sx={{
                fontWeight: "800",
                color: v.orderStatus === "LATE" ? "$danger" : "$text",
              }}>
              ${v.totalAmount}
            </Text>
            <Text>
              {v.orderStatus === "LATE" || v.orderStatus === "PENDING"
                ? "Falta por pagar"
                : "Completado"}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
