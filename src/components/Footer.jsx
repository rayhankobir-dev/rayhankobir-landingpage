// eslint-disable-next-line react/prop-types
function Footer({ className }) {
  return (
    <>
      <section className={`appie-footer-area ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget">
                <div className="logo">
                  <a href="#">
                    <img src={"./images/logo.png"} alt="" />
                  </a>
                </div>
                <p>This is the landing page for task.</p>
                <a href="#">
                  Read More <i className="fal fa-arrow-right" />
                </a>
                <div className="social mt-30">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-aedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">Company</h4>
                <ul>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/Service">Service</a>
                  </li>
                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                  <li>
                    <a href="/news">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">Support</h4>
                <ul>
                  <li>
                    <a href="/about-us">Community</a>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Faqs</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">Get In Touch</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fal fa-envelope" /> rayhankobir793@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-phone" /> +8801704355097
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-map-marker-alt" /> Abdul Aziz Road
                      Ka/48 Vatara, Dhaka-1212
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                <div className="apps-download-btn">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-apple" /> Download for iOS
                      </a>
                    </li>
                    <li>
                      <a className="item-2" href="#">
                        <i className="fab fa-google-play" /> Download for
                        Android
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text">
                  <p>Copyright © 2021 Rayhan Kobir. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
