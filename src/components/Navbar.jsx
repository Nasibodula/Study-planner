import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg   fixed-top w-100" style={{ marginLeft: "21%", background:"#2b404a"}}>
      <form className="form-inline w-79 d-flex flex-row ">
        <div className="d-flex w-75">
          <input
            className="form-control mr-sm-2 w-75"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
        <div className="d-flex align-items-center ms-3">
          <div className="me-3">Profile</div>
          <i className="bi bi-bell me-3"></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;