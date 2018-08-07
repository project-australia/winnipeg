import { initializePaypalSDK } from "./paypal";
import { initializeFirebase } from "./firebase";
import { initializeAxios } from "./axios";

export const setUpConfigs = () => {
  initializePaypalSDK();
  initializeFirebase();
  initializeAxios();
};

export * from "./redux";
export * from "./historyRouter";
export * from "./registerServiceWorker";
