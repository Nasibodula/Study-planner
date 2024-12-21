import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <form className="form-inline w-100">
        <input
          className="form-control mr-sm-2 w-50"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <div className="d-flex align-items-center">
        <i className="bi bi-bell me-3"></i>
        <i className="bi bi-person-circle"></i>
      </div>
    </nav>
  );
};

export default Navbar;