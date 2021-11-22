import React, { useEffect } from "react";
import styles from "../../styles/componentStyles/orders.module";
import OrderItem from "./OrderItem";
import { ordersLogic } from "../logic/orders.lg";

function Orders() {
  const { userState } = ordersLogic();

  return (
    <div className={styles.root}>
      {userState.orders && userState.orders.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.header}></div>
          {userState.orders.map((order, key) => (
            <OrderItem order={order} key={key} />
          ))}
        </div>
      ) : (
        <div className={styles.nothing}>
          <h2 className="grey">Nothing here, get shopping</h2>
        </div>
      )}
    </div>
  );
}

export default Orders;
