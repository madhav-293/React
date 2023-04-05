import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate=useNavigate();
const navigatetoabout=(url)=>{
  navigate(url)
}
let p='Madhav'
const a=()=>{
  if(p=='Madhav'){
    navigate('/');
  }
  else{
    navigate('/About');
  }
}
const f=()=>{
  navigate(-1)
}
  return (
    <div>
      Welcome to contact page
      <button onClick={()=>navigatetoabout('/')}>Home</button>
      <button onClick={()=>navigatetoabout('/About')}>About</button>
      <button onClick={()=>navigatetoabout('/Services')}>Services</button>
      <button onClick={()=>a()} >Click here</button>
      <button onClick={()=>f()} >Go back</button>
    </div>
  )
}
