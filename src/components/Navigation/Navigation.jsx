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
            <div>salar shopping</div>
            <li>
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? style.activeClass : ""
                }
              >
                home
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className={style.cartLink}>
              <NavLink
                to="/cart"
                className={(navData) =>
                  navData.isActive ? style.activeClass : ""
                }
              >
                cart
                <span>{cart.length}</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={(navData) =>
                  navData.isActive ? style.activeClass : ""
                }
              >
                signup / login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
