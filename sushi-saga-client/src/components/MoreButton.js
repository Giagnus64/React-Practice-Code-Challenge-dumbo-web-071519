import React from 'react'

const MoreButton = (props) => {
  console.log(props)
  return <button onClick={props.moreSushiClicked}>
            More sushi!
          </button>
}

export default MoreButton