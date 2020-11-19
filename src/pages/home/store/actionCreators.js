import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList
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