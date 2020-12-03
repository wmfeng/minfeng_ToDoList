import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '舒淇和冯德伦的婚姻暴露一个真相：嫁给爱情的女人，现在都怎样了？',
    content: '<img src="https://upload-images.jianshu.io/upload_images/6001242-3d101525c17fcb2c.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"/><p><b>2017年，衡水中学考上清华北大的人数是176人</b>，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p>'
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}