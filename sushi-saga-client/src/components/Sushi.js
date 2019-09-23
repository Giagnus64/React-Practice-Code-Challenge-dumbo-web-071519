import React, { Component } from 'react'

class Sushi extends Component {
 

  eatASushi = () => {
    if(this.props.sushi.price <= this.props.wallet && !this.props.sushi.isEaten ){
  
      this.props.handleClickSushi(this.props.sushi.price, this.props.sushi.id)
    } else{
      console.log("nope")
    }
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate"
          onClick={this.eatASushi}>
          {
            /* Tell me if this sushi has been eaten! */
            !this.props.sushi.isEaten ?
              <img alt={this.props.sushi.name} src={this.props.sushi.img_url} width="100%" /> : null
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi