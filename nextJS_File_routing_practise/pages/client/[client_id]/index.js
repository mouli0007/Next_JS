import React from "react";
import { useRouter } from "next/router";
const ClientsProjects = () => {
  const router = useRouter();
  const { client_id } = router.query;

  function loadProject() {
    // Load Data
      
      router.push('/client/mouli/project_a')
  }
  return (
    <div>
      <h1>The Given Clients Projects </h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  );
};

export default ClientsProjects;
