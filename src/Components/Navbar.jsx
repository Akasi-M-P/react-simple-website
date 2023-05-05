const Navbar = () => {
  return (
    <>
      <header>
        <div className="container row">
          <a className="logo">
            <img src="images/logo.svg" alt="" />
          </a>
          <nav className="nav">
            <ul className="nav__list primary-list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item push-right">
                <a href="#" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="nav__list secondary-list">
              <li className="nav__item ">
                <a href="#" className="nav__link">
                  Sign In
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link nav__link--button">
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
