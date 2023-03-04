import path from "path";
import Link from "next/link";
import fs from "fs";
function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => {
        const { id, title: name } = product;
        return (
          <li key={id}>
            <Link href={`/${id}`}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

// The function gets executed first before the component !

export async function getStaticProps() {
  //  Code will never be visible on client side !

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },

    // it willl regenerate for every 60 sec
    revalidate: 60,
  };
}

export default HomePage;
