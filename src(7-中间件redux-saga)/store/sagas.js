import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from "./actionCreateors";
import axios from 'axios';

function* getInitList() {
    try {
        const res = yield axios.get('https://www.easy-mock.com/mock/5f13c4e594896b22a7fa7651/api/api/todolist');
        const action = initListAction(res.data);
        yield put(action)
    }catch{
        console.log("网络请求数据失败！")
    }

}


function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;