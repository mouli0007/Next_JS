import React from "react";
import Link from "next/link";
const ClientsPage = () => {
  const person = [
    { id: "mouli", name: "Mouli VJ" },
    { id: "karthik", name: "Karthik" },
    { id: "loki", name: "Logeshwaran" },
  ];
  return (
    <div>
      <h1> The Clients Page</h1>

      <ul>
        {person.map((per) => {
          return (
            <li key={per.id}>
              <Link className="link_" href={`/client/${per.id}`}>
                {per.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link className="link_" href="/">
        Home
      </Link>
    </div>
  );
};

export default ClientsPage;
