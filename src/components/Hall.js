import React, { Component } from 'react';
class Hall extends Component {
    render(){
         const mystyle = {
      border: "2px",
      solid: "red",
      backgroundColor: "DodgerBlue",
      height: "250px",
      width: "600px",
      borderRadius: "10px",
      color: "blue",
    
    };
    var i = 0;
    function change() {
      var doc = document.getElementById("background");
      var color = ["black", "blue", "brown", "green"];
      doc.style.backgroundColor = color[i];
      i = (i + 1) % color.length;
    }
    setInterval(change, 400);
        return(
           <div >
         <div style = {{height: "200px"}} id = "background" ></div> 
           </div>       
        )
    }
}

export default Hall;


