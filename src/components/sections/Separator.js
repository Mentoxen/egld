import React from 'react';
import {lowerShadeFlipped, tst} from "../../assets/images";

const Separator = () => {
  return (
    <section className="sectionEgld sectionSeparator" style={{backgroundImage: `url(${lowerShadeFlipped})`}}>
      <div className="container textCenter">
        <h2 className="sectionSeparatorTitle">WORKING HYPOTHESIS</h2>
      </div>
    </section>
  );
};

export default Separator;
