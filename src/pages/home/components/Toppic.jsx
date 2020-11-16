import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    ToppicWrapper,
    ToppicItem
} from '../style';

class Toppic extends Component {

    render() {
        const { list } = this.props;
        return (
            <ToppicWrapper>
                {
                    list.map((item) => {
                        return (
                            <ToppicItem key={item.get('id')}>
                                <img className='topic-pic' src={item.get('imgUrl')} alt='' />
                    {item.get('title')}
                            </ToppicItem>
                        )
                    })
                }

            </ToppicWrapper>
        )
    }
}

const mapState = (state) => ({
    list:state.get('home').get('topicList')
})
export default connect(mapState, null)(Toppic);