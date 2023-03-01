import React from "react";
import { useRouter } from "next/router";
const SinglePortFolio = () => {
  const router = useRouter();
  const { port_id } = router.query;

  console.log(port_id);
  console.log(router.pathname);
  return (
    <div>
      <h1>SinglePortFolio</h1>
      <h3>{port_id}</h3>
    </div>
  );
};

export default SinglePortFolio;
