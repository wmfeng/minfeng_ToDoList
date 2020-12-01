// 使用PureComponent可提升性能，相当于shouldComponentUpdate周期函数（*使用前提是项目中使用immutables.js来管理数据，否则会有其他的问题）
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import Toppic from './components/Toppic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';


class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        const { showScroll } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src={require('../../static/images/love.jpg')} />
                    <Toppic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }

            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        const { changeScrollTopShow } = this.props;
        window.removeEventListener('scroll',changeScrollTopShow)
    }

    bindEvents(){
        const { changeScrollTopShow } = this.props;
        window.addEventListener('scroll',changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());

    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home);