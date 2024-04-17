import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <h1>This About Page NotFound</h1>
      <Link href="/" className="bg-gray-400">
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
