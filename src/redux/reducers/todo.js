import {
  SET_TODOS,
  ERROR_TODOS,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  TODO_DELETED,
  TODO_ADDED,
  COMPLETED_UPDATED,
} from "../types"

const initialState = {
  page: 1,
  todos: [],
  loading: true,
  error: "",
}

export default function todo(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case TODO_ADDED:
      return {
        ...state,
        todos: [...state.todos, payload],
      }
    case TODO_DELETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      }
    case SET_TODOS:
      return {
        ...state,
        todos: payload,
        loading: false,
      }
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
        loading: false,
      }
    case PREVIOUS_PAGE:
      return {
        ...state,
        page: state.page - 1,
        loading: false,
      }
    case COMPLETED_UPDATED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return { ...todo, completed: payload.completed }
          } else if (todo.id === 201) {
            return { ...todo, completed: !state.completed }
          }
          return todo
        }),
        loading: false,
      }
    case ERROR_TODOS:
      return {
        page: 1,
        todos: [],
        loading: false,
        error: "Something went wrong",
      }
    default:
      return state
  }
}
