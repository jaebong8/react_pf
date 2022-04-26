import React, { useEffect, useRef } from "react";

function Layout(props) {
  const path = process.env.PUBLIC_URL;
  const frame = useRef(null);
  const cursor = useRef(null);

  const handleMove = (e) => {
    cursor.current.style.left = e.pageX + "px";
    cursor.current.style.top = e.pageY + "px";
  };

  useEffect(() => {
    frame.current.classList.add("on");
    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <figure className={`sub_visual ${props.name}_sub`}>
        <div className="wrap">
          <span>{props.name.substr(0, 1)}</span>
          <div className="txt">
            <h2>{props.name}</h2>
            <p>Creative All Things</p>
            <div className="cursor" ref={cursor}></div>
          </div>
          <p>Lorem, ipsum.</p>
        </div>
      </figure>
      <section className={`content_section ${props.name}`} ref={frame}>
        {props.children}
      </section>
    </>
  );
}

export default Layout;
