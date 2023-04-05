import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>

    <div>
      Welcome to Product Page
    </div>
    <nav>
        <NavLink to='Shirt'>Shirts</NavLink>
        <NavLink to='Jeans'>Jeans</NavLink>
        <NavLink to='Trouser'>Trouser</NavLink>
    </nav>
    <Outlet/>
    </div>
  )

}
