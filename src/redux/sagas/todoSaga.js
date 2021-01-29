import { all, call, put, select, takeEvery } from "redux-saga/effects"
import * as service from "../services/TodoServices"
import { ADD_TODO, DELETE_TODO, GET_TODOS, UPDATE_COMPLETED } from "../types"
import * as actions from "../actions/todo"

function* fetchTodos(action) {
  try {
    const getPage = (state) => state.todo.page
    const page = yield select(getPage)
    const todos = yield call(service.getTodos, page)
    yield put(actions.setTodos(todos))
  } catch (err) {
    console.log(err)
    yield put(actions.errorMessage())
  }
}

function* addTodo({ payload }) {
  try {
    const todo = yield call(service.addTodo, payload)
    yield put(actions.todoAdded(todo))
  } catch (err) {
    console.log(err)
    yield put(actions.errorMessage())
  }
}

function* updateCompleted({ payload: { id, completed } }) {
  try {
    const toggledTodo = yield call(service.updateCompleted, [id, completed])
    yield put(actions.completedUpdated(toggledTodo))
  } catch (err) {
    console.log(err)
    yield put(actions.errorMessage())
  }
}

function* deleteTodo({ payload }) {
  try {
    yield call(service.deleteTodo, payload)
    yield put(actions.todoDeleted(payload))
  } catch (err) {
    console.log(err)
    yield put(actions.errorMessage())
  }
}

function* watchFetchTodos() {
  yield takeEvery(GET_TODOS, fetchTodos)
}

function* watchAddTodo() {
  yield takeEvery(ADD_TODO, addTodo)
}

function* watchDeleteTodo() {
  yield takeEvery(DELETE_TODO, deleteTodo)
}

function* watchUpdateCompleted() {
  yield takeEvery(UPDATE_COMPLETED, updateCompleted)
}

export function* todoSaga() {
  yield all([
    watchFetchTodos(),
    watchAddTodo(),
    watchDeleteTodo(),
    watchUpdateCompleted(),
  ])
}
