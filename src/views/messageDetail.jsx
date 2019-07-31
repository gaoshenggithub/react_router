import React from 'react'

const allMessages = [
    {id: 1, title: 'message0001', context: 'JACK ....'},
    {id: 2, title: 'message0002', context: 'Double ....'},
    {id: 3, title: 'message0003', context: 'String ....'}];

export default function MessageDetail(props) {
    //得到请求参数的id
    const {id} = props.match.params;
    const message = allMessages.find(m => m.id === parseInt(id));
    return (
        <div>
            <ul>
                <li>ID:{message.id}</li>
                <li>TITLE:{message.title}</li>
                <li>CONTEXT:{message.context}</li>
            </ul>
        </div>
    )
}
