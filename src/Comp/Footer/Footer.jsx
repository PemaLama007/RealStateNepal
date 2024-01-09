import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container border-top">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./src/assets/logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
          <span></span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Office</span>
          <span className="secondaryText">145 XYZ, ABC</span>
          <span className="fs-2 d-flex flex-col gap-3 mt-3">
            <a className="text-decoration-none t" href="https://www.linkedin.com/"><li><i class="bi bi-linkedin"></i></li></a>
            <a className="text-decoration-none t" href="https://www.facebook.com/"><li><i class="bi bi-facebook"></i></li></a>
            <a className="text-decoration-none t" href="https://www.instagram.com/"><li><i class="bi bi-instagram"></i></li></a>

          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
