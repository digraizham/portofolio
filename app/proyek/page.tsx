import React from 'react';
import Link from 'next/link';

export default function DetailProyek() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 hover:text-blue-400 transition-colors text-sm font-medium">
            <span className="text-lg">←</span> Kembali ke Beranda
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Detail Proyek & Studi Kasus
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Eksplorasi mendalam mengenai alur pengembangan, kontribusi teknis, dan hasil akhir dari setiap proyek yang telah saya selesaikan.
        </p>
      </section>

      {/* Daftar Proyek Detail */}
      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-12">
        
        {/* Proyek 1: Telehealth */}
        <article className="p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-white mb-2">Telehealth UNJ</h2>
              <p className="text-blue-400 font-medium mb-6 text-sm">Tahun: 2025</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs text-slate-500 uppercase tracking-widest mb-3">Tautan Proyek</h3>
                  <div className="flex flex-col gap-3">
                    <a href="https://github.com/digraizham/web-neonatus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-700">
                      <span>GitHub Repository</span>
                      <span className="text-xs text-slate-500">↗</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs text-slate-500 uppercase tracking-widest mb-2">Peran Saya</h3>
                  <p className="text-sm text-slate-300">Fullstack Web Developer</p>
                </div>
                <div>
                  <h3 className="text-xs text-slate-500 uppercase tracking-widest mb-2">Teknologi</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">Laravel</span>
                    <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-lg font-bold text-white mb-3">Deskripsi Proyek</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Modul Manajemen Rekam Medis Elektronik untuk Neonatus. Sistem ini dirancang untuk mengotomatisasi pencatatan data identitas, hasil observasi medis, dan histori perawatan pasien di unit NICU.
              </p>
              <h3 className="text-lg font-bold text-white mb-3">Kontribusi Teknis</h3>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-3 leading-relaxed">
                <li>Merancang skema database relasional untuk menyimpan data medis pasien yang sensitif.</li>
                <li>Mengembangkan modul manajemen data identitas menggunakan Laravel guna memastikan integritas informasi.</li>
                <li>Implementasi fitur pelaporan hasil observasi dokter dengan sinkronisasi data secara real-time.</li>
                <li>Kolaborasi aktif dengan tim pengembang dan desainer dalam fase pengujian fungsionalitas.</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Proyek 2: Collagen */}
        <article className="p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-white mb-2">Collagen App</h2>
              <p className="text-blue-400 font-medium mb-6 text-sm">Tahun: 2022 - 2023</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs text-slate-500 uppercase tracking-widest mb-3">Tautan Proyek</h3>
                  <div className="flex flex-col gap-3">
                    <a href="https://github.com/RolandRoman/Team-Final-Project-Collagen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-700">
                      <span>GitHub Repository</span>
                      <span className="text-xs text-slate-500">↗</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs text-slate-500 uppercase tracking-widest mb-2">Peran Saya</h3>
                  <p className="text-sm text-slate-300">Frontend / UI Developer</p>
                </div>
                <div>
                  <h3 className="text-xs text-slate-500 uppercase tracking-widest mb-2">Teknologi</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">Flutter</span>
                    <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">Dart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-lg font-bold text-white mb-3">Deskripsi Proyek</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Aplikasi mobile hibrida yang menggabungkan interaksi sosial media dengan fungsionalitas e-commerce dalam satu platform Android.
              </p>
              <h3 className="text-lg font-bold text-white mb-3">Kontribusi Teknis</h3>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-3 leading-relaxed">
                <li>Melakukan riset dan perancangan antarmuka pengguna (UI) yang berorientasi pada kemudahan navigasi.</li>
                <li>Implementasi komponen desain UI yang kompleks ke dalam kode Flutter menggunakan widget Dart.</li>
                <li>Memastikan aplikasi memiliki performa yang responsif di berbagai perangkat Android.</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Proyek 3: KingDesign */}
        <article className="p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-white mb-2">KingDesign</h2>
              <p className="text-blue-400 font-medium mb-6 text-sm">Tahun: 2023</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs text-slate-500 uppercase tracking-widest mb-3">Tautan Proyek</h3>
                  <div className="flex flex-col gap-3">
                    <a href="https://github.com/danandak/rpl-kingdesign" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-700">
                      <span>GitHub Repository</span>
                      <span className="text-xs text-slate-500">↗</span>
                    </a>
                    <a href="https://www.canva.com/design/DAFgK85ec_g/7fIbAU6RQD_tWT7Ki6Wh_w/view?utm_content=DAFgK85ec_g&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-700">
                      <span>Presentasi Bisnis</span>
                      <span className="text-xs text-slate-500">↗</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs text-slate-500 uppercase tracking-widest mb-2">Peran Saya</h3>
                  <p className="text-sm text-slate-300">Web Developer & Business Planner</p>
                </div>
                <div>
                  <h3 className="text-xs text-slate-500 uppercase tracking-widest mb-2">Teknologi</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">PHP Native</span>
                    <span className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-300">Web Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-lg font-bold text-white mb-3">Deskripsi Proyek</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Platform profil bisnis jasa desain grafis yang mencakup modul pemrosesan transaksi. Berhasil mencapai status Top 100 pada Program Mahasiswa Wirausaha (PMW).
              </p>
              <h3 className="text-lg font-bold text-white mb-3">Kontribusi Teknis & Bisnis</h3>
              <ul className="list-disc list-inside text-slate-400 text-sm space-y-3 leading-relaxed">
                <li>Mengembangkan logika pemrosesan transaksi pemesanan desain menggunakan PHP.</li>
                <li>Menyusun dokumentasi teknis dan proposal bisnis untuk keperluan kompetisi.</li>
                <li>Bertanggung jawab dalam presentasi teknis solusi dihadapan panel penguji PMW.</li>
              </ul>
            </div>
          </div>
        </article>

      </section>
    </main>
  );
}