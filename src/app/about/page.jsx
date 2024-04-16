import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div>About Page</div>
    <Link href="/">Go to Home Page</Link><br/>
    <Link href="about/aboutStudents">Go to About Student</Link><br/>
    <Link href="about/aboutCollege">Go to About College</Link>
    </>
  )
}

export default page