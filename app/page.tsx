import React from "react";
import Image from 'next/image';

export default function DarkPortfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image
            src="/Logo_nav.png"
            alt="Logo Digra Murtaza Izham"
            width={50} 
            height={50} 
            className="rounded-full" 
          />
          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              Tentang
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Proyek
            </a>
            <a href="#certificates" className="hover:text-blue-400 transition-colors">
              Sertifikasi
            </a>
            <a href="#education" className="hover:text-blue-400 transition-colors">
              Pendidikan
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Kontak
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
          OPEN FOR OPPORTUNITIES
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Digra Murtaza Izham</h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          Lulusan Ilmu Komputer dari Universitas Negeri Jakarta. Spesialis dalam pengembangan sistem informasi menggunakan arsitektur{" "}
          <span className="text-blue-400 font-semibold">Laravel</span> untuk solusi frontend dan backend yang terintegrasi. Fokus pada efisiensi teknis dan
          fungsionalitas sistem.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:digraizham18@gmail.com"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
          >
            Mulai Kolaborasi
          </a>
          <div className="flex items-center gap-4 px-6 py-4 bg-slate-900 border border-slate-800 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300 italic">IPK 3.62 / 4.00</span>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Backend & Frontend", value: "Laravel (Fullstack)" },
            { label: "Database", value: "MySQL" },
            { label: "Programming", value: "PHP, Python" },
            { label: "Mobile", value: "Flutter" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">{item.label}</p>
              <p className="text-white font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="bg-slate-900/30 py-24 border-y border-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-blue-500"></span> Proyek Terpilih
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="text-xs font-mono text-slate-500 mb-4">2025</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Telehealth UNJ</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Modul Manajemen Rekam Medis Elektronik untuk Neonatus. Fokus pada integritas data identitas pasien dan sinkronisasi hasil observasi medis.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">Laravel</span>
                <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">MySQL</span>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="text-xs font-mono text-slate-500 mb-4">2022 - 2023</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Collagen App</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Aplikasi Android yang mengintegrasikan fitur media sosial dan e-commerce. Berperan dalam perancangan UI dan implementasi menggunakan Flutter.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">Flutter</span>
                <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">Dart</span>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
              <div className="text-xs font-mono text-slate-500 mb-4">2023</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">KingDesign</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Sistem informasi profil bisnis dan transaksi jasa desain. Berhasil meraih penghargaan Top 100 Program Mahasiswa Wirausaha (PMW).
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">PHP Native</span>
                <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">UI Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Sertifikasi Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-blue-500"></span> Sertifikasi
            </h2>
            <div className="flex-grow p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-white">LOT EPT (TOEFL Prediction)</h3>
                <p className="text-blue-400 font-medium mb-2">Lembaga Bahasa LIA</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Certificate No. 00063/LOT EPT-10/12/2025/BGR
                  <br />
                  Diterbitkan: 20 Desember 2025
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 uppercase tracking-widest">Score Prediction</span>
                <span className="text-2xl font-bold text-white">520</span>
              </div>
            </div>
          </div>

          {/* Pendidikan Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-blue-500"></span> Pendidikan
            </h2>
            <div className="flex-grow p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-white">Universitas Negeri Jakarta</h3>
                <p className="text-blue-400 font-medium mb-4">Sarjana Ilmu Komputer</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Fokus pada rekayasa perangkat lunak dan arsitektur web berbasis Laravel. Aktif dalam pengembangan sistem informasi kesehatan dan kompetisi
                  startup.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 uppercase tracking-widest">Lulus April 2026</span>
                <span className="text-2xl font-bold text-white">IPK 3.62</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Hubungi Saya</h2>
        <p className="text-slate-500 mb-8">Ciomas, Kabupaten Bogor • Tersedia untuk posisi Database Administrator atau Web Developer</p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          <a href="mailto:digraizham18@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2">
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/digra-murtaza-izham/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/digraizham/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <span>Instagram</span>
          </a>
          <a href="https://wa.me/087787211504" className="text-slate-300 font-medium flex items-center gap-2">
            <span>Phone Number</span>
          </a>
        </div>

        <p className="text-[10px] text-slate-700 uppercase tracking-[0.2em]">&copy; 2026 Digra Murtaza Izham. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}
