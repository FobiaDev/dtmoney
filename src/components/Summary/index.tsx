import SummaryCard from "./SummaryCard";

import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "../../styles/components/summary";

const Summary = (): JSX.Element => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdrows += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    { deposits: 0, withdrows: 0, total: 0 }
  );

  return (
    <Container>
      <SummaryCard value={summary.deposits} type="income" />
      <SummaryCard value={summary.withdrows} type="outcome" />
      <SummaryCard value={summary.total} type="total" />
    </Container>
  );
};

export default Summary;
