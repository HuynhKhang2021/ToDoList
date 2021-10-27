import { createReducer } from "@reduxjs/toolkit";
import { TO_DO_LIST_ACTIONS } from "../constants";
const initialState = {
  tasksList: [],
};
const toDoListReducer = createReducer(initialState, {
  [TO_DO_LIST_ACTIONS.TO_DO_ADD]: (state, action) => {
    return {
      ...state,
      tasksList: [...state.tasksList, action.payload],
    };
  },
  [TO_DO_LIST_ACTIONS.TO_DO_DELETE]: (state, action) => {
    const {id} = action.payload
    const newTasksList = [...state.tasksList]
    const indexToDo = newTasksList.findIndex(item => item.id === id)
    newTasksList.splice(indexToDo, 1)
    return {
      ...state,
      tasksList: newTasksList,
    };
  },
  [TO_DO_LIST_ACTIONS.TO_DO_UPDATE]: (state, action) => {
    const {id} = action.payload
    const newTasksList = [...state.tasksList]
    const indexToDo = state.tasksList.findIndex(item => item.id === id)
    newTasksList.splice(indexToDo, 1, action.payload)
    return {
      ...state,
      tasksList: newTasksList,
    };
  },
});
export default toDoListReducer;
