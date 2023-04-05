import React from 'react'

function Event(props) {
    function fun(){
        alert(props.name);
    }
  return (
    <div>
      <input type="button" value="Butt" onClick={fun} />
    </div>
  )
}

export default Event

//arrow funtion onClick={()=>fun(props.name)} if we are using argument function 
//class component mein function keyword nhi use krte vrna error ajaega
//props is in component so in class it will get extends by components;