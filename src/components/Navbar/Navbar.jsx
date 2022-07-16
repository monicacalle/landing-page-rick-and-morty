import React from "react";

const Navbar = () => {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "features",
      path: "/",
    },
    {
      name: "Pricing",
      path: "/",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand " href="/#">
          Navbar
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            {links.map((link) => (
              <a className="nav-link " href={link.path}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
