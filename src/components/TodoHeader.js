import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  color: white;
  text-align: center;
  margin-bottom: 1rem;
`

const TodoHeader = ({ statusMessage, page }) => {
  return (
    <HeaderWrapper>
      <h1>Your tasks</h1>
      <h2>Page no. {page}</h2>
    </HeaderWrapper>
  )
}

export default TodoHeader
