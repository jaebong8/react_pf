import Layout from "../common/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function About() {
  const path = process.env.PUBLIC_URL;
  const [Members, setMembers] = useState([]);

  useEffect(() => {
    axios.get(`${path}/DB/member.json`).then((json) => {
      setMembers(json.data.data);
    });
  }, []);

  return (
    <Layout name={"About"}>
      <section className="intro">
        <div className="pic">
          <img src={`${path}/img/about1.jpg`} alt="about1" />
        </div>
        <div className="text">
          <p>ABOUT NATURE</p>
          <h2>
            BRIGHT NATURE
            <br />
            <span>OF DECISION</span>
          </h2>
          <p>
            Helping farmers to emerging markets maximize their profits. We use
            agronomic machine learning, remote sensing, and mobile phones to
            deliver financing, farm products. Has 26 affiliated state soybean
            associations representing 30 soybean-producing state.
            <br />
            <br />
            Customized advice to smallholder farmers with radical efficiency and
            scalability agricultural methods used. Curabitur mollis bibendum
            luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc
            vitae diam
          </p>
          <img src={`${path}/img/sign.png`} alt="sign" />
        </div>
      </section>
      <section className="members">
        <div className="inner">
          <div className="text">
            <h2>
              MEET <br />
              <span>OUR TEAM</span>
            </h2>
            <p>
              We specialise in intelligent & effective Search and believes in
              the power of partnerships to grow business. We use agronomic
              machine learning, remote sensing.
            </p>
          </div>
          <div className="profile">
            {Members.map((member, idx) => {
              return (
                <article key={idx}>
                  <img src={`${path}/img/${member.pic}`} />
                  <h2>{member.name}</h2>
                  <p>{member.position}</p>
                  <div
                    className="icons"
                    onMouseEnter={(e) => {
                      e.currentTarget.closest("article").classList.add("on");
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.closest("article").classList.remove("on");
                    }}
                  >
                    <div>
                      <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                  </div>
                  <div
                    className="corner"
                    onMouseEnter={(e) => {
                      e.currentTarget.closest("article").classList.add("on");
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.closest("article").classList.remove("on");
                    }}
                  >
                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
