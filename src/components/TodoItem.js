import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { deleteTodo, updateCompleted } from "../redux/actions/todo"
import { WithoutBgButton } from "../theme/Buttons"

const MainWrapper = styled.div`
  display: flex;
  width: 30rem;
  justify-content: space-around;
  margin: 0.6rem 0;
  padding: 0.3rem 0;
  border-bottom: solid 2px bisque;
`

const TextWrapper = styled.div`
  width: 20rem;
  color: white;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20rem;
  align-items: center;
`

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()
  return (
    <MainWrapper key={id}>
      <TextWrapper>
        <p>
          <span style={{ color: "bisque" }}>TITLE:</span> {title}
        </p>
        <p>
          {" "}
          <span style={{ color: "bisque" }}>STATUS:</span>{" "}
          {completed ? "Completed" : "Unfinished"}
        </p>
      </TextWrapper>

      <ButtonWrapper>
        <WithoutBgButton
          onClick={() => {
            dispatch(updateCompleted(id, !completed))
          }}
        >
          {completed ? "Undo task" : "Complete task"}
        </WithoutBgButton>
        <WithoutBgButton
          disabled={!completed}
          onClick={() => {
            dispatch(deleteTodo(id))
          }}
        >
          X
        </WithoutBgButton>
      </ButtonWrapper>
    </MainWrapper>
  )
}

export default TodoItem
