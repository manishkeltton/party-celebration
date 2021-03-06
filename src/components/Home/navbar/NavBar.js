import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-gradient"
        style={{ backgroundColor: "#fd7e14" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">
            <img
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Logo
          </Link>
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
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-expanded="false"
                >
                  Birthday
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/birthdayindoor">
                      Indoor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/birthdayoutdoor">
                      Outdoor
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-expanded="false"
                >
                  Anniversary
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/anniversaryindoor">
                      Indoor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/anniversaryoutdoor">
                      Outdoor
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-expanded="false"
                >
                  Proposal
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/proposalindoor">
                      Indoor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/proposaloutdoor">
                      Outdoor
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-expanded="false"
                >
                  Dating
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/datingindoor">
                      Indoor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/datingoutdoor">
                      Outdoor
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {" "}
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="#"
                  role="button"
                  aria-expanded="false"
                >
                  Surprises
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/surprisesindoor">
                      Indoor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/surprisesoutdoor">
                      Outdoor
                    </Link>
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
    </>
  );
};

export default NavBar;
