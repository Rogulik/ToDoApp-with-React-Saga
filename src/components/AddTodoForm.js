import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/actions/todo"
import styled from "styled-components"
import { WithoutBgButton } from "../theme/Buttons"

const Form = styled.form`
  display: flex;
  border: solid 1px bisque;
  width: 20rem;
  padding: 1rem;
  height: 20rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.h3`
  color: bisque;
  font-size: 2rem;
`

const TodoInput = styled.input`
  width: 100%;
  height: 2rem;
  margin: 1rem 0;
  padding: 0.5rem;
`

const SubHeader = styled.h4`
  color: white;
  text-align: center;
`

const StatusMessage = styled.span`
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
`

const AddTodoForm = ({ todosLength }) => {
  const [statusMessage, setStatusMessage] = useState("")
  const [title, setTitle] = useState("")
  const [todoId, setToDoId] = useState(10)
  const dispatch = useDispatch()

  //add new todo only available if there is only less than 10 todos on the page
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addTodo({
        userId: 1,
        id: todoId,
        title,
        completed: false,
      })
    )
    setToDoId(todoId + 1)
    setTitle("")

    setStatusMessage(" New todo has been created")
    setTimeout(() => {
      setStatusMessage("")
    }, 3000)
  }
  return (
    <Form onSubmit={onSubmit}>
      <Header>Add new todo</Header>
      <SubHeader>
        Available after deleting one of the items from the todo list
      </SubHeader>
      <TodoInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <StatusMessage>{statusMessage}</StatusMessage>
      <WithoutBgButton disabled={todosLength >= 10} type="submit">
        Add new todo
      </WithoutBgButton>
    </Form>
  )
}

export default AddTodoForm
