// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="navbar  px-4 ">
//       <form className="form-inline w-79 d-flex flex-row ">
//         <input
//           className="form-control mr-sm-2 w-50"
//           type="search"
//           placeholder="Search..."
//           aria-label="Search"
//         />
//         <div>Profile</div>
//       </form>
//       <div className="d-flex align-items-center">
//         <i className="bi bi-bell me-3"></i>
//         <i className="bi bi-person-circle"></i>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg   fixed-top w-100" style={{ marginLeft: "300px"}}>
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