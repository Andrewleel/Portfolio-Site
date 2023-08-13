import React from 'react'

const Project = ( props ) => {
  return (
    <div>
      <h2>{ props.name }</h2>
      <h3><b>Tools:</b> { props.tools }</h3>
      <ul>
        {
          props.description.map((each) => {
            return <li>{ each }</li>
          })
        }
      </ul>
    </div>
  )
}

export default Project