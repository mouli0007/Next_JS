import React from "react";
import { useRouter } from "next/router";
const SingleNinjaPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <br />
      <h2>Ninja page = {id} </h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci mollitia
      voluptates velit, exercitationem nulla ullam praesentium error dicta quas
      sint optio distinctio fuga voluptate nostrum ad dolor, nihil libero unde.
      <br />
      <br />
    </div>
  );
};

export default SingleNinjaPage;

export const getStaticProps = async () => {
  const response = await fetch("URL");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch("URL");
  const data = await response.json();

  const ids = data.map((d) => d.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    props: {
      paths,
    },
  };
};
