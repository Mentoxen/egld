import React from 'react';
import {pattern, egld, tst} from "../../assets/images";

const About = () => {
  return (
    <section className="sectionEgld sectionIntro" style={{backgroundImage: `url(${tst})`}}>
      <div className="container relative">
        <img src={pattern} alt="EGLD Icon" className="sectionEgldPattern" />
        <div className="row">
          <div className="col dFlexMd alignItemsCenter mb5 mb10md">
            <img src={egld} alt="EGLD Icon" className="icon" />
            <h2 className="sectionEgldTitle">Are you prepared to earn up to <br/>
              19.5% on your EGLD holdings?</h2>
          </div>
        </div>
        <div className="row">
          <div className="mlAuto colMd8 textRight">
            <p>
              The tooling around Staking is versatile enough to allow
              participants to create a one-of-its-kind decentralized network.
            </p>
            <p>
              Stakeholders are assigned with an important
              role in providing security to the network.
            </p>
            <p>
              You can now for the first time, become an active
              stakeholder and earn rewards for doing so.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
