import { createContext } from 'react';

import { Transaction, TransactionInput } from '../../@types/shared';

interface ContextProps {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionContext = createContext<ContextProps>({} as ContextProps);