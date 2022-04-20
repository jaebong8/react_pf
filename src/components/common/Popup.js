import React, { useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";

const Popup = forwardRef((props, ref) => {
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
          <motion.aside
            className="popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.div
              className="con"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              {props.children}
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
});

export default Popup;
