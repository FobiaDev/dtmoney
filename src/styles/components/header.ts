import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > button {
    height: 3rem;
    padding: 0 2rem;

    background-color: ${props => props.theme.colors['blue-light']};

    font-size: 1rem;
    color: ${props => props.theme.colors['text-white']};

    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Container = styled.header`
  background-color: ${props => props.theme.colors.blue};
`;
