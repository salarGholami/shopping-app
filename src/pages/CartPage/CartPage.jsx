import { useCart } from "../../Providers/CartPeovider";
import Layout from "../../layout/Layout";
import style from "./CartPage.module.css";

const CartPage = () => {
  const { cart } = useCart();

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
                  <div className={style.cartItem}>
                    <div className={style.itemImage}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.price * item.quantity}</div>
                    <div>
                      <button>add</button>
                      <button>{item.quantity}</button>
                      <button>remove</button>
                    </div>
                  </div>
                );
              })}
            </section>
            <section className={style.cartSummery}>cart summery</section>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default CartPage;
