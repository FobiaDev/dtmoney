import { ReactComponent as Logo } from "../assets/svg/logo.svg";

import { Container, Content } from "../styles/components/header";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header = ({ onOpenNewTransactionModal }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <Content>
        <Logo />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
