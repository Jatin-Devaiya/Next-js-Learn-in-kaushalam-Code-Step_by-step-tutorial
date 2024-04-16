import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <ul>
          <li>
            <Link href="/">Login Main</Link>
          </li>
          <li>
            <Link href="/login/loginStudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginTeacher">Teacher Login</Link>
          </li>
        </ul>
        <br/><br/>
        {children}
      </body>
    </html>
  );
}
