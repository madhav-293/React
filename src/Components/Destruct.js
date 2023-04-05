// import React from 'react'

// function Destruct({name,age}) {
//     // const{name,age}=props;
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{age}</h2>
//     </div>
//   )
// }

// export default Destruct

import React, { Component } from 'react'

export default class Destruct extends Component {
  render() {
    const a=this.props.name;
    const b=this.props.age;
    return (
      <div>
        <h1>{a}</h1>
        <h2>{b}</h2>
      </div>
    )
  }
}
