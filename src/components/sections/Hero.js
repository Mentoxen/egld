import React from 'react';
import {logo, video} from "../../assets/images";

const Hero = () => {
  return (
    <section className="sectionHero relative">
      <div className="container">
        <div className="groupLogo dFlex alignItemsCenter justifyContentCenter mxAuto textCenter">
          <div>
            <div className="relative">
              <img src={logo} alt="logo" className="mb1" />
              <h2 className="groupLogoTitle mb1">united group</h2>
              <h3 className="groupLogoSubTitle">capital</h3>
            </div>
          </div>
        </div>
        <div className="textCenter">
          <h1 className="heroTitle">You <strong>EARN</strong> as you <strong>STAKE</strong></h1>
          <h2 className="mb2 textDefault">Invest with passion and purpose</h2>
          <a href="#" className="btn btnPrimary">Stake here</a>
        </div>
      </div>
      <video
        src={video}
        autoPlay
        loop
        muted
        className="groupLogoVideo"
      />
    </section>
  );
};

export default Hero;
