import Layout from "../layout/Layout";
import * as data from "../data";

const HomePage = () => {
  const addProductHandler = (product) => {
    console.log(product);
  };

  return (
    <div>
      <Layout />
      <main className="container">
        <section className="productList">
          {data.products.map((product, index) => {
            return (
              <section className="product" key={index}>
                <div className="productImage">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="productDes">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <button
                    onClick={() => addProductHandler(product)}
                    className="btn primary"
                  >
                    add to cart
                  </button>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
