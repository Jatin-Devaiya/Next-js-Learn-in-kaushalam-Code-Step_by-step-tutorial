import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">Home Main</Link>
        <br />
        <Link href="/about/aboutStudents">About Student</Link>
        <br />
        <Link href="/about/aboutCollege">About College</Link>
      </div><br /><br /><br />
      {children}
    </div>
  );
};

export default layout;
