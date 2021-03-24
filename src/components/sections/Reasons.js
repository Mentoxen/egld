import React from 'react';
import BlockText from "../BlockText";
import {fingerPrint, pig, shield, lowerShadow, line, line2} from "../../assets/images";

const Reasons = () => {
  return (
    <section className="sectionEgld sectionReasons textCenter" style={{backgroundImage: `url(${lowerShadow})`}}>
      <div className="container">
        <div className="row alignItemsEnd sectionReasonsLineWrapper">
          <div className="col12 colMd4 mb5 mb0md">
            <img src={line} alt="finger print icon" className="sectionReasonsLine sectionReasonsLineLeft hiddenOnMobile"/>
            <img src={pig} alt="finger print icon" className="w100 mb15" />
            <h2 className="sectionTitle mb15 mb0md">passive <br className="hiddenOnMobile"/> income</h2>
            <BlockText>
              <p>
                Building wealth while you
                sleep without the usual
                risk of devaluation that
                comes with fiat money.
              </p>
            </BlockText>
          </div>
          <div className="col12 colMd4 mb5 mb0md">
            <div className="dFlex dBlockMd flexColumn alignItemsCenter">
              <h2 className="sectionTitle mb15 order2">non <br className="hiddenOnMobile"/> custodial</h2>
              <img src={fingerPrint} alt="finger print icon" className="w8 mb15 mb0md" />
            </div>
            <BlockText>
              <p>
                The staking provider do not
                have any control or influence
                over the funds you delegate
                towards them.
              </p>
              <p>
                We just operate the hardware
                and software infrastructure on
                your behalf and charge you a
                service fee for doing so.
              </p>
            </BlockText>
          </div>
          <div className="col12 colMd4">
            <img src={shield} alt="finger print icon" className="w9 mb15" />
            <img src={line2} alt="finger print icon" className="sectionReasonsLine sectionReasonsLineRight hiddenOnMobile" />
            <h2 className="sectionTitle mb15 mb0md">security</h2>
            <BlockText>
              <p>Our top priority and main focus.</p>
              <p>
                We use only accredited hosting
                providers carefully selected to
                meet our needs in order
                to have 100% availability.
              </p>
            </BlockText>
          </div>
        </div>
        <div className="row alignItemsCenter textSm textSecondary">
          <BlockText hiddenOnMobile>
            <p>
              Building wealth while you
              sleep without the usual
              risk of devaluation that
              comes with fiat money.
            </p>
          </BlockText>
          <BlockText hiddenOnMobile>
            <p>
              The staking provider do not
              have any control or influence
              over the funds you delegate
              towards them.
            </p>
            <p>
              We just operate the hardware
              and software infrastructure on
              your behalf and charge you a
              service fee for doing so.
            </p>
          </BlockText>
          <BlockText hiddenOnMobile>
            <p>Our top priority and main focus.</p>
            <p>
              We use only accredited hosting
              providers carefully selected to
              meet our needs in order
              to have 100% availability.
            </p>
          </BlockText>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
