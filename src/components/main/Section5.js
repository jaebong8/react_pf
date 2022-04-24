import React from "react";
import { Link } from "react-router-dom";

function Section5() {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="section5 myScroll">
      <article>
        <div className="pic">
          <img src={`${path}/img/section5_1.webp`} />
        </div>
        <h2>Inside a playful, bohemian beach house on Martha's Vineyard</h2>
        <p>
          I would follow Jessica to the end of the Earth,” Johanna Hynes says,
          referring to her designer, Jessica Stambaugh. The Nashville-based
          principal of JS Interiors designed Hynes’ Boston wellness studio,
          Asana Charlestown, her family’s townhouse—and most recently, their
          beach chalet in Katama on Martha’s Vineyard.
        </p>
        <Link to="/blog">READ ARTICLE</Link>
      </article>
      <article>
        <div className="pic">
          <img src={`${path}/img/section5_2.jpg`} />
        </div>
        <h2>Inside a playful, bohemian beach house on Martha's Vineyard</h2>
        <p>
          I would follow Jessica to the end of the Earth,” Johanna Hynes says,
          referring to her designer, Jessica Stambaugh. The Nashville-based
          principal of JS Interiors designed Hynes’ Boston wellness studio,
          Asana Charlestown, her family’s townhouse—and most recently, their
          beach chalet in Katama on Martha’s Vineyard.
        </p>
        <Link to="/blog">READ ARTICLE</Link>
      </article>
      <article>
        <div className="pic">
          <img src={`${path}/img/section5_3.jpg`} />
        </div>
        <h2>Inside a playful, bohemian beach house on Martha's Vineyard</h2>
        <p>
          I would follow Jessica to the end of the Earth,” Johanna Hynes says,
          referring to her designer, Jessica Stambaugh. The Nashville-based
          principal of JS Interiors designed Hynes’ Boston wellness studio,
          Asana Charlestown, her family’s townhouse—and most recently, their
          beach chalet in Katama on Martha’s Vineyard.
        </p>
        <Link to="/blog">READ ARTICLE</Link>
      </article>
    </section>
  );
}

export default Section5;
