import React from 'react'
import MessageDetail from './messageDetail'
import {Route} from 'react-router-dom'
import MyNavLink from '../components/MyNavLink'

export default class Message extends React.Component {
    state = {
        messages: []
    };

    componentDidMount() {
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'message0001'},
                {id: 2, title: 'message0002'},
                {id: 3, title: 'message0003'}
            ];
            //更新状态
            this.setState({messages})
        }, 10 ** 3)
    }

    handleDetail = index => {
        this.props.history.push(`/home/message/messagedetail/${index}`)
    };
    handleDetail2 = index => {
        this.props.history.replace(`/home/message/messagedetail/${index}`)
    };
    back = () => {
        this.props.history.goBack()
    };
    forward = () => {
        this.props.history.goForward();
    };

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((message, index) => (
                            <li key={index}><MyNavLink
                                to={`/home/message/messagedetail/${message.id}`}>
                                {message.title}</MyNavLink>
                                &nbsp;&nbsp;

                                <button onClick={() => this.handleDetail(message.id)}>查看</button>
                                &nbsp;&nbsp;
                                <button onClick={() => this.handleDetail2(message.id)}>替换</button>
                            </li>))
                    }
                </ul>
                <div>
                    <p>
                        <button onClick={this.back}>后退</button>
                        <button onClick={this.forward}>前进</button>
                    </p>
                    <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
                </div>
            </div>
        );
    }
}

