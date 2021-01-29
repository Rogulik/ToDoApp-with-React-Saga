import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodos } from "../redux/actions/todo"
import AddTodoForm from "../components/AddTodoForm"
import ErrorScreen from "../components/ErrorScreen"
import LoadingScreen from "../components/LoadingScreen"
import PaginationButtons from "../components/PaginationButtons"
import TodoHeader from "../components/TodoHeader"
import TodoItem from "../components/TodoItem"
import styled from "styled-components"

const MainContent = styled.main`
  display: flex;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const Todos = () => {
  const dispatch = useDispatch()

  //geting state from our redux store
  const isLoading = useSelector((state) => state.todo.loading)
  const error = useSelector((state) => state.todo.error)
  const page = useSelector((state) => state.todo.page)
  const todos = useSelector((state) => state.todo.todos)

  //initial render of all of the todos on specific page
  useEffect(() => {
    dispatch(getTodos())
  }, [page])

  return isLoading ? (
    <LoadingScreen />
  ) : error ? (
    <ErrorScreen error={error} />
  ) : (
    <MainContent>
      <div>
        <TodoHeader page={page} />

        {todos.map(({ title, completed, id }) => (
          <TodoItem title={title} completed={completed} id={id} />
        ))}
        <PaginationButtons todosLength={todos.length} page={page} />
      </div>
      <AddTodoForm todosLength={todos.length} />
    </MainContent>
  )
}

export default Todos
