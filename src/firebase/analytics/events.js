import { analytics } from "..";

const logSelectEvent = (product) => {
  analytics.logEvent("view_item", {
    items: [product],
  });
};

const logLoginEvent = () => {
  analytics.logEvent("login");
};

const logSetOrderEvent = () => {
  analytics.logEvent("purchase");
};

const logAddInfoEvent = () => {
  analytics.logEvent("add_shipping_info");
};

const logRegisterEvent = () => {
  analytics.logEvent("sign_up");
};

const logAddToCartEvent = () => {
  analytics.logEvent("add_to_cart");
};

export {
  logSelectEvent,
  logLoginEvent,
  logSetOrderEvent,
  logAddInfoEvent,
  logRegisterEvent,
  logAddToCartEvent,
};
