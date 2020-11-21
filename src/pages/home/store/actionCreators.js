import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList
})

const addHomeList = (list,nextPage) =>({
    type: constants.ADD_ARTICLE_LIST,
    // reducer中的articleList是经过immutable处理过的数组，所以在此处也应该进行处理与前者保持一致；
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data;
            dispatch(changeHomeData(result))
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getMoreList =(page)=>{
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then(res => {
            const result = res.data.data;
            dispatch(addHomeList(result,page+1))
        }).catch(err => {
            console.log(err);
        })
    }
}