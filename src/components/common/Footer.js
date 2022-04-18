import React from "react";

function Footer() {
  return (
    <footer>
      <h2>OUR SOCIAL</h2>
      <div className="wrap">
        <ul className="left">
          <li>FACEBOOK</li>
          <li>INSTAGRAM</li>
          <li>TIKTOK</li>
        </ul>
        <ul className="right">
          <li>LOCATION</li>
          <li>PRIVACY POLICY</li>
          <li>TERMS & CONDITION</li>
        </ul>
      </div>
      <div className="wrap2">
        <ul>
          <li>MONDAY-FRIDAY:10AM-7AM</li>
          <li>SATURDAY-SUNDAY:9AM-6PM</li>
          <li>511-978-2004</li>
        </ul>
        <p>&copy; 2022 BEIGE — ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default Footer;
