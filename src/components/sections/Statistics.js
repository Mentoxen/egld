import React from 'react';
import {graph, shadowFilled} from "../../assets/images";
import {Section} from "react-scroll-section";

const Statistics = () => {
  return (
    <Section id="about">
      <section className="sectionEgld sectionStatistics" style={{backgroundImage: `url(${shadowFilled})`}}>
        <div className="container">
          <div className="row">
            <div className="col12 colMd6 colLg4 mb3 mb0md">
              <p>
                Improvements come slowly
                in the beginning, but gains
                increase rapidly over time.
              </p>
              <h2 className="sectionTitle textMd mb2">You Stake. You Earn.</h2>
              <img src={graph} alt="" className="mw150 mxAuto dBlock" />
            </div>
            <div className="col12 colMd6 offsetLg1 pl5md">
              <p>For those of you new into crypto, what staking
                really involves is holding funds in a cryptocurrency
                wallet to support the security and operations of a
                blockchain network.</p>
              <p>Simply put, staking is the act of locking
                cryptocurrencies to receive rewards.</p>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Statistics;
