'use client'

import React from 'react'

const StudentDetailspage = ({params}) => {
  return (
    <div>Student Name : {params.student}</div>
  )
}

export default StudentDetailspage;