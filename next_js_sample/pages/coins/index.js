import React from "react";
import coinStyle from "@/styles/Coins.module.css";
import Link from "next/link";
const Products = ({ data }) => {
  const coins_ = data.coins.slice(0, 20);
  return (
    <div>
      <h2>List of Coins</h2>

      <Link className={coinStyle.link} href="/coins">
        {coins_.map((coin) => {
          const { id, name, price, rank, icon } = coin;
          return (
            <div key={id} className={coinStyle.container}>
              <img className={coinStyle.img_} src={icon} alt={name} />
              <h2>Name : {name}</h2>
              <h4>Price : {price}</h4>
              <h4> Ranks : {rank}</h4>
            </div>
          );
        })}
      </Link>
    </div>
  );
};

export const getServerSideProps = async () => {
  const URL = "https://api.coinstats.app/public/v1/coins?skip=0";

  const response = await fetch(URL);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
export default Products;
