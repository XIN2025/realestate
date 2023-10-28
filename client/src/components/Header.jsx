import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-200  ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-bold">AUTH APP</h1>
        </Link>
        <ul className="flex gap-4 p-4">
          <NavLink to="/home">
            <li> Home</li>
          </NavLink>
          <NavLink to="/about">
            <li> About</li>
          </NavLink>
          <NavLink to="/sign-in">
            <li> Signin</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
