import { ReactNode, useEffect, useState } from "react";

import { Transaction, TransactionInput } from "../../@types/shared";
import { api } from "../../services/api";

import { TransactionContext } from "./context";

interface TransactionProviderProps {
  children: ReactNode;
}

const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createTransaction = async (transaction: TransactionInput) => {
    await api
      .post("/transactions", transaction)
      .then(() =>
        api
          .get<{ transactions: Transaction[] }>("/transactions")
          .then((response) => setTransactions(response.data.transactions))
      );
  };

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions: transactions,
        createTransaction: createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
