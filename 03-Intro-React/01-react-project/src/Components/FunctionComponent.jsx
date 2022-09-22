import React, { useState } from 'react'

const string = "tiene"

const FunctionalComponent = () => {
    const [person, setPerson] = useState({
        name: 'Estefania',
        rol: 'Frontend',
    })

    const [age, setAge] = useState(20)

    return (
        <>
            <h2>hi from a functioncomponent: {string}{age}</h2>
            <button onClick={(event) => { setAge(age + 1) }} >Click</button>
            <button onClick={(event) => { setPerson(person.name) }} >Click</button>
        </>
    )
}

export default FunctionalComponent