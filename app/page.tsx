import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DarkPortfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image src="/Logo_nav.PNG" alt="Logo Digra" width={40} height={40} className="rounded-lg" />
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              Tentang
            </a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              Pengalaman
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Proyek
            </a>
            <a href="#credentials" className="hover:text-blue-400 transition-colors">
              Kredensial
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Kontak
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION REDESIGN --- */}
      <section id="about" className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
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

            <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Hi, Saya <br className="hidden md:block" />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digra Murtaza Izham</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0">
              Lulusan S1 Ilmu Komputer dari Universitas Negeri Jakarta. Memiliki spesialisasi dalam pengembangan sistem informasi menggunakan arsitektur{" "}
              <span className="text-blue-400 font-semibold">Laravel</span> untuk solusi terintegrasi serta pengelolaan infrastruktur IT.
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
      <section className="max-w-5xl mx-auto px-6 py-6">
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
      <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
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
                  <h3 className="text-2xl font-bold text-white mb-1">IT Support</h3>
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
      <section id="projects" className="bg-slate-900/30 py-24 border-y border-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center gap-4">
              <span className="w-8 h-px bg-blue-500"></span> Proyek Terpilih
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

      {/* Credentials Section */}
      <section id="credentials" className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-blue-500"></span> Sertifikasi
            </h2>
            <div className="flex-grow p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-4 border border-blue-500/20">
                  🎓
                </div>
                <h3 className="text-xl font-bold text-white mb-1">LOT EPT (TOEFL Prediction)</h3>
                <p className="text-blue-400 font-medium text-sm mb-4">Lembaga Bahasa LIA</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Certificate No. 00063/LOT EPT-10/12/2025/BGR
                  <br />
                  Diterbitkan: 20 Desember 2025
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Valid for 6 Months
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Score Prediction</span>
                <span className="text-3xl font-bold text-white">520</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-blue-500"></span> Pendidikan
            </h2>
            <div className="flex-grow p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-4 border border-blue-500/20">
                  🏛️
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Universitas Negeri Jakarta</h3>
                <p className="text-blue-400 font-medium text-sm mb-6">Sarjana Ilmu Komputer</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Fokus utama pada rekayasa perangkat lunak, sistem informasi kesehatan, dan manajemen basis data.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Lulus April 2026</span>
                <span className="text-3xl font-bold text-white">3.62</span>
              </div>
            </div>
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
          <a 
            href="https://wa.me/087787211504" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Phone Number
          </a>
        </div>
        <p className="text-[10px] text-slate-700 uppercase tracking-[0.4em]">&copy; 2026 Digra Murtaza Izham.</p>
      </footer>
    </main>
  );
}
