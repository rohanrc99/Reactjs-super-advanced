import React from 'react'

function ListThree() {
    const names = ["scott","adam","John"]
    const NameList = names.map((name,index) =><h2 key = {index}>{name}</h2>)
    return <div>{NameList}</div>
}

export default ListThree
