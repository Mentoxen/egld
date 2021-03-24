import React, {useState} from 'react';
import {logo} from '../assets/images'
import NavbarToggle from "./navbar/NavbarToggle";
import Social from "./Social";
import {Section, useScrollSection} from "react-scroll-section";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');
  const contactSection = useScrollSection('contact');

  return (
    <header className="px5md py3md navbar">
      <Section id="home">
        <div className="container">
          <div className="row alignItemsCenter">
            <div className="col3 hiddenMdUp">
              <NavbarToggle
                onClick={() => setOpenMenu(!openMenu)}
                menuIsOpen={openMenu}
              />
            </div>
            <div className="col6 colMd4 dFlex justifyContentCenter justifyContentMdStart">
              <div className="navbarBrand" >
                <img src={logo} alt="logo"/>
              </div>
            </div>
            <div className={`navbarCollapse col12 colMd8 textCenter py3 py0md ${!openMenu ? 'hiddenOnMobile' : ''}`}>
              <ul className="navbarItems listUnstyled justifyContentCenter justifyContentMdEnd">
                <li className="navbarItem">
                  <span
                    className="navbarLink"
                    onClick={homeSection.onClick}
                    selected={homeSection.selected}
                  >
                    Home
                  </span>
                </li>
                <li className="navbarItem">
                  <span
                    className="navbarLink"
                    onClick={aboutSection.onClick}
                    selected={aboutSection.selected}
                  >
                    About
                  </span>
                </li>
                <li className="navbarItem">
                  <span
                    className="navbarLink"
                    onClick={contactSection.onClick}
                    selected={contactSection.selected}
                    >
                    Contact
                  </span>
                </li>
              </ul>
              <div className="hiddenMdUp pt3">
                <Social size="w3" className="mb0"/>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </header>
  );
};

export default Header;
