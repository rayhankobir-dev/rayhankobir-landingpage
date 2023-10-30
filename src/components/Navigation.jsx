function Navigation() {
  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/service">Services</a>
        </li>
        <li>
          <a href="/project">Projects</a>
        </li>
        <li>
          <a href="/Blogs">Blogs</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="#">
            Others <i className="fal fa-angle-down" />
          </a>
          <ul className="sub-menu">
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/policy">Policy</a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
