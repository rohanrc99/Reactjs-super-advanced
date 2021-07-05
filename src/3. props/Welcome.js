import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
            <div>
            <h1>Developer name: {this.props.name} and skill: {this.props.skill}</h1>
            <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Welcome
