import { Fragment, useState } from "react";

// eslint-disable-next-line react/prop-types
function Drawer({ drawer, action }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("home");
  const handler = (e, value) => {
    e.preventDefault();
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (getItems > 0) {
      setSize(`${43 * getItems}px`);
      setItem(value);
    }
  };
  return (
    <Fragment>
      <div
        onClick={(e) => action(e)}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <div className="canvas_close">
                  <a href="#" onClick={(e) => action(e)}>
                    <i className="fa fa-times"></i>
                  </a>
                </div>
                <div className="offcanvas-brand text-center mb-40">
                  <img src={"./images/logo.png"} alt="" />
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li
                      onClick={(e) => handler(e, "home")}
                      id="home"
                      className="menu-item-has-children active"
                    >
                      <a href="#">Home</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "service")}
                      id="service"
                      className="menu-item-has-children active"
                    >
                      <a href="/service">Services</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "projects")}
                      id="projects"
                      className="menu-item-has-children active"
                    >
                      <a href="/coprojectsntact">Projects</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "blogs")}
                      id="blogs"
                      className="menu-item-has-children active"
                    >
                      <a href="/blogs">Blogs</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contact")}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <a href="/contact">Contact</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "others")}
                      id="others"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Others</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "others" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <a href="/about-us">About Us</a>
                        </li>
                        <li>
                          <a href="/policy">Policy</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="$">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fal fa-envelope"></i>{" "}
                        rayhankobir793@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-phone"></i> +8801704355097
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-map-marker-alt"></i> Abdul Aziz
                        Road Ka/48 Vatara, Dhaka-1212
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Drawer;
