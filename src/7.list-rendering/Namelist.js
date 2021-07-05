import React from 'react'

function Namelist() {
    const names = ["scott","adam","John"]
    return (
        <div>
            <h1>List of Names</h1>
            <ul>
                <li>{names[0]}</li>
                <li>{names[1]}</li>
                <li>{names[2]}</li>
            </ul>
        </div>
    )
}

export default Namelist
