import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedIn: false
        }
    }
    
    render() {
        if(this.state.isloggedIn){
        return (
            <div>
                <h1>Welcome Rohan</h1>
            </div>
        )
    } else{
        return (
            <div>
                <h2>Please Log In</h2>
            </div>
        )
    }
}
}

export default UserGreeting
