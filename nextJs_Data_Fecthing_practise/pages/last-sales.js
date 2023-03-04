import React, { useEffect, useState } from "react";
import useSWR from "swr";
const LastSales = ({ data }) => {
  //
  const [state, setState] = useState(data);
  //   const [loading, setLoading] = useState(false);

  //
  const fetch_ = async () => {
    const response = await fetch("URL");
    const data = await response.json();
    return data.products;
  };

  const { data, error } = useSWR("api/fetch", fetch_);
  //

  if (!data) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to Load</p>;
  }

  useEffect(() => {}, []);

  return (
    <div>
      {state.map((data) => {
        return <li key={data.id}>{data.username}</li>;
      })}
    </div>
  );
};

export default LastSales;

export const getStaticProps = async () => {
  try {
    const response = await fetch("URL");
    const data = await response.json();
    return {
      props: {
        data: data.products,
      },
      revalidate: 10,
    };
  } catch (err) {
    console.log(err);
  }
};
