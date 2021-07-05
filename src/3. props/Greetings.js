import React from 'react'

function Greetings(props) {
    const {name, skill} = props;
    return (
        <div>
            <h1>Developer name: {name} and skill: {skill}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Greetings
