import dayjs from "dayjs";
import { Text, View } from "dripsy";
import { FC } from "react";

import { styles as mainStyles } from "@/app/styles";
import { colors } from "@/design-system/colors";
import { PaymentOrders } from "@/types";

import { styles } from "./styles";

export const PaymentsList: FC<{ paymentOrders: PaymentOrders[] }> = ({
  paymentOrders,
}) => {
  return (
    <View>
      {paymentOrders.map((payment, index) => (
        <View
          key={payment.paymentId}
          // I would move this to styles.ts given more time
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            borderTopRightRadius: index ? 0 : 20,
            borderTopLeftRadius: index ? 0 : 20,
            borderBottomRightRadius:
              index === paymentOrders.length - 1 ? 20 : 0,
            borderBottomLeftRadius: index === paymentOrders.length - 1 ? 20 : 0,
            borderColor: colors.$border,
            padding: 20,
          }}>
          <View sx={mainStyles.circleNumber}>
            <Text sx={{ fontSize: 15, color: "$black", fontWeight: "700" }}>
              {payment.finishedPaymentsCount}
            </Text>
          </View>
          <View sx={{ wordBreak: "break-word", width: "50%" }}>
            <Text sx={mainStyles.cardTitle}>{payment.companyName}</Text>
            <Text>{dayjs(payment.dueDate).format("DD MMMM YYYY")}</Text>
          </View>
          <View
            sx={{
              width: "30%",
            }}>
            {payment.status === "DELAYED" ? (
              <Text sx={styles.payBtn}>{`Pagar $${payment.amount}`}</Text>
            ) : (
              <Text
                sx={{
                  textAlign: "center",
                  fontWeight: "800",
                }}>
                ${payment.amount}
              </Text>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};
