import React from "react";
import ProductCard from "../../components/ProductCard";
import styles from "./IndexPage.module.scss";

export default function IndexPage() {
  const prods = [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      image: "https://picsum.photos/200",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, nec aliquet",
    },
    {
      id: 2,
      title: "Product 1",
      price: 10,
      image: "https://picsum.photos/200",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, nec aliquet",
    },
    {
      id: 3,
      title: "Product 1",
      price: 10,
      image: "https://picsum.photos/200",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, nec aliquet",
    },
  ];

  return (
    <div>
      <h1>Index Page</h1>

      <div className={styles.container}>
        <div className={styles.product_grid}>
          {prods.map((prod) => (
            <ProductCard
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
              price={prod.price}
              image={prod.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
