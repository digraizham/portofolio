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
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
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

      {/* --- HERO SECTION REDESIGN --- */}
      <section id="about" className="relative max-w-5xl mx-auto px-6 pt-32 pb-18 lg:pt-40 lg:pb-32">
        {/* Dekorasi Cahaya Latar Belakang */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-12 relative z-10">
          {/* Teks Konten */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
              <span className="text-slate-300 tracking-wide uppercase">Tersedia untuk Kolaborasi</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Hi, Saya <br className="hidden md:block" />
              <span
                className="text-4xl md:text-5xl lg:text-6xl block w-fit pb-1"
                style={{
                  background: "linear-gradient(to right, #60a5fa, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#60a5fa",
                }}
              >
                Digra Murtaza Izham
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0">
              Lulusan S1 Ilmu Komputer Universitas Negeri Jakarta. Berpengalaman dalam operasional{" "}
              <span className="text-blue-400 font-semibold">IT Support</span> serta pengembangan perangkat lunak web dan mobile. Menguasai ekosistem{" "}
              <span className="text-blue-400 font-semibold">Laravel, PHP, Python, dan MySQL</span> dengan target karier sebagai{" "}
              <span className="text-blue-400 font-semibold">Web Developer</span> maupun <span className="text-blue-400 font-semibold">Data Analyst</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="mailto:digraizham18@gmail.com"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group"
              >
                Hubungi Saya <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <div className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
                <span className="text-xl">🎓</span>
                <div className="text-left">
                  <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">S1 Ilmu Komputer</span>
                  <span className="block text-sm font-medium text-slate-300 italic">IPK 3.62 / 4.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Foto Profil dengan Bingkai Modern */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>

            <div className="relative w-40 h-60 md:w-40 md:h-60 lg:w-64 lg:h-96 rounded-[2rem] overflow-hidden border border-slate-700/50 bg-slate-900 p-2 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-800">
                <Image
                  src="/34.jpeg"
                  alt="Digra Murtaza Izham"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- END HERO SECTION --- */}

      {/* Tech Stack Grid */}
      <section className="max-w-5xl mx-auto px-6 py-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Backend & Frontend", value: "Laravel (Fullstack)" },
            { label: "Database", value: "MySQL" },
            { label: "Programming", value: "PHP, Python" },
            { label: "Mobile Framework", value: "Flutter" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-[0.2em]">{item.label}</p>
              <p className="text-white font-medium text-sm">{item.value}</p>
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

      {/* Projects Grid */}
      <section id="projects" className="bg-slate-900/30 py-10 border-y border-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center gap-4">
              <span className="w-8 h-px bg-blue-500"></span> Pengalaman Proyek
            </h2>
            <Link href="/proyek" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group flex items-center gap-2">
              Detail Proyek <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Telehealth UNJ", year: "2025", desc: "Sistem rekam medis neonatus berbasis web dengan Laravel.", tags: ["Laravel", "MySQL"] },
              { title: "Collagen App", year: "2023", desc: "Aplikasi mobile e-commerce dan sosial media berbasis Android.", tags: ["Flutter", "Dart"] },
              { title: "KingDesign", year: "2023", desc: "Platform profil bisnis dan transaksi jasa desain logo.", tags: ["PHP Native", "UI Design"] },
            ].map((proj, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all shadow-lg">
                <div className="text-[10px] font-mono text-slate-500 mb-4 tracking-widest">{proj.year}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.desc}</p>
                <div className="flex gap-2">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

        {/* Carousel Container - PENTING: Tambahkan ref={carouselRef} di sini */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {[
            {
              title: "SQL (Intermediate)",
              issuer: "HackerRank",
              date: "7 Mei 2026",
              id: "e2a00482e0b2",
              link: "https://www.hackerrank.com/certificates/e2a00482e0b2",
              icon: "🥇",
              tags: ["Complex Joins", "Subqueries", "Optimization"],
            },
            {
              title: "SQL (Basic)",
              issuer: "HackerRank",
              date: "7 Mei 2026",
              id: "f9a853e5f239",
              link: "https://www.hackerrank.com/certificates/f9a853e5f239",
              icon: "🥈",
              tags: ["Queries", "Aggregation", "Data Types"],
            },
            {
              title: "LOT EPT (TOEFL Prediction)",
              issuer: "Lembaga Bahasa LIA",
              date: "20 Desember 2025",
              id: "00063/LOT EPT-10/12/2025/BGR",
              link: "https://drive.google.com/file/d/137EJPf7UzluLo0IK_S3VM_ObSAM3tOCw/view",
              icon: "🗣️",
              tags: ["Score: 520", "English Proficiency"],
            },
          ].map((cert, i) => (
            <div
              key={i}
              className="min-w-[85vw] sm:min-w-[340px] flex-shrink-0 snap-center p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between backdrop-blur-sm hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-900/20 group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-3xl mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  {cert.icon}
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
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    Ongoing Course
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-1 gap-4 pt-6 border-t border-slate-800/50 text-slate-500 text-xs italic">
            * Pelatihan intensif mencakup pengolahan data, visualisasi, dan pemecahan masalah berbasis data berskala penuh.
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
