import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

export const searchFocus = () => ({
    type: constants.SEATCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEATCH_BLUR
})

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    // 此处的数据类型应该与reducer中的数据类型保持一致，（接口返回的数据类型是一般的数据类型）
    data: fromJS(data)

})
export const getList = () => {
    return (dispatch) => {
        axios.get("/api/headerList.json").then(res => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch((error) => {
            console.log(error);
        })
    }
}