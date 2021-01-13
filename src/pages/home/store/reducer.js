import { fromJS } from "immutable";
const defaultState = fromJS({
  test: true,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case "":
      return state.set("test", false);
    default:
      return state;
  }
};
