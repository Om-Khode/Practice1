import React from "react";
import { motion } from "framer-motion";

export default function Bookmark() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Bookmark
    </motion.div>
  );
}
