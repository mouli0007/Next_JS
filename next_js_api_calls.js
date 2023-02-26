import axios from "axios";
import React from "react";

########### IMPORTANT ##############

What is difference between getStaticProps and getServerSideProps?

###
getStaticProps(): A method that tells the Next component to populate props 
and render into a static HTML page at build time 

#####
getServerSideProps(): A method that tells the Next component to populate the props 
and render into a static HTML page at run time.

########### IMPORTANT ##############


const CoinList = ({ coinData }) => {
  const coins_data = coinData.coins;

  const coins_ = coins_data.slice(0, 6).map((coin) => {
    const { id, price, name, icon } = coin;
    return (
      <div key={id}>
        <h2>{name}</h2>
        <img src={icon} alt="coin" />
        <h2>{price}</h2>
      </div>
    );
  });
  console.log(coins_);
  return (
    <>
      <h1>Coins List</h1>
      {coins_}
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  try {
    const data = await axios.get(
      "https://api.coinstats.app/public/v1/coins?skip=0"
    );
    return {
      props: {
        coinData: data.data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
