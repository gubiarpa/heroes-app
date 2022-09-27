import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

    const navLinkClassName = (isActive = false) =>
        `nav-item nav-link ${isActive ? "active text-success" : ""}`;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => navLinkClassName(isActive)}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => navLinkClassName(isActive)}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        Billy Arredondo
                    </span>
                    <button
                        className="nav-item nav-link btn btn-outline-primary"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}