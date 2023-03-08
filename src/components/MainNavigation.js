/* eslint-disable no-unused-expressions */
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // style={({ isActive }) => ({
              //   textAlign: isActive ? "center" : "left",
              // })} // isActive też można zastosować do styli inline
              end // true lub false - dodaje się to, jeśli chce, żeby dokładnie ta ścieżka była active, a nie np. /products, bo przecież "/products", też w sobie zawiera "/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              } // isActive ma tylko NavLink i do className przekazuje się funkcje, która renderuje odpowiednia klase
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
