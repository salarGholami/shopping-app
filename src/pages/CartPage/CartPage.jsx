import { Link } from "react-router-dom";
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
                    <div>{item.offPrice * item.quantity}</div>
                    <div className={style.btnGroup}>
                      <button onClick={() => incHandler(item)}>+</button>
                      <button>{item.quantity}</button>
                      <button onClick={() => decHandler(item)}>-</button>
                    </div>
                  </div>
                );
              })}
            </section>
            <CartSummery total={total} cart={cart} />
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default CartPage;

const CartSummery = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
  return (
    <section className={style.cartSummery}>
      <h2>cart Summery</h2>
      <div className={style.summeryItem}>
        <p>cart total</p>
        <p>{originalTotalPrice} $</p>
      </div>

      <div className={style.summeryItem}>
        <p>cart discount</p>
        <p>{originalTotalPrice - total}$</p>
      </div>

      <div className={style.netSummery}></div>

      <div className={style.summeryItem}>
        <p>net price</p>
        <p>{total}$</p>
      </div>

      <Link to="/signUp?redirect=/checkOut">
        <button
          className="btn chechOutBtn"
          style={{
            width: "100%",
            color: "white",
            backgroundColor: "#0d8c86",
            border:"1px solid #ffffff96",
            padding:"10px"
          }}
        >
          go to checkout
        </button>
      </Link>
    </section>
  );
};
 