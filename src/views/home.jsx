import React from 'react'
import MyNavLink from '../components/MyNavLink'
import {Switch, Route} from 'react-router-dom'
import News from './news'
import Message from './message'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home Router Component</h2>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path='/home/news' component={News}/>
                            <Route path='/home/message' component={Message}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
