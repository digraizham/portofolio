import React from "react";
import Link from "next/link";

export default function DetailPelatihan() {
  const finalProjects = [
    {
      kategori: "SQL",
      title: "Final Project: SQL for Data Analysis",
      format: "PDF Presentation",
      desc: "Analisis mendalam terkait performa akuisisi pelanggan, pola konversi dari berbagai channel (Website, Mobile App, Offline Store), serta evaluasi waktu (retensi) menuju pembelian pertama guna merumuskan strategi percepatan transaksi.",
      link: "https://drive.google.com/file/d/19oxFKSRos-f_CvEhYTeNZEn6oKZQFsn0/view?usp=sharing",
      icon: "🗄️",
      color: "from-blue-400 to-cyan-400",
      glow: "rgba(59,130,246,0.15)",
      borderColor: "group-hover:border-blue-500/50",
    },
    {
      kategori: "Python",
      title: "Final Project: Python for Data Analysis",
      format: "PDF Presentation",
      desc: "Eksplorasi data penjualan menggunakan Python (Pandas) untuk mengidentifikasi pola transaksi, seperti perbandingan penurunan performa 29,93% di akhir pekan (weekend) dibanding hari kerja (weekday), serta merumuskan rekomendasi promosi.",
      link: "https://drive.google.com/file/d/1R_tW-T9y2zvYvyEN2uMAmQmoQchlstop/view?usp=sharing",
      icon: "💻",
      color: "from-emerald-400 to-teal-400",
      glow: "rgba(16,185,129,0.15)",
      borderColor: "group-hover:border-emerald-500/50",
    },
    {
      kategori: "Data Viz",
      title: "Final Project: Data Visualization",
      format: "PDF Presentation",
      desc: "Perancangan visualisasi data untuk evaluasi performa bisnis tahun 2022 (Net Profit 2,01 Miliar). Mencakup analisis profitabilitas produk unggulan (Mobiles & Computing) serta dominasi preferensi metode pembayaran Cash on Delivery (COD).",
      link: "https://drive.google.com/file/d/1AMsBJiNbTWylU3rIbD8yFDrEQW1-FHyV/view?usp=sharing",
      icon: "📊",
      color: "from-amber-400 to-orange-400",
      glow: "rgba(245,158,11,0.15)",
      borderColor: "group-hover:border-amber-500/50",
    },
  ];

  const minitasks = [
    {
      sesi: "Sesi 2",
      title: "Introduction to Data Analytics",
      format: "Google Slides",
      desc: "Pembuatan Analytical Thinking Framework untuk memecahkan masalah bisnis, seperti menganalisis penyebab penurunan akuisisi customer dan lonjakan waktu tunggu transaksi.",
      link: "https://docs.google.com/presentation/d/1XFptjLVkB7RnhIS5xIQ1-fn6597Qrrib/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📽️",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      sesi: "Sesi 3",
      title: "Basic Statistics",
      format: "Google Sheets",
      desc: "Praktik perhitungan statistika dasar (Mean, Median, Mode, Standard Deviation, Z-Score, Percentile) untuk menganalisis data pengunjung, SLA transaksi, dan penukaran voucher.",
      link: "https://docs.google.com/spreadsheets/d/1sDKn0I-Fl3mteQsRvB6U7npM8O_eI2vb/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📊",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      sesi: "Sesi 4",
      title: "Intro to Problem Solving MiniTask",
      format: "Google Slides",
      desc: "Penerapan kerangka problem solving untuk menganalisis isu penurunan pendapatan dan lonjakan biaya operasional pada studi kasus Halojek, serta merumuskan langkah penanggulangan.",
      link: "https://docs.google.com/presentation/d/17slQgiU7jyupbc2TEusuXP2aet_ZnYLg/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📽️",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      sesi: "Sesi 5",
      title: "Data Formatting and Validation",
      format: "Google Sheets",
      desc: "Pengolahan dataset Superstore yang meliputi proses Data Formatting, penanganan Data Duplicates, dan Data Validation menggunakan spreadsheet.",
      link: "https://docs.google.com/spreadsheets/d/1UyXbCwJGWwOkWiaeC7_5f1IyezmyEQa-VEt6ePy1xyY/edit?usp=sharing",
      icon: "📈",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      sesi: "Sesi 6",
      title: "SQL Basic 1",
      format: "Google Slides",
      desc: 'Pengenalan dasar SQL dengan praktik membuat database "tokopaedi" dan merancang tabel "orders" beserta penentuan tipe data menggunakan PostgreSQL/BigQuery.',
      link: "https://docs.google.com/presentation/d/1nT-FiUp3JzR76pGAdk1mnN1oZ98_184k/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📑",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      sesi: "Sesi 7",
      title: "SQL Basic 2",
      format: "Google Slides",
      desc: "Praktik query SQL dasar menggunakan klausa WHERE, LIKE, dan EXTRACT untuk memfilter data konsumen berdasarkan segment, kategori produk, dan kota.",
      link: "https://docs.google.com/presentation/d/1CY8c12VUD-mQIyMa_0Zz21nwpxolIuFU/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📑",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      sesi: "Sesi 8",
      title: "SQL Basic 3",
      format: "Google Slides",
      desc: "Penggunaan query SQL tingkat lanjut dengan klausa AND, OR, BETWEEN, EXTRACT, dan ORDER BY untuk memfilter transaksi yang menguntungkan dan merugikan.",
      link: "https://docs.google.com/presentation/d/1iV15PzOx3EHtQxqGBNyCoU96N1oAHwfW/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📽️",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      sesi: "Sesi 9",
      title: "Advanced SQL 1",
      format: "Google Slides",
      desc: "Praktik analisis data di SQL menggunakan fungsi agregasi seperti COUNT DISTINCT, SUM, dan GROUP BY untuk mencari produk terlaris dan merugikan.",
      link: "https://docs.google.com/presentation/d/1Qx9jYdw-0Ps0cPBuOj3-HmlZx6jNtZbX/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📑",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      sesi: "Sesi 10",
      title: "Advanced SQL 2",
      format: "Google Slides",
      desc: "Analisis data menggunakan SQL tingkat lanjut (Subquery dan CTE) untuk menentukan kota dengan revenue tertinggi serta menghitung rata-rata spending per konsumen.",
      link: "https://docs.google.com/presentation/d/1gjWBl7LGCWEZqZbMo8YA0XKgw_vscO-T/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📽️",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      sesi: "Sesi 11",
      title: "SQL Technical Interview Case Studies",
      format: "Google Slides",
      desc: "Penyelesaian studi kasus SQL Interview (Duplicate job listings, Card issued difference, Sending vs Opening snaps) menggunakan fungsi agregasi, CASE WHEN, dan Common Table Expressions (CTE).",
      link: "https://docs.google.com/presentation/d/1LU9IFUl-80kHNuTgIy5AEe7xhwkHJen3/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📑",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      sesi: "Sesi 12",
      title: "Data Analysis with Python 1: Basic Python + Project 1",
      format: "Google Slides",
      desc: "Pengenalan dasar pemrograman Python menggunakan Google Colab dengan fokus pada pembuatan dan manipulasi struktur data Dictionary untuk mengelola biodata diri.",
      link: "https://docs.google.com/presentation/d/1s4lyEtEObbF3iWAI76dgPwtUvKtLlnM_/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📽️",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      sesi: "Sesi 13",
      title: "Data Analysis with Python 2: Work with Numpy and Pandas Study Case",
      format: "Google Colab",
      desc: "Eksplorasi dan manipulasi data tabular menggunakan library Pandas, mencakup proses filtering, sorting, serta visualisasi tren data migrasi menggunakan line plot Matplotlib.",
      link: "https://colab.research.google.com/drive/1MCzexf9-mNgSchC0Cjswssg6jbyek2Wq?usp=sharing",
      icon: "💻",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      sesi: "Sesi 14",
      title: "Data Analysis with Python 3: Case Study",
      format: "Google Colab",
      desc: "Pengaplikasian Python dalam analisis data, meliputi pengelolaan tipe data tanggal (date), pengelompokan dengan GroupBy, pembuatan fungsi kustom pada DataFrame, serta visualisasi bar chart.",
      link: "https://colab.research.google.com/drive/154fborKqmsg7ReYiKcbAgOUKCQBIm9lw?usp=sharing",
      icon: "💻",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      sesi: "Sesi 15",
      title: "Data Visualisation 1: Basic Data Viz + Project",
      format: "Google Slides",
      desc: "Pembuatan visualisasi data penjualan (Sales Data), perancangan dashboard interaktif, serta penyusunan storyline bisnis komprehensif untuk menganalisis performa wilayah dan profitabilitas.",
      link: "https://docs.google.com/presentation/d/1nFbV2cxHxwzp1y9i9eWfz3GToz5-6tms/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true",
      icon: "📑",
      color: "text-yellow-400",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* Background Decorative Animated Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-[8000ms]"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none animate-pulse duration-[12000ms]"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none animate-pulse duration-[10000ms]"></div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-900 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link href="/#training" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
            <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">←</span> Kembali ke Beranda
          </Link>
        </div>
      </nav>

      {/* Header Halaman */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center md:text-left relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-purple-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.1)] animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span>
          Completed Bootcamp
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
          Data Analysis: Fullstack Intensive
        </h1>
        <div className="max-w-3xl relative mt-6 p-5 md:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md overflow-hidden group hover:bg-slate-900/60 hover:border-slate-700/50 transition-all duration-300 shadow-lg shadow-black/20">
          {/* Garis aksen vertikal di sebelah kiri */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>

          <p className="text-slate-400 text-sm leading-relaxed text-justify md:text-left">
            Program <span className="text-slate-200 font-semibold">Bootcamp Data Analysis: Fullstack Intensive</span> di MySkill membekali saya dengan
            kompetensi analitik <i className="text-slate-300">end-to-end</i>. Mulai dari{" "}
            <span className="text-blue-400 font-medium">business problem solving</span>, pengolahan statistik, hingga manipulasi data skala besar menggunakan{" "}
            <span className="text-blue-400 font-medium">SQL tingkat lanjut</span>.
            <br />
            <br />
            Melalui berbagai studi kasus dan tiga proyek akhir, saya mengasah kemampuan pengolahan data dengan{" "}
            <span className="text-emerald-400 font-medium">Python (Pandas)</span> serta perancangan visualisasi interaktif. Keseluruhan proses ini bermuara pada
            keahlian <span className="text-purple-400 font-medium">business storytelling</span> untuk merumuskan rekomendasi strategis berbasis data{" "}
            <i className="text-slate-500 text-xs">(data-driven)</i>, seperti taktik percepatan akuisisi pelanggan, promosi akhir pekan, hingga evaluasi
            profitabilitas operasional.
          </p>
        </div>
      </section>

      {/* Section 1: Final Project Bootcamp */}
      <section className="max-w-4xl mx-auto px-6 pb-16 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Final Project Bootcamp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-900 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {finalProjects.map((project, index) => (
            <div
              key={index}
              className={`group p-6 md:p-8 rounded-3xl bg-slate-900/20 border border-slate-900 ${project.borderColor} transition-all duration-500 ease-out flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden backdrop-blur-sm hover:-translate-y-1.5`}
              style={{
                boxShadow: `hover: 0 20px 40px -15px ${project.glow}`,
              }}
            >
              {/* Decorative Glow Canvas Effect */}
              <div
                className={`absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-700 pointer-events-none -z-10 bg-gradient-to-br ${project.color}`}
              />

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl shadow-inner transition-transform duration-300 group-hover:scale-110">
                    {project.icon}
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950 text-[10px] font-mono text-slate-400 tracking-wider uppercase border border-slate-800">
                      {project.kategori}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className={`text-xs font-bold mb-3 bg-gradient-to-r ${project.color} text-transparent bg-clip-text uppercase tracking-widest font-mono`}>
                  {project.format}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl transition-colors duration-300 group-hover:text-slate-300">{project.desc}</p>
              </div>

              <div className="w-full md:w-auto pt-2 md:pt-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-white text-slate-300 hover:text-slate-950 text-sm font-semibold transition-all duration-300 border border-slate-800 hover:border-white shadow-xl group/btn whitespace-nowrap"
                >
                  Lihat Project
                  <span className="group-hover/btn:translate-x-1.5 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Minitask Bootcamp */}
      <section className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight bg-clip-text bg-gradient-to-r from-white to-slate-400">Minitask Bootcamp</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-900 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {minitasks.map((task, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-3xl bg-slate-900/10 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/30 hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between h-full relative overflow-hidden backdrop-blur-sm hover:shadow-[0_15px_30px_-15px_rgba(59,130,246,0.08)]"
            >
              {/* Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/0 group-hover:bg-blue-500/[0.03] rounded-full blur-2xl transition-all duration-500 pointer-events-none"></div>

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center text-2xl shadow-inner transition-transform duration-300 group-hover:scale-105">
                    {task.icon}
                  </div>
                  <span className="px-3 py-1 rounded-md bg-slate-950 text-xs font-mono text-slate-500 group-hover:text-slate-400 tracking-wider uppercase border border-slate-900 transition-colors">
                    {task.sesi}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{task.title}</h3>
                <span className={`inline-block text-[10px] font-mono font-bold mb-4 px-2.5 py-0.5 rounded border ${task.color} uppercase tracking-widest`}>
                  {task.format}
                </span>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-300">{task.desc}</p>
              </div>

              <a
                href={task.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-slate-950 hover:bg-blue-600/10 border border-slate-900 hover:border-blue-500/30 text-slate-400 hover:text-blue-400 text-sm font-semibold transition-all duration-300 group/btn"
              >
                Lihat Pekerjaan
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
