import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/1900829-fcccf78fb618cc50?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '社会热点',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/1900829-fcccf78fb618cc50?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ],
    articleList:[
        {
            id: 1,
            title: '11',
            desc: '2',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/1900829-fcccf78fb618cc50?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '11',
            desc: '2',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/1900829-fcccf78fb618cc50?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '11',
            desc: '2',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/1900829-fcccf78fb618cc50?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}