import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    DetailWrapper,
    Header,
    Content
} from './style';
import { actionCreators } from './store';

class Detail extends Component {
    render() {
        const { title, content } = this.props;
        /*
        如果使用/detail?id=1 这种方式传参时，获取参数：this.props.location.search: "?id=1"，获取回来的值需要做处理； 此时App.js中的路由无需做任何处理
        */ 
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        const { getDetail ,match} = this.props;
        getDetail(match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapState, mapDispatch)(Detail);