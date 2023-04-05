import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Header} from './Components/Header';
// import Footer from './Components/Footer';
// import Sidebar from './Components/Sidebar';
// import {Jau} from './Components/Header';
// import State from './Components/State';
// import Class1 from './Components/Class1';
// import Destruct from './Components/Destruct';
// import Event from './Components/Event'
// import EventHandlingBinding from './Components/EventHandlingBinding';
import { BrowserRouter as Router
 } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// let a='asjn';
// let arr=['first','second','third',88]
root.render(
  
  <React.StrictMode>
    {/* <Header  rollno={12} branch={arr} isplaced={true}/>
    <Class1/>
    <State/>
    <Destruct name="Madhav" age={22}/>
    <Event name="Madhav"/> */}
    {/* <Header   name="Mv"  rollno={12} branch={arr} isplaced={true}/> */}
    {/* <Header name="sjadn" rollno={48} branch='cse' isplaced={true}/> */}
    {/* <EventHandlingBinding/> */}
    <Router>
    <App/>
    </Router>
  </React.StrictMode>
);
// const sidebar=ReactDOM.createRoot(document.getElementById('sidebar'));
// sidebar.render(
//   <Sidebar name="askmd" rollno={33} branch='cse'/>
// )
// const footer=ReactDOM.createRoot(document.getElementById('footer'));
// footer.render(
//   <Footer/>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//<header name:"Akash"/>
//align header footer sidebar

//Arrow function