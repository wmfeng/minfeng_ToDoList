// import { combineReducers } from 'redux';
// 为了与immutable配套使用
import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
});

export default reducer;