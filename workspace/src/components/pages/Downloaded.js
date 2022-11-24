import React from "react";
import { motion } from "framer-motion";

export default function Downloaded() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      Downloaded
    </motion.div>
  );
}
