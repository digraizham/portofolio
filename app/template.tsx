"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // Kondisi awal sebelum halaman muncul (Transparan, turun ke bawah, dan agak blur)
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      // Kondisi akhir saat halaman sudah muncul
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      // Pengaturan durasi dan gaya efek animasi
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}