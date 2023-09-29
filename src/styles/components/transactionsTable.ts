import styled from "styled-components";

export const Container = styled.div`
  & > table {
    width: 100%;
    border-spacing: 0 0.5rem;

    & th {
      padding: 1rem 2rem;

      color: ${props => props.theme.colors["text-body"]};
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
      text-transform: capitalize;
    }

    & > tbody td {
      padding: 1rem 2rem;
        
      background-color: ${props => props.theme.colors.shape};
    
      border: 0;
      border-radius: 0.25rem;
    
      color: ${props => props.theme.colors["text-body"]};

      &:first-child {
        color: ${props => props.theme.colors["text-title"]};
      }

      &.deposit {
        color: ${props => props.theme.colors.green};
      }

      &.withdrow {
        color: ${props => props.theme.colors.red};
      }
    }
  }
`;