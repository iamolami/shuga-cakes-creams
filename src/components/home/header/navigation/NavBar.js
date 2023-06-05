import React from "react";
import { navLinksLeft, navLinksRight } from "../../../../data/navigation";

const NavBar = () => {
  return (
    <nav className="header__nav">
      <div className="header__nav-menu">
        <div className="container">
          <div className="mkdf-left" style={{ width: "471px" }}>
            <div className="header__nav-left-widget">
              <div className="header__nav-left-widget-inner">
                <div className="header__nav-left-widget-inner-wrap">
                  <div className="header__nav-left-widget-search-holder">
                    <a href="/">
                      <span className="header__nav-left-widget-box">
                        <i className="fa fa-search"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__nav-inner">
              <nav className="header__nav-inner-nav">
                <ul>
                  {navLinksLeft.map((item) => (
                    <li>
                      <a href={item.link}>
                        <span className="header__nav-inner-outer">
                          <span className="header__nav-inner-inner">
                            {item.text}
                          </span>
                        </span>
                      </a>
                      <div className="header__dropdown">
                        <div className="header__dropdown-inner">
                          <ul>
                            {item.dropdown?.map((dropdownItem) => (
                              <li>
                                <a href={dropdownItem.link}>
                                  <span className="header__dropdown-outer">
                                    <span className="header__dropdown-text">
                                      {dropdownItem.name}
                                    </span>
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="header__nav-center">
            <div className="header__nav-center-inner">
              <div className="header__nav-center-wrapper-logo">
                <a href="/">
                  <img
                    src="https://panaderia.qodeinteractive.com/wp-content/uploads/2019/05/logo-dark.png"
                    alt="logo"
                  />
                  <img
                    src="	https://panaderia.qodeinteractive.com/wp-content/uploads/2019/03/logo-light.png"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mkdf-right" style={{ width: "471px" }}>
            <div className="header__nav-inner">
            <nav className="header__nav-inner-nav">
                <ul>
                  {navLinksRight.map((item) => (
                    <li>
                      <a href={item.link}>
                        <span className="header__nav-inner-outer">
                          <span className="header__nav-inner-inner">
                            {item.text}
                          </span>
                        </span>
                      </a>
                      <div className="header__dropdown">
                        <div className="header__dropdown-inner">
                          <ul>
                            {item.dropdown?.map((dropdownItem) => (
                              <li>
                                <a href={dropdownItem.link}>
                                  <span className="header__dropdown-outer">
                                    <span className="header__dropdown-text">
                                      {dropdownItem.name}
                                    </span>
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="header__nav-left-widget" style={{ float: "right" }}>
              <div className="header__nav-left-widget-inner">
                <div className="header__nav-left-widget-inner-wrap">
                  <div className="header__nav-left-widget-search-holder">
                    <a href="/">
                      <span className="header__nav-left-widget-box">
                        <i className="fa fa-shopping-basket"></i>
                      </span>
                      <span className="header__nav-left-widget-count">0</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
