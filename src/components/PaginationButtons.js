import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { nextPage, previousPage } from "../redux/actions/todo"
import { DefaultButton } from "../theme/Buttons"

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
`

const PaginationButtons = ({ todosLength, page }) => {
  const dispatch = useDispatch()
  const changePage = (type = "next") => {
    if (type === "previous") {
      dispatch(previousPage())
    } else {
      dispatch(nextPage())
    }
  }

  return (
    <Wrapper>
      <DefaultButton
        disabled={page <= 1}
        onClick={() => changePage("previous")}
      >
        Previous Page
      </DefaultButton>
      <DefaultButton disabled={todosLength <= 0} onClick={changePage}>
        Next Page
      </DefaultButton>
    </Wrapper>
  )
}

export default PaginationButtons
