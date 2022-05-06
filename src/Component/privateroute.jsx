import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function Privateroute({children}) {
    const AuthCookie = Cookies.get('login')
  return AuthCookie ? children : <Navigate to='/login' />
}
