import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar bg-slate-200 sticky">
      <div className="flex-1">
        <Link to="/" className="normal-case font-bold text-xl">
          Learn <span className="text-orange-400">Hub</span>
        </Link>
      </div>
      <div className="flex-none gap-3">
        <div className="">
          <input type="checkbox" className="toggle" />
        </div>
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar border border-spacing-1 border-gray-500"
          >
            <div className="w-10  rounded-full flex justify-center items-center">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <FaUserAlt className="w-10 h-10" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user?.uid ? (
              <>
                <li>
                  <Link to="">{user?.displayName}</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
