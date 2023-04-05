import React from 'react';
import './comp.css';
import PropTypes from 'prop-types';
function Header(props){
    // console.log(props);
    return(
        <header>
            <nav>
                <ul>
                    <li><a href="#!">Home</a> </li>
                    <li><a href="#!">About us</a></li>
                    <li><a href="#!">Contact Me</a></li>
                </ul>
            </nav>
            {props.rollno}
            {props.name}
            {/* {props.isplaced.toString()}
            {String(props.isplaced)} */}
            {props.branch[3]}
        </header>
    );
}
function Jau(){
    return (
        <div>ashvdy</div>
    )
}
Header.propTypes={name:PropTypes.string.isRequired};
Header.defaultProps={name:'Madhav'};
export{Header,Jau};
// export default Header;
// export default jau;

// webpack=babel

//we can also use export default by applying it before fucntion name
// like export default function Header(){return (..)}
// export named and export default two types

// to export multiple components from a file we will use named export
