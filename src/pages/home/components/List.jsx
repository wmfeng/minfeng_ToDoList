import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';

class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props;
        /*
        如果使用/detail?id=1 这种方式传参时，获取参数：this.props.location.search: "?id=1" 此时App.js中的路由无需做任何处理
        */ 
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link to={'/detail/' + item.get('id')} key={index}>
                                <ListItem >
                                    <img alt='' className='pic' src={item.get('imgUrl')} />
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>加载更多&gt;&gt;</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState, mapDispatch)(List);