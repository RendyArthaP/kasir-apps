export const ADD_ITEM = "ADD_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"

export const addItem = (value) => {
  return {
    type: ADD_ITEM,
    value
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  }
}