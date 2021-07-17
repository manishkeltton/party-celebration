import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-gradient"
        style={{ backgroundColor: "#fd7e14" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Birthday
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Indoor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Outdoor
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Anniversary
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Indoor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Outdoor
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Proposal
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Indoor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Outdoor
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Dating
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Indoor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Outdoor
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Surprises
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Indoor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Outdoor
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
