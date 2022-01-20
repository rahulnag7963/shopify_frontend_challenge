import React from 'react';
import heart from'../Love_or_Heart_transparent.png';
import {ToggleButton} from 'react-bootstrap';
class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        likes: 0,
        update: false
        };
    }
    
    HL = () => {
        if(!this.state.updated){
            this.setState((prevState, props)=> {
            
            return{
                likes: prevState.likes + 1,
                updated: true
            };    
            });
        }
        else {
        this.setState((prevState,props)=>{
            return{
                likes: prevState.likes - 1,
                updated: false
            };
        });
        }
    }

  render(){
  return(
    <div>
        <ToggleButton variant = 'danger' onClick={this.HL}>
            <img src={heart} 
                 height ='20'
                 alt= 'Sky Pics'/>
            <p class='text-dark'> Likes: {this.state.likes}</p>
        </ToggleButton>
    </div>
  )}};

export default Like;
