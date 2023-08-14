import Layout from "../layout/Layout";
import * as data from "../data";
import { useCartActions } from "../Providers/CartPeovider";

const HomePage = () => {
  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div>
      <Layout />
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
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
