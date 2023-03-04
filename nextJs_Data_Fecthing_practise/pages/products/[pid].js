import { Fragment } from "react";
import path from "path";
import fs from "fs";
const ProductDetailsPage = ({ loadedProduct }) => {
  if (!loadedProduct) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <Fragment>
      <h1>Products Details</h1>

      <h2>Title : {loadedProduct.title}</h2>
      <p>Description : {loadedProduct.description}</p>
    </Fragment>
  );
};

const get_data = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return data.products;
};

export const getStaticProps = async (context) => {
  const { params } = context;

  // Making the Id to be pre rendered fpr pre rendering the page
  const productId = params.pid;

  const product = get_data();

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

// Get Static Paths

export const getStaticPaths = async (context) => {
  // Fetching all the data and pre rendering the pages with the ids

  const data = get_data();
  const ids = data.map((product) => product.id);

  const params = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: params,

    fallback: true,
  };
};

export default ProductDetailsPage;
