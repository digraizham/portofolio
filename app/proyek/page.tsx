"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
// Hapus "Github" dari impor lucide-react
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Komponen kustom untuk Ikon GitHub pengganti bawaan Lucide
const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProyekPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      id: "telehealth-unj",
      title: "Sistem Telehealth UNJ",
      role: "Fullstack Web Developer",
      year: "2025",
      desc: "Modul Manajemen Rekam Medis Elektronik untuk Neonatus (NICU). Mengotomatisasi pencatatan data identitas, observasi medis, dan histori perawatan pasien.",
      points: [
        "Merancang arsitektur basis data MySQL untuk data medis sensitif.",
        "Membangun modul manajemen identitas menggunakan Laravel Security.",
        "Implementasi pelaporan observasi dokter dengan sinkronisasi real-time.",
        "Kolaborasi aktif dalam pengujian fungsionalitas sistem (Black Box & UAT)."
      ],
      stack: ["Laravel", "MySQL", "PHP", "Bootstrap"],
      logo: "/Logo 1_1.svg", 
      colorBg: "bg-blue-500",
      glowFrom: "from-blue-500/20",
      githubUrl: "https://github.com/digraizham/web-neonatus",
      presentationUrl: null
    },
    {
      id: "collagen-app",
      title: "Collagen App",
      role: "Frontend / UI Developer",
      year: "2022 - 2023",
      desc: "Aplikasi mobile hibrida berbasis Android yang menggabungkan interaksi media sosial dengan fungsionalitas e-commerce dalam satu platform.",
      points: [
        "Melakukan riset & perancangan UI berorientasi kemudahan navigasi (User-Centric).",
        "Implementasi komponen UI kompleks ke dalam kode pemrograman Flutter/Dart.",
        "Melakukan optimasi performa responsif di berbagai spesifikasi perangkat Android."
      ],
      stack: ["Flutter", "Dart", "Android", "Figma"],
      logo: "/image_3ed274.png",
      colorBg: "bg-emerald-500",
      glowFrom: "from-emerald-500/20",
      githubUrl: "https://github.com/rolandroman/Team-Final-Project-Collagen",
      presentationUrl: null
    },
    {
      id: "kingdesign",
      title: "KingDesign",
      role: "Web Developer & Planner",
      year: "2023",
      desc: "Platform profil bisnis dan jasa desain grafis dengan modul transaksi. Top 100 Program Mahasiswa Wirausaha (PMW) Nasional.",
      points: [
        "Membangun logika pemrosesan transaksi pemesanan desain menggunakan PHP Native.",
        "Menyusun dokumentasi teknis menyeluruh & proposal bisnis strategis.",
        "Mempresentasikan teknis solusi di hadapan panel penguji PMW Nasional."
      ],
      stack: ["PHP Native", "MySQL", "CSS", "Business"],
      logo: "/image_3e6920.png",
      colorBg: "bg-amber-500",
      glowFrom: "from-amber-500/20",
      githubUrl: "https://github.com/danandak/rpl-kingdesign",
      presentationUrl: "https://www.canva.com/design/DAFgK85ec_g/7fIbAU6RQD_tWT7Ki6Wh_w/view?utm_content=DAFgK85ec_g&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
    }
  ];

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 30 }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30 w-full max-w-[100vw] overflow-x-hidden relative flex flex-col">
      
      {/* DINAMIS BACKGROUND AURA */}
      <AnimatePresence mode='wait'>
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] ${currentProject.glowFrom} via-transparent to-transparent`}
        />
      </AnimatePresence>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link href="/#proyek" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all text-sm font-medium">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Kembali ke Beranda
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-6xl w-full mx-auto px-6 pt-12 pb-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-mono mb-6 uppercase tracking-[0.2em]"
        >
          Featured Works
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
          Project <span className="text-slate-500">Showcase</span>
        </h1>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="max-w-6xl w-full mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Wadah Carousel (Tinggi Dinamis) */}
        <div className="relative w-full max-w-5xl flex items-center justify-center py-4">
          
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
                
                {/* Visual Proyek (Kiri) */}
                <div className="w-full md:w-[35%] bg-white/5 p-8 md:p-12 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-white/10 flex-shrink-0 min-h-[300px]">
                  <div className="relative w-28 h-28 md:w-40 md:h-40 group">
                    <div className={`absolute inset-0 blur-2xl opacity-20 transition-all duration-500 group-hover:opacity-40 ${currentProject.colorBg}`}></div>
                    <div className="relative bg-black/40 border border-white/10 p-5 md:p-6 rounded-3xl h-full w-full flex items-center justify-center">
                      <Image 
                        src={currentProject.logo} 
                        alt={currentProject.title} 
                        width={120} 
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Info Proyek (Kanan) */}
                <div className="w-full md:w-[65%] p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-black uppercase tracking-wider ${currentProject.colorBg}`}>
                      {currentProject.year}
                    </span>
                    <span className="text-slate-400 text-xs font-mono">/ {currentProject.role}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                    {currentProject.title}
                  </h2>
                  
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                    {currentProject.desc}
                  </p>

                  <div className="space-y-3 mb-6">
                    {currentProject.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Aksi */}
                  <div className="flex flex-wrap gap-4 border-t border-white/5 pt-6 mt-auto">
                    {currentProject.githubUrl && (
                      <a 
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Buka repositori GitHub untuk ${currentProject.title}`}
                        title="GitHub Repository"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold transition-all shadow-md group/btn"
                      >
                        <GithubIcon className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" />
                        <span>GitHub Repo</span>
                      </a>
                    )}

                    {currentProject.presentationUrl && (
                      <a 
                        href={currentProject.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Buka presentasi bisnis untuk ${currentProject.title}`}
                        title="Presentasi Bisnis"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-lg shadow-amber-500/10 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 text-black" />
                        <span>Presentasi Bisnis</span>
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-left-8 md:-right-8 z-20 pointer-events-none">
            <button 
              onClick={prevSlide}
              aria-label="Proyek sebelumnya"
              title="Proyek sebelumnya"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Proyek selanjutnya"
              title="Proyek selanjutnya"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto shadow-lg"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex gap-3 mt-8 md:mt-12">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Buka proyek ${i + 1}`}
              title={`Buka proyek ${i + 1}`}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === currentIndex ? "w-12 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <footer className="mt-auto py-12 text-center text-slate-600 text-[10px] font-mono tracking-widest uppercase">
        Built with Next.js & Framer Motion
      </footer>
    </main>
  );
}