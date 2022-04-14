import React, { useEffect, useRef } from "react";

function Layout(props) {
  const path = process.env.PUBLIC_URL;
  const frame = useRef(null);

  useEffect(() => {
    frame.current.classList.add("on");
  }, []);

  return (
    <>
      <figure className={`sub_visual ${props.name}_sub`}>
        <div className="wrap">
          <span>{props.name.substr(0, 1)}</span>
          <div className="txt">
            <h2>{props.name}</h2>
            <p>Creative All Things</p>
          </div>
        </div>
      </figure>
      <section className={`content ${props.name}`} ref={frame}>
        {props.children}
      </section>
    </>
  );
}

export default Layout;
