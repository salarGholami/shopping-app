import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import { useCart } from "../../Providers/CartPeovider";
import { useAuth } from "../../Providers/AuthProvider";

const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
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
                to={userData ? "/Profle" : "/login"}
                className={(navData) =>
                  navData.isActive ? style.activeClass : ""
                }
              >
                {userData ? "profile" : " signup / login"}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
