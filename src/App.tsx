import { useState } from "react";

import NewTransactionModal from "./components/modal/NewTransaction";

import Board from "./components/Board";
import Header from "./components/Header";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";
import TransactionProvider from "./contexts/Transaction/provider";

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState<boolean>(false);

  const handleNewTransactionModal = () => {
    setIsNewTransactionModalOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <TransactionProvider>
        <Header onOpenNewTransactionModal={handleNewTransactionModal} />
        <Board />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleNewTransactionModal}
        />
      </TransactionProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
