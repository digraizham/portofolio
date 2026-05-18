import React from 'react';
import Link from 'next/link';

export default function DetailPelatihan() {
  const minitasks = [
    {
      sesi: 'Sesi 2',
      title: 'Jawaban Minitask Sesi 2',
      format: 'Google Slides',
      desc: 'Tugas presentasi yang mencakup pemahaman konsep dasar dan pelaporan analitik.',
      link: 'https://docs.google.com/presentation/d/1XFptjLVkB7RnhIS5xIQ1-fn6597Qrrib/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📽️',
      color: 'text-yellow-400'
    },
    {
      sesi: 'Sesi 3',
      title: 'Jawaban Minitask Sesi 3',
      format: 'Google Sheets',
      desc: 'Praktik pengolahan data mentah, pembersihan data (data cleaning), dan penggunaan formula spreadsheet.',
      link: 'https://docs.google.com/spreadsheets/d/1sDKn0I-Fl3mteQsRvB6U7npM8O_eI2vb/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📊',
      color: 'text-green-400'
    },
    {
      sesi: 'Sesi 4',
      title: 'Jawaban Minitask Sesi 4',
      format: 'Google Slides',
      desc: 'Pendalaman analisis data dan teknik visualisasi untuk presentasi hasil temuan.',
      link: 'https://docs.google.com/presentation/d/17slQgiU7jyupbc2TEusuXP2aet_ZnYLg/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📽️',
      color: 'text-yellow-400'
    },
    {
      sesi: 'Sesi 5',
      title: 'Jawaban Minitask Sesi 5',
      format: 'Google Sheets',
      desc: 'Analisis data lanjutan menggunakan pivot table dan ekstraksi wawasan (insights) dari dataset.',
      link: 'https://docs.google.com/spreadsheets/d/1UyXbCwJGWwOkWiaeC7_5f1IyezmyEQa-VEt6ePy1xyY/edit?usp=sharing',
      icon: '📈',
      color: 'text-green-400'
    },
    {
      sesi: 'Sesi 6',
      title: 'Jawaban Minitask Sesi 6',
      format: 'Google Slides',
      desc: 'Praktik pembuatan presentasi data dan komunikasi insight untuk stakeholder.',
      link: 'https://docs.google.com/presentation/d/1nT-FiUp3JzR76pGAdk1mnN1oZ98_184k/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📑',
      color: 'text-yellow-400'
    },
    {
      sesi: 'Sesi 7',
      title: 'Jawaban Minitask Sesi 7',
      format: 'Google Slides',
      desc: 'Penyusunan visualisasi data dan pembuatan deck presentasi untuk mengomunikasikan hasil temuan data.',
      link: 'https://docs.google.com/presentation/d/1CY8c12VUD-mQIyMa_0Zz21nwpxolIuFU/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📑',
      color: 'text-yellow-400'
    },
    {
      sesi: 'Sesi 8',
      title: 'Jawaban Minitask Sesi 8',
      format: 'Google Slides',
      desc: 'Praktik dan penugasan lanjutan terkait analisis data dan pembuatan laporan presentasi.',
      link: 'https://docs.google.com/presentation/d/1iV15PzOx3EHtQxqGBNyCoU96N1oAHwfW/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📽️',
      color: 'text-yellow-400'
    },
    {
      sesi: 'Sesi 9',
      title: 'Jawaban Minitask Sesi 9',
      format: 'Google Slides',
      desc: 'Penyusunan deck presentasi akhir dan penyampaian hasil analisis secara efektif.',
      link: 'https://docs.google.com/presentation/d/1Qx9jYdw-0Ps0cPBuOj3-HmlZx6jNtZbX/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📑',
      color: 'text-yellow-400'
    },
    {
      sesi: 'Sesi 10',
      title: 'Jawaban Minitask Sesi 10',
      format: 'Google Slides',
      desc: 'Analisis mendalam dan pengembangan strategi berdasarkan data untuk presentasi bisnis.',
      link: 'https://docs.google.com/presentation/d/1gjWBl7LGCWEZqZbMo8YA0XKgw_vscO-T/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📽️',
      color: 'text-yellow-400'
    },
    {
      sesi: 'Sesi 11',
      title: 'Jawaban Minitask Sesi 11',
      format: 'Google Slides',
      desc: 'Implementasi metrik bisnis dan analisis ROI dengan presentasi komprehensif.',
      link: 'https://docs.google.com/presentation/d/1LU9IFUl-80kHNuTgIy5AEe7xhwkHJen3/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📑',
      color: 'text-yellow-400'
    },
    {
      sesi: 'Sesi 12',
      title: 'Jawaban Minitask Sesi 12',
      format: 'Google Slides',
      desc: 'Analisis prediktif dan forecasting untuk perencanaan strategis dengan visualisasi data.',
      link: 'https://docs.google.com/presentation/d/1s4lyEtEObbF3iWAI76dgPwtUvKtLlnM_/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📽️',
      color: 'text-yellow-400'
    },
    {
      sesi: 'Sesi 13',
      title: 'Jawaban Minitask Sesi 13',
      format: 'Google Colab',
      desc: 'Praktik pemrograman Python untuk analisis data dan machine learning exploration.',
      link: 'https://colab.research.google.com/drive/1MCzexf9-mNgSchC0Cjswssg6jbyek2Wq?usp=sharing',
      icon: '💻',
      color: 'text-blue-400'
    },
    {
      sesi: 'Sesi 14',
      title: 'Jawaban Minitask Sesi 14',
      format: 'Google Colab',
      desc: 'Pengembangan model machine learning dan evaluasi performa dengan Python.',
      link: 'https://colab.research.google.com/drive/154fborKqmsg7ReYiKcbAgOUKCQBIm9lw?usp=sharing',
      icon: '💻',
      color: 'text-blue-400'
    },
    {
      sesi: 'Sesi 15',
      title: 'Jawaban Minitask Sesi 15',
      format: 'Google Slides',
      desc: 'Presentasi akhir project dengan kesimpulan dan rekomendasi berbasis data science.',
      link: 'https://docs.google.com/presentation/d/1nFbV2cxHxwzp1y9i9eWfz3GToz5-6tms/edit?usp=sharing&ouid=106810007812957132184&rtpof=true&sd=true',
      icon: '📑',
      color: 'text-yellow-400'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link href="/#training" className="flex items-center gap-2 hover:text-blue-400 transition-colors text-sm font-medium">
            <span className="text-lg">←</span> Kembali ke Beranda
          </Link>
        </div>
      </nav>

      {/* Header Halaman */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          Ongoing Bootcamp
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Data Analysis: Fullstack Intensive
        </h1>
        <p className="text-slate-400 md:text-lg max-w-2xl leading-relaxed">
          Arsip tugas dan proyek mini (minitask) yang dikerjakan selama mengikuti bootcamp intensif Data Analysis di MySkill.
        </p>
      </section>

      {/* Daftar Minitask */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {minitasks.map((task, index) => (
            <div key={index} className="group p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between h-full relative overflow-hidden">
              {/* Dekorasi Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none"></div>
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl shadow-inner">
                    {task.icon}
                  </div>
                  <span className="px-3 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-400 tracking-widest uppercase">
                    {task.sesi}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
                <p className={`text-xs font-medium mb-4 ${task.color} uppercase tracking-widest`}>
                  {task.format}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {task.desc}
                </p>
              </div>

              <a 
                href={task.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-blue-600/10 hover:bg-blue-600 border border-blue-500/20 hover:border-blue-500 text-blue-400 hover:text-white text-sm font-semibold transition-all group/btn"
              >
                Lihat Pekerjaan
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}