import styled from "styled-components"

export const DefaultButton = styled.button`
  padding: 0.5rem;
  background-color: bisque;
  border: solid 2px transparent;
  border-radius: 3px;
  color: darkcyan;

  :hover {
    cursor: pointer;
    border: solid 2px bisque;
    background-color: transparent;
    color: bisque;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const WithoutBgButton = styled.button`
  background: none;
  outline: none;
  border: solid 1px bisque;
  color: white;
  padding: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: bisque;
    color: darkcyan;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
