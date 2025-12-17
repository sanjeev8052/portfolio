import React from 'react'
import { useParams } from 'react-router-dom'

const AllSkills = () => {
     
  const { name } = useParams()
  console.log(name)

    return (
        <div>
            <h1>hello world</h1>
        </div>
    )
}

export default AllSkills
