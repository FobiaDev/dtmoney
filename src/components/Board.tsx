import Summary from "./Summary";

import { Container } from "../styles/components/board";
import TransactionTable from "./TransactionsTable";

const Board = (): JSX.Element => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
};

export default Board;
