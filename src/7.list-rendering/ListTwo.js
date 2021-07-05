import React from 'react'

function ListTwo() {
    const names = ["scott","adam","John"]
    return (
        <div>
            {
            names.map((name, index) => <h2>{name} {index}</h2>)
            }
        </div>
    )
}

export default ListTwo
