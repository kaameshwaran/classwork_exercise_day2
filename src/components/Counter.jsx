import React, { Component } from 'react'
import { Button, ButtonGroup } from '@mui/material';

class Counter extends Component {
    state = { 
        count : 0
     };

     increaseCount=()=>{
        this.setState({count:this.state.count+1})
     }
     decreaseCount=()=>{
        this.setState({count:this.state.count-1})
     }
     

     styles = {
        fontSize : 20,
        fontWeight : 'bold'
     }
     
    render() { 
        return (
            <div>
            <span style={this.styles}>{this.zeroCount()}</span>
            <br />
            <ButtonGroup>
            <Button id='button' variant='contained' onClick={this.decreaseCount} disabled={this.state.count === 0}>-</Button>
            <Button variant='contained' onClick={this.increaseCount}  disabled={this.state.count === 10}>+</Button>
            </ButtonGroup>
            </div>
        );
    }
    zeroCount() {
        const {count} = this.state;
        return count === 0  ? "zero" : count ;
    }
}


export default Counter;

