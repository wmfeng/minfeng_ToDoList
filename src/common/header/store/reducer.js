import * as constants from "./constants";
// 在reducer中state的值是不可以被直接更改的，immutable提供了这种不被更改的方法
import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false,
    list: []
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEATCH_FOCUS:
            return state.set("focused", true);
        case constants.SEATCH_BLUR:
            return state.set("focused", false);
        case constants.CHANGE_LIST:
            return state.set("list", action.data);
        default:
            return state;

    }

    // 使用switch之前
    // if (action.type === constants.SEATCH_FOCUS) {
    //     // return { focused: true }
    //     /*
    //         immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    //     */
    //     return state.set("focused", true);
    // }
    // if (action.type === constants.SEATCH_BLUR) {
    //     // return { focused: false }
    //     return state.set("focused", false)
    // }
    // if (action.type === constants.CHANGE_LIST) {
    //     return state.set("list", action.data);
    // }
    // return state;
}