import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import { useCart } from "../../Providers/CartPeovider";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <div>
      <header className={style.mainNavigation}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li className={style.cartLink}>
              <NavLink to="/cart">
                cart
                <span>{cart.length}</span>
              </NavLink>
            </li>
          </ul>
          <div>slm salar</div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
