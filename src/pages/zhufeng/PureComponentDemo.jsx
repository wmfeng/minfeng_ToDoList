import React,{Component} from "react";

class PureComponentDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            test: 111
        }
    }
    render(){
        return (
            <div>
                {this.state.test}
            </div>
        )
    }
}

export default PureComponentDemo;