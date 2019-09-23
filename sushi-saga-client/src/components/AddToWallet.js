import React from 'react';

export default class AddToWallet extends React.Component{
    state ={
        money: 0
    }

    handleChange=(e)=>{
        this.setState({
            money: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addToWallet(this.state.money)
        this.setState({
            money: 0
        })
    }

    render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <input type="number" value={this.state.money} onChange={this.handleChange}/>
            <input type="submit" value="fupm"/>
        </form>

    )

}


}