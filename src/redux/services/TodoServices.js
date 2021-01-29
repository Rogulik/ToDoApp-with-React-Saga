import axios from "axios"
import { baseURL } from "../../config/api"

export const getTodos = async (page) => {
  const { data } = await axios.get(baseURL + `?_page=${page}`)
  return data
}

export const addTodo = async (formData) => {
  const { data } = await axios.post(baseURL, formData)
  return data
}

export const deleteTodo = async (id) => {
  return await axios.delete(baseURL + `/${id}`)
}

export const updateCompleted = async (arr) => {
  try {
    const { data } = await axios.patch(baseURL + `/${arr[0]}`, {
      completed: arr[1],
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
