import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'bg-primary text-white hover:bg-primary py-2 px-4 rounded-lg max-sm:text-base' : 'py-2 px-4 max-sm:text-base hover:text-primary'
          }
          to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'bg-primary text-white hover:bg-primary py-2 px-4 rounded-lg max-sm:text-base' : 'py-2 px-4 max-sm:text-base hover:text-primary'
          }
          to="/about">
          About
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li className="hover:text-primary">
            <Link to="/my-bookings">My Bookings</Link>
          </li>
          <li className="hover:text-primary">
            <button onClick={handleLogOut}>Log out</button>
          </li>
        </>
      ) : (
        <li className="hover:text-primary">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-neutral-700 text-lg font-semibold z-20">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          <img src={logo} className="h-[85px]" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-4 menu-horizontal px-1 text-neutral-700 text-lg font-semibold ">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-primary px-7 h-14 text-lg">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
