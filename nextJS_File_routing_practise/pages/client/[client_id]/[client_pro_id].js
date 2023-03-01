import React from "react";
import { useRouter } from "next/router";
const SelectedClientProject = () => {
  const router = useRouter();
  const { client_pro_id } = router.query;
  return (
    <div>
      <h1>Welcome {client_pro_id}</h1>
      <h2>Single Client Project Page for a selected client</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea culpa
        mollitia quidem blanditiis neque ipsa. Veritatis culpa est odio unde!
      </p>
    </div>
  );
};

export default SelectedClientProject;
