import React, { useState, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Menu = forwardRef((props, ref) => {
  const active = { color: "#fff1b4" };
  const [Open, setOpen] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        setOpen(true);
      },
      close: () => {
        setOpen(false);
      },
    };
  });
  return (
    <AnimatePresence>
      {Open && (
        <>
          <motion.ul
            id="gnb"
            className="menu"
            initial={{ x: -350 }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
            exit={{ x: -350, transition: { duration: 0.5 } }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <li>
              <NavLink to="/about" activeStyle={active}>
                ABOUT
              </NavLink>
            </li>

            <li>
              <NavLink to="/gallery" activeStyle={active}>
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink to="/youtube" activeStyle={active}>
                YOUTUBE
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blog" activeStyle={active}>
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" activeStyle={active}>
                COMMUNITY
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" activeStyle={active}>
                CONTACT
              </NavLink>
            </li>
            <button
              className="closeBtn"
              onClick={() => {
                setOpen(false);
              }}
            >
              CLOSE
            </button>
          </motion.ul>
        </>
      )}
    </AnimatePresence>
  );
});

export default Menu;
