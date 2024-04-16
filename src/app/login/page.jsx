'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const Router = useRouter()
  return (
    <>
    <div>Login Page</div>
    <Link href="/">Go to Home Page</Link>
    <br />
    <button onClick={()=>Router.push("/")} className='bg-gray-400'>Go to Home page</button>
    </>

  )
}

export default Login