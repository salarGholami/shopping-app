import { useCart, useCartActions } from "../../Providers/CartPeovider";
import Layout from "../../layout/Layout";
import style from "./CartPage.module.css";

const CartPage = () => {
  const { cart, total } = useCart();

  const dispatch = useCartActions();

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE-_PRODUCT", payload: cartItem });
  };

  if (!cart.length)
    return (
      <Layout>
        <main>
          <h2>cart is empty!</h2>
        </main>
      </Layout>
    );

  return (
    <div>
      <Layout>
        <main className="container">
          <section className={style.cartCenter}>
            <section className={style.cartItemList}>
              {cart.map((item) => {
                return (
                  <div className={style.cartItem} key={item.id}>
                    <div className={style.itemImage}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.price * item.quantity}</div>
                    <div>
                      <button onClick={() => incHandler(item)}>add</button>
                      <button>{item.quantity}</button>
                      <button onClick={() => decHandler(item)}>remove</button>
                    </div>
                  </div>
                );
              })}
            </section>
            <section className={style.cartSummery}>
              <h2>cart Summery</h2>
              <div>{total}$</div>
            </section>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default CartPage;
