import styled from "styled-components";
import { darken, transparentize } from "polished";

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  & > label {
    & > input {
      display: none;
    }

    & > div {
      height: 4rem;

      background: transparent;

      border: 1px solid ${props => props.theme.colors["input-border"]};
      border-radius: 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      transition: border-color 0.2s;

      cursor: pointer;

      & > svg {
        font-size: 1,25rem;
      }

      & > span {
        font-size: 1rem;
        color: ${props => props.theme.colors["text-title"]};

        display: inline-block;
      }

      &:hover {
        border-color: ${props => darken(0.1, props.theme.colors["input-border"])};
      }
    }

    & > input:checked + div {
      background-color: ${props => transparentize(0.9, props.theme.colors.green)};
    }

    &:not(:first-child) > input:checked + div {
      background-color: ${props => transparentize(0.9, props.theme.colors.red)};
    }
  }
`;

export const Container = styled.form`
  & > h2 {
    color: ${(props) => props.theme.colors["text-title"]};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  & > input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    background-color: ${(props) => props.theme.colors["input-background"]};

    border: 1px solid ${(props) => props.theme.colors["input-border"]};
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: ${(props) => props.theme.colors["text-body"]};
    }

    &:not(:first-of-type) {
      margin-top: 1rem;
    }
  }

  & > button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;

    background-color: ${(props) => props.theme.colors.green};

    border: 0;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors["text-white"]};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
