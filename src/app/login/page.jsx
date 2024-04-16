'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const Router = useRouter()
  const navigate = (page) =>{
    Router.push('/login/'+ page)
  }
  return (
    <>
    <div>Login Page</div>
    <Link href="/">Go to Home Page</Link>
    <br /><br />
    <button onClick={()=>navigate("loginStudent")} className='bg-gray-400'>Go to Student Login Page</button>
    <br /><br />
    <button onClick={()=>navigate("loginTeacher")} className='bg-gray-400'>Go to Teacher Login Page</button>
    </>

  )
}

export default Login