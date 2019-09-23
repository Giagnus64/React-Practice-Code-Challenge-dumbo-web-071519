import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

import AddToWallet from './components/AddToWallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    wallet: 100,
    sushies: [],
    currentSushiIndex: 0,
    sushiesEaten: []
  }

  // fetch sushi from the server on mount
  componentDidMount = () =>{
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushies: data
      })
    })
  }

  handleClickSushi = (price, id) => {

    this.setState({
      wallet: this.state.wallet-price,
      sushiesEaten: [...this.state.sushiesEaten, id], 
      sushies: this.makeSushiEaten(id)
    })
  }
  
makeSushiEaten=(id)=>{
    return this.state.sushies.map((sushi)=> {
      if (sushi.id === id){
        return {...sushi, isEaten : true }
      }
      else{
        return {...sushi}
      }
        
    })  
}

addToWallet=(money)=>{
  this.setState({
    wallet: this.state.wallet + parseInt(money)

  })

}

  // write a function to change currentSushiIndex state
  //onClick for moreSushi

  moreSushiClicked = () => {
    this.setState({
      currentSushiIndex: this.state.currentSushiIndex === 96 ? 0 : this.state.currentSushiIndex + 4 
    })
  }

  



  render() {
    console.log(this.state);
    return (
      <div className="app">
        <SushiContainer sushiesEaten={this.state.sushiesEaten} moreSushiClicked={this.moreSushiClicked } handleClickSushi={this.handleClickSushi} sushies={this.state.sushies}  currentSushiIndex={this.state.currentSushiIndex} wallet={this.state.wallet}/>
        <Table wallet={this.state.wallet} sushiesEaten={this.state.sushiesEaten} />
        <AddToWallet addToWallet={this.addToWallet}/>
      </div>
    );
  }
}

export default App;