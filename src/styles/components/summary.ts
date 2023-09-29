import styled,{css} from 'styled-components';

const cardTotal = css`
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors['text-white']};
`;

export const Card = styled.div<{total?: boolean}>`
  padding: 1.5rem 2rem;

  background-color: ${props => props.theme.colors.shape};

  border-radius: 0.25rem;

  color: ${props => props.theme.colors['text-title']};

  ${props => props.total && cardTotal}

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > strong {
    margin-top: 1rem;

    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;

    display: block;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  transform: translate(0, -7rem);
`;