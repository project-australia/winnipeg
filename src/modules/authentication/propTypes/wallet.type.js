import { string, shape, number } from "prop-types";

export const WalletType = shape({
  balance: number,
  paypalAccount: string,
  status: string,
});
