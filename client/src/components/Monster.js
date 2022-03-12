import React from 'react'
import {useNavigate, Link} from 'react-router-dom'

const Monster = (props) => {
    const navigate = useNavigate()
    const {name, id, deleteMonster} = props

    return (
        <div className= 'border'>
        <h1>Monster</h1>
        <p>id: {id}</p>
        <p>name: {name}</p>
            <Link to={`/monsters/${id}`} state={{name, id}}>show</Link>
            <button onClick={()=> deleteMonster(id)}>delete</button>
            <button onClick={()=> navigate(`monsters/${id}/edit`, {state: {name, id}})}>edit</button>
            
        </div>
    )
}

export default Monster