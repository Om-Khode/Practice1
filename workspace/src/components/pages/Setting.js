import React from "react";
import { motion } from "framer-motion";

export default function Setting() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      Setting
    </motion.div>
  );
}
