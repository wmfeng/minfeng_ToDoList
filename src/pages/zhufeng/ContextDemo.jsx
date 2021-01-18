import React, { Component } from "react";

/* 
使用条件：
1.公共信息(语言，主题)如何传递给每个组件
2.用props太繁琐
3.用redux小题大做
*/

// 创建 Context 填入默认值( 任何一个jx变量)
const ThemeContext = React.createContext('light');

//底层组件  --- 函数组件
function ThemeLink() {
    //const theme = this.context //会报错，函数组件中没有实例，即没有this
    // 函数式组件可以使用 Consumer
    return (<ThemeContext.Consumer>
        {
            value => <p>link'x theme is {value}</p>
        }
    </ThemeContext.Consumer>)
}

// 底层组件  --- class组件
class ThemedButton extends Component {
    // 制定 contextType 读取当前的 theme context
    //static contextType = ThemeContext //（此写法与 hemedButton.contextType = ThemeContext 相同）也可以用 ThemedButtom.
    render() {
        const theme = this.context //React 会往上找到最近到 theme Provider. 然后使用它
        return (
            <div>
                <p>button's theme is {theme}</p>
            </div>
        )
    }
}
ThemedButton.contextType = ThemeContext //指定 contextType 读取当前到 theme context.

// 中间的组件再也不必指明往下传递 theme 了
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
            <ThemeLink />
        </div>
    )
}

class ContextDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        }
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar />
                    <hr />
                    <button onClick={this.changeTheme}>change theme</button>
                </ThemeContext.Provider>
            </div>
        )
    }
    changeTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
}

export default ContextDemo;

/*
总结：
1.创建Context：
const ThemeContext = React.createContext('light');
2.使用：
<ThemeContext.Provider value={this.state.theme}>
    <Toolbar />
    <hr />
    <button onClick={this.changeTheme}>change theme</button>
</ThemeContext.Provider>
3.底层组件消费：
    3.1 class组件：
        定义指定到contextType:
        ThemedButton.contextType = ThemeContext 或者 static contextType = ThemeContext
        -----
        class ThemedButton extends Component {
            // 制定 contextType 读取当前的 theme context
            //static contextType = ThemeContext //（此写法与 hemedButton.contextType = ThemeContext 相同）也可以用 ThemedButtom.
            render() {
                const theme = this.context //React 会往上找到最近到 theme Provider. 然后使用它
                return (
                    <div>
                        <p>button's theme is {theme}</p>
                    </div>
                )
            }
        }
    3.2 函数组件
        使用 ThemeContext.Consumer 里面包裹一个函数
        function ThemeLink() {
            //const theme = this.context //会报错，函数组件中没有实例，即没有this
            // 函数式组件可以使用 Consumer
            return (<ThemeContext.Consumer>
                {
                    value => <p>link'x theme is {value}</p>
                }
            </ThemeContext.Consumer>)
        }

*/