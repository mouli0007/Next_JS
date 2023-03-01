import React, { useState } from "react";
import Link from "next/link";
const MainArticle = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const canSave = Boolean(name) && Boolean(email);
  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" Enter Your Name"
        />
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" Enter Your Email"
        />

        <br />
        <br />
        {console.log(name)}

        {canSave && (
          <Link className="link_" href="/article/[id]" as={`/article/${name}`}>
            Re-Direct to your page
          </Link>
        )}
      </div>
    </>
  );
};

export default MainArticle;
