import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoItem = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getToDoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5f13c4e594896b22a7fa7651/api/api/todolist')
            .then((res) => {
                const data = res.data;
                const action = initListAction(data);
                dispatch(action);
            })
    }
}