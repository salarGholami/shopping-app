import Layout from "../layout/Layout";
import * as data from "../data";
import { useCart, useCartActions } from "../Providers/CartPeovider";
import { checkInCart } from "../utils/chechInCart";

const HomePage = () => {
  const { cart } = useCart();
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
                    {checkInCart(cart, product) ? "In cart" : "add to cart"}
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
