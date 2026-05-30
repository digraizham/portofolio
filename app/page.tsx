"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function DarkPortfolio() {
  // State untuk mengontrol buka/tutup menu di layar HP
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk mengubah status menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      // Menentukan seberapa jauh carousel bergeser (sekitar 1 kartu + gap)
      const scrollAmount = direction === "left" ? -360 : 360;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 w-full max-w-[100vw] overflow-x-hidden relative flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image src="/Logo_nav.PNG" alt="Logo Digra" width={40} height={40} className="rounded-lg" />

          {/* Tombol Hamburger (Mobile) */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-slate-400 hover:text-white transition-colors" aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="#about" className="hover:text-blue-400 transition-colors text-xs md:text-sm">
              Tentang
            </Link>
            <Link href="#experience" className="hover:text-blue-400 transition-colors text-xs md:text-sm">
              Pengalaman
            </Link>
            <Link href="#projects" className="hover:text-blue-400 transition-colors text-xs md:text-sm">
              Proyek
            </Link>
            <Link href="#certificates" className="hover:text-blue-400 transition-colors text-xs md:text-sm">
              Sertifikat
            </Link>
            <Link href="#credentials" className="hover:text-blue-400 transition-colors text-xs md:text-sm">
              Kredensial
            </Link>
            <Link href="#training" className="hover:text-blue-400 transition-colors text-xs md:text-sm">
              Pelatihan
            </Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors text-xs md:text-sm">
              Kontak
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown dengan Animasi Framer Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
                {/* Menggunakan <Link> Next.js dengan onClick terpisah */}
                <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-blue-400 transition-colors block py-2">
                  Tentang
                </Link>
                <Link href="#experience" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-blue-400 transition-colors block py-2">
                  Pengalaman
                </Link>
                <Link href="#projects" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-blue-400 transition-colors block py-2">
                  Proyek
                </Link>
                <Link href="#credentials" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-blue-400 transition-colors block py-2">
                  Kredensial
                </Link>
                <Link href="#training" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-blue-400 transition-colors block py-2">
                  Pelatihan
                </Link>
                <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-blue-400 transition-colors block py-2">
                  Kontak
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Kontainer Khusus Background - Sangat ketat mengunci elemen blur agar tidak merusak lebar halaman */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] max-w-[600px] max-h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse duration-[8000ms]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] max-w-[500px] max-h-[500px] bg-emerald-600/5 rounded-full blur-[100px] animate-pulse duration-[10000ms]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto px-6 min-h-[100dvh] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 z-10 pt-24 md:pt-0 pb-16">
        {/* Teks & Call to Action (CTA) */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 text-xs font-mono tracking-wide backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Work
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Digra Murtaza Izham</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Fresh Graduate S1 Ilmu Komputer dari Universitas Negeri Jakarta. Menggabungkan keahlian{" "}
            <strong className="text-slate-200 font-medium">Data Analysis</strong> dan <strong className="text-slate-200 font-medium">Web Development</strong>{" "}
            untuk menciptakan solusi digital yang efisien dan berbasis data.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 w-full sm:w-auto">
            <Link
              href="/proyek"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              Lihat Proyek
              <span className="group-hover:translate-x-1.5 transition-transform duration-300 text-base">→</span>
            </Link>
          </div>
        </div>

        {/* Visual Interaktif (Interactive Code Window) */}
        <div className="flex-1 w-full max-w-md relative group">
          {/* Ambient Glow di belakang window */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none z-0"></div>

          {/* Mockup Window */}
          <div className="relative z-10 p-5 rounded-2xl bg-slate-950/90 border border-slate-900 shadow-xl backdrop-blur-xl transform transition-all duration-500 hover:rotate-0 md:rotate-1 hover:scale-[1.02]">
            {/* Window Header */}
            <div className="flex items-center gap-2 mb-4 border-b border-slate-900 pb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
              <div className="ml-2 text-[11px] font-mono text-slate-600">profile.ts</div>
            </div>

            {/* Code Content */}
            <pre className="text-xs sm:text-sm font-mono text-slate-400 overflow-x-auto leading-relaxed">
              <code>
                <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {"{"}
                <br />
                &nbsp;&nbsp;name: <span className="text-emerald-400">'Digra Murtaza'</span>,
                <br />
                &nbsp;&nbsp;role: <span className="text-emerald-400">'Data Analyst & Web Dev'</span>,
                <br />
                &nbsp;&nbsp;degree: <span className="text-emerald-400">'S1 Ilmu Komputer, UNJ'</span>,
                <br />
                &nbsp;&nbsp;stack: [<span className="text-emerald-400">'SQL'</span>, <span className="text-emerald-400">'Python'</span>,{" "}
                <span className="text-emerald-400">'Laravel'</span>],
                <br />
                &nbsp;&nbsp;location: <span className="text-emerald-400">'Bogor, ID'</span>,
                <br />
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section: Tech Stack Grid */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-16 z-10">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight bg-clip-text bg-gradient-to-r from-white to-slate-400">Tech Stack & Tools</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-900 to-transparent hidden md:block"></div>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {[
            { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
            { name: "Laravel", url: "https://cdn.simpleicons.org/laravel/FF2D20" },
            { name: "SQL", url: "https://cdn.simpleicons.org/mysql/4169E1" },
            { name: "HTML", url: "https://cdn.simpleicons.org/html5/61DAFB" },
            { name: "PHP", url: "https://cdn.simpleicons.org/php/white" },
            { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "Flutter", url: "https://cdn.simpleicons.org/flutter/02569B" },
            { name: "JS", url: "https://cdn.simpleicons.org/javascript/34A853" },
            { name: "Android Studio", url: "https://cdn.simpleicons.org/androidstudio/34A853" },
            { name: "Jira", url: "https://cdn.simpleicons.org/jira/02569B" },
          ].map((tool, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-slate-900/20 border border-slate-900 hover:border-slate-700 transition-all duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img src={tool.url} alt={tool.name} className="w-full h-full object-contain filter drop-shadow-md" />
              </div>
              <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-blue-500"></span> Pengalaman Profesional
        </h2>

        <div className="group relative overflow-hidden p-px rounded-2xl bg-gradient-to-b from-slate-700 to-transparent">
          <div className="relative p-8 rounded-2xl bg-slate-950 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl border border-blue-500/20">💼</div>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">IT Support Intern</h3>
                  <p className="text-blue-400 font-medium tracking-wide mb-2">Komisi Informasi DKI Jakarta</p>

                  <a
                    href="https://drive.google.com/drive/folders/175FgvCmMN4krAftxhpk-3HUgdqq6fBlm?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-blue-400 transition-colors group/link"
                  >
                    <span className="underline decoration-slate-700 group-hover/link:decoration-blue-500 underline-offset-4 tracking-wide">Dokumen Magang</span>
                    <span className="text-[10px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-slate-500 text-xs font-mono block uppercase tracking-widest mb-1">Sep — Des 2024</span>
                  <span className="inline-block px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                    Magang
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors">
                  <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-3">SEO Optimization</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Melakukan audit dan optimasi skor SEO pada portal berita instansi berdasarkan parameter Yoast SEO untuk memastikan visibilitas konten yang
                    optimal secara digital.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors">
                  <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-3">System Development</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Membangun prototipe website cadangan menggunakan framework Laravel 6 dengan penerapan metodologi Agile dalam siklus perancangannya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Projects Carousel */}
      <section id="proyek" className="relative w-full max-w-6xl mx-auto px-6 py-20 z-10">
        {/* Header Section dengan Tombol Navigasi Carousel */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4 flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Featured Projects
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-900 to-transparent hidden sm:block"></div>
          </div>

          {/* Tombol Navigasi Kiri & Kanan */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => scrollCarousel("left")}
              aria-label="Geser ke kiri"
              title="Proyek sebelumnya"
              className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-95 shadow-lg select-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              aria-label="Geser ke kanan"
              title="Proyek selanjutnya"
              className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-95 shadow-lg select-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Jalur Kontainer Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {[
            {
              title: "Sistem Telehealth UNJ",
              role: "Fullstack Web Developer",
              desc: "Modul Manajemen Rekam Medis Elektronik untuk Neonatus (NICU) guna memonitor data vital klinis pasien secara real-time.",
              logo: "/Logo 1_1.svg",
              hoverColor: "hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
              glowEffect: "bg-blue-500/20",
            },
            {
              title: "Collagen App",
              role: "Frontend / UI Developer",
              desc: "Aplikasi mobile hibrida berbasis Android yang menggabungkan fitur interaksi sosial media dan platform e-commerce terpadu.",
              logo: "/image_3ed274.png",
              hoverColor: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
              glowEffect: "bg-emerald-500/20",
            },
            {
              title: "KingDesign",
              role: "Web Developer & Planner",
              desc: "Platform profil bisnis, direktori jasa desain grafis, dan pemrosesan transaksi. Berhasil mencapai Top 100 PMW Nasional.",
              logo: "/image_3e6920.png",
              hoverColor: "hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]",
              glowEffect: "bg-amber-500/20",
            },
          ].map((project, index) => (
            <div
              key={index}
              className={`w-full sm:w-[360px] flex-shrink-0 snap-start group relative p-6 md:p-8 rounded-[2rem] bg-slate-900/30 border border-slate-900 ${project.hoverColor} transition-all duration-500 flex flex-col justify-between backdrop-blur-md`}
            >
              <div>
                {/* Frame Logo Box */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center p-3 relative shadow-inner group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                  <div className={`absolute inset-0 opacity-10 blur-md ${project.glowEffect}`}></div>
                  <Image src={project.logo} alt={project.title} width={48} height={48} className="w-full h-full object-contain relative z-10 drop-shadow-md" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-slate-200 transition-colors">{project.title}</h3>
                <p className="text-[11px] font-mono text-slate-500 mb-4 uppercase tracking-wider">{project.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">{project.desc}</p>
              </div>

              {/* Tombol Tautan Aksi (Hanya Detail) */}
              <div className="flex items-center justify-between border-t border-slate-900/60 pt-5 mt-auto">
                <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-400 transition-colors">Explore Case Study</span>
                <Link
                  href={`/proyek#${project}`} 
                  aria-label={`Buka detail studi kasus ${project.title}`}
                  title="Lihat detail lengkap"
                  className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-sm group-hover:translate-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERTIFIKAT SECTION (CAROUSEL DENGAN NAVIGASI) --- */}
      <section id="certificates" className="max-w-5xl mx-auto px-6 py-10 border-t border-slate-900/50 overflow-hidden">
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-4">
            <span className="w-8 h-px bg-blue-500"></span> Sertifikasi Profesi
          </h2>

          {/* Tombol Navigasi Desktop */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scrollCarousel("left")}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-blue-900/20 transition-all flex items-center justify-center group"
              aria-label="Geser Kiri"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-blue-900/20 transition-all flex items-center justify-center group"
              aria-label="Geser Kanan"
            >
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Petunjuk Geser untuk Mobile (Kecil) */}
        <div className="md:hidden flex justify-end mb-4 animate-pulse">
          <span className="text-xs text-slate-500 italic">Geser kartu untuk melihat semua →</span>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {[
            {
              title: "SQL (Advanced)",
              issuer: "HackerRank",
              date: "8 Mei 2026",
              id: "260B6A6A3F2F",
              link: "https://www.hackerrank.com/certificates/260B6A6A3F2F",
              logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
              tags: ["Advanced Queries", "Window Functions", "Query Optimization"],
            },
            {
              title: "SQL (Intermediate)",
              issuer: "HackerRank",
              date: "7 Mei 2026",
              id: "e2a00482e0b2",
              link: "https://www.hackerrank.com/certificates/e2a00482e0b2",
              logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
              tags: ["Complex Joins", "Subqueries", "Optimization"],
            },
            {
              title: "SQL (Basic)",
              issuer: "HackerRank",
              date: "7 Mei 2026",
              id: "f9a853e5f239",
              link: "https://www.hackerrank.com/certificates/f9a853e5f239",
              logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
              tags: ["Queries", "Aggregation", "Data Types"],
            },
            {
              title: "LOT EPT (TOEFL Prediction)",
              issuer: "Lembaga Bahasa LIA",
              date: "20 Desember 2025",
              id: "00063/LOT EPT-10/12/2025/BGR",
              link: "https://drive.google.com/file/d/137EJPf7UzluLo0IK_S3VM_ObSAM3tOCw/view",
              logo: "https://i0.wp.com/liayogyakarta.com/wp-content/uploads/2019/12/logo-lia.webp",
              tags: ["Score: 520", "English Proficiency"],
            },
          ].map((cert, i) => (
            <div
              key={i}
              className="min-w-[85vw] sm:min-w-[340px] flex-shrink-0 snap-center p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between backdrop-blur-sm hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-900/20 group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 transition-transform shadow-inner p-2 overflow-hidden">
                  <Image src={cert.logo} alt={cert.issuer} width={48} height={48} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 font-medium text-sm mb-5">{cert.issuer}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-slate-950 rounded-md text-slate-400 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-slate-500 text-xs leading-relaxed space-y-1">
                  <p>
                    ID: <span className="font-mono text-slate-400">{cert.id}</span>
                  </p>
                  <p>
                    Diterbitkan: <span className="text-slate-400">{cert.date}</span>
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800/50">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center items-center gap-2 text-sm font-semibold px-4 py-3 bg-slate-950 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500 rounded-xl transition-all group/cert"
                >
                  <span>Validasi Sertifikat</span>
                  <span className="text-[10px] group-hover/cert:translate-x-1 group-hover/cert:-translate-y-1 transition-transform">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PENDIDIKAN SECTION (REDESIGNED) --- */}
      <section id="credentials" className="max-w-5xl mx-auto px-6 py-10 border-t border-slate-900/50">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-blue-500"></span> Latar Belakang Pendidikan
        </h2>

        <div className="relative group overflow-hidden p-px rounded-3xl bg-gradient-to-br from-slate-700 to-transparent">
          <div className="relative p-8 md:p-12 rounded-3xl bg-slate-950 flex flex-col lg:flex-row gap-12 items-start">
            {/* Sisi Kiri: Branding Kampus */}
            <div className="flex-shrink-0 w-full lg:w-1/3">
              <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-4xl mb-6 border border-blue-500/20 shadow-inner">
                🏛️
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Universitas Negeri Jakarta</h3>
              <p className="text-blue-400 font-semibold text-lg mb-6 tracking-wide">Sarjana Ilmu Komputer</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Lulus:</span>
                  <span className="text-sm text-slate-300 font-medium">April 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">IPK:</span>
                  <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <span className="text-green-400 font-bold">3.62 / 4.00</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://drive.google.com/file/d/1W-0BVraDHoE7V_6-7okawvTRIzLwduEi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/20 group/btn"
                >
                  <span>Lihat Ijazah</span>
                  <span className="text-xs group-hover/btn:translate-x-1 transition-transform">↗</span>
                </a>
              </div>
            </div>

            {/* Sisi Kanan: Fokus Akademik & Skripsi */}
            <div className="flex-grow w-full border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-12 pt-8 lg:pt-0">
              <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-6">Fokus Akademik & Penelitian</h4>

              <div className="space-y-8">
                <div>
                  <h5 className="text-white font-bold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Skripsi / Tugas Akhir
                  </h5>
                  <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 italic leading-relaxed">
                    <p className="text-slate-300 text-sm md:text-base mb-2">
                      "Rancang Bangun Modul Manajemen Rekam Medis Elektronik untuk Neonatus dalam Sistem Informasi Telehealth Berbasis Website"
                    </p>
                    <p className="text-slate-500 text-xs not-italic">
                      Fokus pada pengembangan sistem manajemen data medis yang aman dan efisien menggunakan Laravel, bertujuan mendigitalisasi pemantauan
                      kesehatan bayi baru lahir secara real-time.
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="text-white font-bold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Kompetensi Relevan Selama Kuliah
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Fullstack Development (Laravel)",
                      "Database Design (MySQL)",
                      "Python for Data Analysis",
                      "Mobile Framework (Flutter)",
                      "Systems Analysis",
                      "UI/UX Design",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-slate-900 rounded-lg text-slate-400 text-xs border border-slate-800 hover:text-blue-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PELATIHAN SECTION (NEW) --- */}
      <section id="training" className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-900/50">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-4">
            <span className="w-8 h-px bg-blue-500"></span> Pelatihan
          </h2>
          <Link href="/pelatihan" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group flex items-center gap-2">
            Detail Tugas <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm relative overflow-hidden group">
          {/* Efek Cahaya Halus */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors pointer-events-none"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-inner overflow-hidden p-1">
                <Image src="/MySkill-logo.png" alt="MySkill Logo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight hover:text-blue-400 transition-colors">
                    <Link href="/pelatihan">DATA ANALYSIS: FULLSTACK INTENSIVE BOOTCAMP</Link>
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className="text-slate-400 text-sm font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>8 April 2026 — 29 Mei 2026
                  </p>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Completed Bootcamp
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-1 gap-4 pt-6 border-t border-slate-800/50 text-slate-500 text-xs italic">
            Program Bootcamp Data Analysis: Fullstack Intensive di MySkill ini membekali saya dengan kompetensi analitik end-to-end, mulai dari perumusan
            business problem solving, pengolahan statistik, hingga manipulasi data berskala besar menggunakan kueri SQL tingkat lanjut. Melalui rangkaian studi
            kasus dan tiga proyek akhir, saya berhasil mengasah kemampuan data wrangling menggunakan pustaka Python seperti Pandas serta perancangan visualisasi
            data interaktif. Seluruh proses pembelajaran ini bermuara pada kemampuan menyusun business storytelling yang komprehensif untuk memberikan
            rekomendasi strategis (data-driven), seperti upaya percepatan akuisisi pelanggan, taktik promosi akhir pekan, dan evaluasi profitabilitas
            operasional bisnis.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Hubungi Saya</h2>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
          <a href="mailto:digraizham18@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/digra-murtaza-izham/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/digraizham/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Instagram
          </a>
          <a href="https://wa.me/087787211504" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">
            Phone Number
          </a>
        </div>
        <p className="text-[10px] text-slate-700 uppercase tracking-[0.4em]">&copy; 2026 Digra Murtaza Izham.</p>
      </footer>
    </main>
  );
}
