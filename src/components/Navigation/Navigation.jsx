import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <header className={style.mainNavigation}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">cart</NavLink>
            </li>
          </ul>
          <div>slm salar</div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
