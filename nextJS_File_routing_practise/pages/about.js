import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <h1>About_Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum
        nemo molestiae iusto facilis dolore enim saepe sapiente voluptatem
        quaerat!
      </p>
      <Link href="/" as="/">
        Home
      </Link>
    </div>
  );
};

export default about;
