import React from "react";

const Navbar = () => { 
  return (
    <nav className="navbar navbar-expand-lg   fixed-top " style={{height:"3.5rem" , background:"#fff"}}>
      <div className="profile_details">
          <img src="/images/profile.jpg" alt="Profile" />
          <div className="profile_content">
            <div className="name">Nasibo Dula</div>
            <div className="designation">Admin</div>
          </div>
        </div>
        <i className="bx bx-log-out" id="log_out"></i>
    </nav>
  );
};

export default Navbar;
