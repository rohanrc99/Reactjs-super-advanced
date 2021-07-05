import React, { Component } from 'react'

export class UserGreetingTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedIn: true
        }
    }
    
    render() {
        let message;
        if(this.state.isloggedIn){
            message = 'Welcome Rohan'
    } else{
        message = 'Please Login'
    }
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}
}

export default UserGreetingTwo
