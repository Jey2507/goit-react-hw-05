import { NavLink } from "react-router-dom";
import { Suspense } from "react";

import css from "../Layout/Layout.module.css"
import clsx from "clsx";
import Loader from "../Loader/Loader";

const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function Layout({ children }) {
  return (
    <div>
        <nav className={css.navbar}>
            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            <NavLink to="/movies" className={getNavLinkClass}>Movies</NavLink>
        </nav>
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
    </div>
  );
}
