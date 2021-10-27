import { TO_DO_LIST_ACTIONS } from "../constants/toDoList.constants";
import {createAction} from '@reduxjs/toolkit'
export const addToDoAction = createAction(TO_DO_LIST_ACTIONS.TO_DO_ADD)
export const deleteToDoAction = createAction(TO_DO_LIST_ACTIONS.TO_DO_DELETE)
export const updateToDoAction = createAction(TO_DO_LIST_ACTIONS.TO_DO_UPDATE)