import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseEnter: false,
  searchInfoTitList: [],
  pageNo: 1,
  totalPage: 1,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.MOUSE_ENTER:
      return state.set("mouseEnter", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseEnter", false);
    case constants.CHANGE_SEARCH_INFO_TITLE_LIST:
      return state.merge({
        searchInfoTitList: action.data,
        totalPage: action.totalPage,
      });
    case constants.CHANGE_PAGE:
      return state.set("pageNo", action.pageNo);
    default:
      return state;
  }
};
