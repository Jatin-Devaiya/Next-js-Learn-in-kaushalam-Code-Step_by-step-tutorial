import Link from "next/link";
import React from "react";

const StudentList = () => {
  const studentDetails = ["jatin", "hevin", "ram", "kavi"];
  return (
    <>
      <div>StudentList</div>
      <ul>
        {studentDetails.map((studentName) => {
          return (
            <>
              <li>
                <Link href={`/studentList/${studentName}`}>{studentName}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default StudentList;
