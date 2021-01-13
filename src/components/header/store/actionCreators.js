import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

const changeSearchInfoTitleList = (data) => ({
  type: constants.CHANGE_SEARCH_INFO_TITLE_LIST,
  // 此处的数据类型应该与reducer中的数据类型保持一致，（接口返回的数据类型是一般的数据类型）
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
});

export const changePage = (pageNo) => ({
  type: constants.CHANGE_PAGE,
  pageNo,
});

export const getSearchInfoList = () => {
  return (dispatch) => {
    axios.get("/api/headerList.json").then((res) => {
      const data = res.data;
      dispatch(changeSearchInfoTitleList(data.data));
    });
  };
};
