import {
  SET_TODOS,
  GET_TODOS,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  ERROR_TODOS,
  DELETE_TODO,
  TODO_DELETED,
  TODO_ADDED,
  ADD_TODO,
  UPDATE_COMPLETED,
  COMPLETED_UPDATED,
} from "../types"

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
})

export const todoAdded = (payload) => ({
  type: TODO_ADDED,
  payload,
})

export const getTodos = () => ({
  type: GET_TODOS,
})

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
})

export const nextPage = () => ({
  type: NEXT_PAGE,
})

export const previousPage = () => ({
  type: PREVIOUS_PAGE,
})

export const errorMessage = () => ({
  type: ERROR_TODOS,
})

export const updateCompleted = (id, completed) => ({
  type: UPDATE_COMPLETED,
  payload: { id, completed },
})

export const completedUpdated = (data) => ({
  type: COMPLETED_UPDATED,
  payload: data,
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
})

export const todoDeleted = (id) => ({
  type: TODO_DELETED,
  payload: id,
})
