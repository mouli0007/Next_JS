import React from "react";
import { useRouter } from "next/router";
const SingleBlog = () => {
  const router = useRouter();
  console.log(router.query);
  const { blog_id } = router.query;
  return (
    <div>
      <h1>Single Blog</h1>
      <h3>{blog_id[3]}</h3>
    </div>
  );
};

export default SingleBlog;
