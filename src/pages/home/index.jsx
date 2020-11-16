import React, { Component } from "react";
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from "./style";
import Toppic from "./components/Toppic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={require("../../static/images/love.jpg")}/>
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
}

export default Home;