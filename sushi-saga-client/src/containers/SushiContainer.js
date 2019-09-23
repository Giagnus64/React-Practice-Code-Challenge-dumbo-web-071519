import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
          props.sushies.slice(props.currentSushiIndex, props.currentSushiIndex+4).map( (sushi) => <Sushi sushiesEaten={props.sushiesEaten}  wallet={props.wallet} handleClickSushi={props.handleClickSushi} key={sushi.id} sushi={sushi}/>)
        //  <Sushi  />
        }
        <MoreButton moreSushiClicked={props.moreSushiClicked} />
      </div>
    </Fragment>
  )
}

export default SushiContainer