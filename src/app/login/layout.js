"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body>
        { !["/login/loginTeacher"].includes(pathName) ? (
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
        ) : <Link href="/login">Go to Main Login Page</Link>}
        <br />
        <br />
        {children}
      </body>
    </html>
  );
}
