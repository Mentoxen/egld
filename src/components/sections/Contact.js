import React from 'react';
import {logoFooter} from '../../assets/images'
import Social from "../Social";
import {Section} from "react-scroll-section";

const Contact = () => {
  return (
    <Section id="contact">
      <section className="sectionContact container textCenter textLg">
        <h2 className="sectionContactTitle mb1">Get in touch</h2>
        <p className="mb3">Send us a message</p>
        <Social/>
        <p>Or email us at <a className="linkUnstyled" href="mailto:contact@unitedgroup.capital">contact@unitedgroup.capital</a></p>
        <img src={logoFooter} alt="" className="mw150 mt10" />
      </section>
    </Section>
  );
};

export default Contact;
