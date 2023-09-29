import { useContext } from "react";

import { TransactionContext } from "../contexts/Transaction/context";

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}
