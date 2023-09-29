import { FormEvent, useRef } from "react";

import Modal from "react-modal";

import { useTransactions } from "../../hooks/useTransactions";

import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as InCome } from "../../assets/svg/summary/income.svg";
import { ReactComponent as OutCome } from "../../assets/svg/summary/outcome.svg";

import {
  Container,
  TransactionTypeContainer,
} from "../../styles/components/modal/newTransaction";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  const { createTransaction } = useTransactions();

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    const formInputs = formRef.current?.elements;

    const title = formInputs?.namedItem("title");
    const amount = formInputs?.namedItem("amount");
    const type = formInputs?.namedItem("type");
    const category = formInputs?.namedItem("category");

    const formData = {
      title: (title as HTMLInputElement).value,
      amount: Number((amount as HTMLInputElement).value),
      type: (type as RadioNodeList).value,
      category: (category as HTMLInputElement).value,
    };

    await createTransaction(formData);

    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <Close />
      </button>

      <Container
        ref={formRef}
        onSubmit={(data) => handleCreateNewTransaction(data)}
      >
        <h2>Cadastrar transação</h2>

        <input type="text" name="title" placeholder="Titulo" />
        <input type="number" name="amount" placeholder="Valor" />

        <TransactionTypeContainer>
          <label>
            <input type="radio" name="type" value="deposit" defaultChecked />
            <div>
              <InCome />
              <span>Entrada</span>
            </div>
          </label>
          <label>
            <input type="radio" name="type" value="withdrow" />
            <div>
              <OutCome />
              <span>Saida</span>
            </div>
          </label>
        </TransactionTypeContainer>

        <input type="text" name="category" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
