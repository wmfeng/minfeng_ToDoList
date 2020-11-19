import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import Toppic from './components/Toppic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';

class Home extends Component {
    render() {
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
            </HomeWrapper>
        )
    }

    componentDidMount() {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                articleList: result.articleList,
                recommendList: result.recommendList,
                topicList:result.topicList
            }
            this.props.changeHomeData(action)
        }).catch(err => {
            console.log(err);
        })
    }
}

const mapDispatch = (dispatch)=>({
    changeHomeData(action){
        dispatch(action)
    }
})

export default connect(null,mapDispatch)(Home);