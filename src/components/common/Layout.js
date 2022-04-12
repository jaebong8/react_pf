import React, { useEffect, useRef } from "react";

function Layout(props) {
  const path = process.env.PUBLIC_URL;
  const frame = useRef(null);

  useEffect(() => {
    frame.current.classList.add("on");
  }, []);

  return (
    <>
      <figure
        className={`sub_visual`}
        style={
          props.name === "Youtube"
            ? {
                position: "absolute",
                top: 0,
                left: 0,
                background: `url(${path}/img/sub-image.jpg) no-repeat center/cover`,
                height: "100vh",
              }
            : {
                background: `url(${path}/img/sub-image.jpg) no-repeat center/cover`,
              }
        }
      >
        <div className="wrap">
          <h2
            style={
              props.name === "Youtube"
                ? {
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "32px",
                  }
                : null
            }
          >
            {props.name}
          </h2>
        </div>
      </figure>
      <section className={`content ${props.name}`} ref={frame}>
        {props.children}
      </section>
    </>
  );
}

export default Layout;
