import React from 'react'

function ListFour() {
    const persons =[
        {
            id:1,
            name : "Scott",
            age: 45,
            skills: "Scrum"
        },
        {
            id:2,
            name : "Adam",
            age: 50,
            skills: "JavaScript"
        },
        {
            id:3,
            name : "John",
            age: 34,
            skills: "Angular"
        },
        {
            id:4,
            name : "Taun",
            age: 39,
            skills: "MongoDB"
        }
    ]

    const personList = persons.map(person =>(
        <p key={person.id}>
            I am {person.name} and I am {person.age} years old and I know {person.skills}   
        </p>
    ))

    return <div>{personList}</div>
    
}

export default ListFour
