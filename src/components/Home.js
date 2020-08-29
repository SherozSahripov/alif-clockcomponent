import React, { Component } from 'react';

class Home extends Component {
    state = {
        date: new Date()
    }

    callMe(){
        setInterval(()=> {
            this.setState({date: new Date()});  
        }, 1000)
    }
    render(){
        return(
            <div> 
                <h2>Now Time</h2> 
                <h1> it is {this.state.date.toLocaleTimeString()}</h1>
                {this.callMe()}          
            </div>
        )
    }
}

export default Home;