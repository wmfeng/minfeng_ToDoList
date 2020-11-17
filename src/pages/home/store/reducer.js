import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1411604405,573366683&fm=26&gp=0.jpg'
        },
        {
            id: 2,
            title: '社会热点',
            imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1411604405,573366683&fm=26&gp=0.jpg'
        }
    ],
    articleList:[
        {
            id: 1,
            title: '11',
            desc: '2',
            imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1411604405,573366683&fm=26&gp=0.jpg'
        },
        {
            id: 2,
            title: '11',
            desc: '2',
            imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1449346651,454262593&fm=26&gp=0.jpg'
        },
        {
            id: 3,
            title: '11',
            desc: '2',
            imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1449346651,454262593&fm=26&gp=0.jpg'
        }
    ],
    recommendList: [
        {
            id: 1,
            imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3033438378,4156670815&fm=26&gp=0.jpg'
        },
        {
            id: 2,
            imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3033438378,4156670815&fm=26&gp=0.jpg'
        }
    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}