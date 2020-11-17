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
                    list.map(item => (
                        <ToppicItem key={item.get('id')}>
                            <img className='topic-pic' src={item.get('imgUrl')} alt='' />
                            {item.get('title')}
                        </ToppicItem>
                    ))
                    // list.map((item) => {
                    //     return (
                    //         <ToppicItem key={item.get('id')}>
                    //             <img className='topic-pic' src={item.get('imgUrl')} alt='' />
                    // {item.get('title')}
                    //         </ToppicItem>
                    //     )
                    // })
                }

            </ToppicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','topicList'])
})
export default connect(mapStateToProps, null)(Toppic);