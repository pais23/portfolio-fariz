import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';
import { FaLaravel, FaReact } from 'react-icons/fa';
import { SiCodeigniter, SiFlutter, SiNextdotjs } from 'react-icons/si';

// Import project images
import pt2 from '../public/bijb/bijb.png';
import pt22 from '../public/bijb/admin.png';
import pt23 from '../public/bijb/bijb3.png';
import pt3 from '../public/crms/crms1.png';
import pt33 from '../public/crms/crms6.png';
import pt34 from '../public/crms/crms7.png';
import pt35 from '../public/crms/crms8.png';
import pt36 from '../public/crms/crms9.png';
import pt4 from '../public/suzuki/suzuki1.png';
import pt44 from '../public/suzuki/suzuki3.png';
import pt45 from '../public/suzuki/suzuki3.png';
import pt5 from '../public/bkpm/simkeu/bkpm1.png';
import pt55 from '../public/bkpm/simkeu/bkpm2.png';
import pt56 from '../public/bkpm/simkeu/bkpm3.png';
import pt57 from '../public/bkpm/simkeu/bkpm4.png';
import pt6 from '../public/kliq/kliq1.png';
import pt66 from '../public/kliq/kliq2.png';
import pt67 from '../public/kliq/kliq3.png';
import pt68 from '../public/kliq/kliq4.png';
import pt7 from '../public/biz_service/biz1.jpg';
import pt71 from '../public/biz_service/biz2.jpg';
import pt72 from '../public/biz_service/biz3.jpg';
import pt73 from '../public/biz_service/biz4.jpg';
import pt74 from '../public/biz_service/biz5.jpg';
import pt75 from '../public/biz_service/biz6.jpg';
import pt8 from '../public/dbadjoean/dbadjoean.png';
import pt81 from '../public/dbadjoean/dbadjoean1.png';
import pt82 from '../public/dbadjoean/dbadjoean2.png';
import pt83 from '../public/dbadjoean/dbadjoean3.png';
import pt84 from '../public/dbadjoean/dbadjoean4.png';
import pt85 from '../public/dbadjoean/dbadjoean5.png';
import pt86 from '../public/dbadjoean/dbadjoean6.png';
import pt9 from '../public/mycukai/mycukai2.png';
import pt91 from '../public/mycukai/mycukai2.png';
import pt92 from '../public/mycukai/mycukai3.png';
import pt10 from '../public/eroses/eroses2.png';
import pt101 from '../public/eroses/eroses2.png';
import pt102 from '../public/eroses/eroses3.png';
import pt103 from '../public/eroses/eroses4.png';

import image_jabfung1 from '../public/bkpm/jabfung/jabfung1.png';
import image_jabfung2 from '../public/bkpm/jabfung/jabfung2.png';
import image_jabfung3 from '../public/bkpm/jabfung/jabfung3.png';
import image_jabfung4 from '../public/bkpm/jabfung/jabfung4.png';

import image_pansel1 from '../public/bkpm/pansel/pansel1.png';
import image_pansel2 from '../public/bkpm/pansel/pansel2.png';
import image_pansel3 from '../public/bkpm/pansel/pansel3.png';
import image_pansel4 from '../public/bkpm/pansel/pansel4.png';
import image_pansel5 from '../public/bkpm/pansel/pansel5.png';
import image_pansel6 from '../public/bkpm/pansel/pansel6.png';

import image_portal1 from '../public/bkpm/portal/portal1.png';
import image_portal2 from '../public/bkpm/portal/portal2.png';
import image_portal3 from '../public/bkpm/portal/portal3.png';
import image_portal4 from '../public/bkpm/portal/portal4.png';
import image_portal5 from '../public/bkpm/portal/portal5.png';
import image_portal6 from '../public/bkpm/portal/portal6.png';

import image_wardah1 from '../public/wardah/wardah1.png';
import image_wardah2 from '../public/wardah/wardah2.png';
import image_wardah3 from '../public/wardah/wardah3.png';
import image_wardah4 from '../public/wardah/wardah4.png';
import image_wardah5 from '../public/wardah/wardah7.png';
import image_wardah6 from '../public/wardah/wardah8.png';
import image_wardah7 from '../public/wardah/wardah7.png';
import image_wardah8 from '../public/wardah/wardah8.png';


// Import project logos/main pictures
import logoTnde from '../public/logos/logo-bijb.jpg';
import logoCrms from '../public/logos/logo-pupr.jpg';
import logoEbidding from '../public/logos/logo-suzuki.jpg';
import logoSimkeu from '../public/logos/logo-bkpm.jpg';
import logoKliq from '../public/logos/logo-kliq.jpg';
import logoBiz from '../public/logos/logo-biz.jpg';
import logoBadjoean from '../public/logos/logo-dbajoean.jpg';
import logoMycukai from '../public/logos/logo-mycukai.jpg';
import logoEroses from '../public/logos/logo-eroses.jpg';
import logoJabfung from '../public/logos/logo-bkpm.jpg';
import logoPansel from '../public/logos/logo-bkpm.jpg';
import logoWardah from '../public/logos/logo-wardah.jpg';
import logoPortal from '../public/logos/logo-bkpm.jpg';

export interface DetailedProject {
  id: string;
  name: string;
  client: { id: string; en: string };
  techStack: string[];
  role: { id: string; en: string };
  responsibilities: { id: string[]; en: string[] };
  shortDescription: { id: string; en: string };
  mainImage: StaticImageData;
  images: StaticImageData[];
  iconKey: 'laravel' | 'codeigniter' | 'react' | 'flutter' | 'nextjs';
  category?: 'web' | 'mobile';
}

export const detailedProjects: DetailedProject[] = [
  {
    id: "tnde",
    name: "TNDE",
    client: {
      id: "Bandara Internasional Jawa Barat (BIJB)",
      en: "West Java International Airport (BIJB)"
    },
    techStack: ["Laravel", "MySQL", "PHP", "Bootstrap", "Git"],
    role: {
      id: "Pengembang Backend",
      en: "Backend Developer"
    },
    responsibilities: {
      id: [
        "Merancang dan mengoptimalkan skema database untuk menangani penyimpanan dokumen yang aman dan terkontrol versi.",
        "Mengembangkan REST API modular untuk pelacakan dokumen elektronik cepat dan alur disposisi digital.",
        "Mengimplementasikan kontrol akses berbasis peran (RBAC) yang ketat untuk memastikan kerahasiaan antar divisi bandara."
      ],
      en: [
        "Designed and optimized database schemas to handle secure, version-controlled document storage.",
        "Developed modular REST APIs for fast electronic document tracking and digital routing flows.",
        "Implemented robust role-based access control (RBAC) to ensure confidentiality across airport divisions."
      ]
    },
    shortDescription: {
      id: "Sistem manajemen dokumen canggih dan alur disposisi digital untuk Bandara Internasional Jawa Barat (BIJB).",
      en: "Advanced document management and digital routing system built for West Java International Airport (BIJB)."
    },
    mainImage: logoTnde,
    images: [pt2, pt22, pt23],
    iconKey: "laravel"
  },
  {
    id: "crms",
    name: "CRMS",
    client: {
      id: "Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR)",
      en: "Ministry of Public Works and Housing (PUPR), Indonesia"
    },
    techStack: ["CodeIgniter", "PostgreSQL", "PHP", "Postman", "Git"],
    role: {
      id: "Rekayasa Perangkat Lunak",
      en: "Software Engineer"
    },
    responsibilities: {
      id: [
        "Mengembangkan layanan backend untuk mengevaluasi dan memantau kerusakan jalan di wilayah kota seluruh Indonesia.",
        "Mengoptimalkan kueri database spasial dan agregat untuk menghasilkan visualisasi data berkinerja tinggi.",
        "Mengimplementasikan algoritme pelaporan yang tepat serta ekspor laporan kondisi jalan ke PDF/Excel."
      ],
      en: [
        "Developed backend services for evaluating and monitoring road damages across nationwide municipal areas.",
        "Optimized spatial and aggregate database queries to generate high-performance data visualizers.",
        "Implemented precise reporting algorithms and PDF/Excel generation of road condition indicators."
      ]
    },
    shortDescription: {
      id: "Platform penilaian dan pemantauan kerusakan jalan kota (City Road Management System) yang dikembangkan bersama Kementerian PUPR.",
      en: "City road damage assessment and monitoring platform (City Road Management System) developed with the Ministry of PUPR."
    },
    mainImage: logoCrms,
    images: [pt3, pt33, pt34, pt35, pt36],
    iconKey: "codeigniter"
  },
  {
    id: "ebidding",
    name: "E-BIDDING",
    client: {
      id: "PT. SUZUKI Indomobil Indonesia",
      en: "PT. SUZUKI Indomobil Indonesia"
    },
    techStack: ["CodeIgniter", "MySQL", "PHP", "JavaScript", "Git"],
    role: {
      id: "Rekayasa Perangkat Lunak",
      en: "Software Engineer"
    },
    responsibilities: {
      id: [
        "Merancang modul lelang penawaran digital yang aman untuk komponen otomotif dan layanan.",
        "Merekayasa kontrol konkurensi multi-pengguna untuk mencegah kondisi balapan (race condition) lelang.",
        "Membuat log pelacakan real-time dan pembuatan tanda terima otomatis setelah lelang selesai."
      ],
      en: [
        "Designed highly secure digital bidding auction modules for automotive parts and services.",
        "Engineered multi-user concurrency controls to prevent auction race conditions and synchronize bids.",
        "Created real-time tracking logs and automated receipt generation for successful bid completions."
      ]
    },
    shortDescription: {
      id: "Platform pengadaan elektronik otomatis dan penawaran lelang aman yang dibangun untuk PT. SUZUKI Indomobil.",
      en: "Automated electronic procurement and secure bidding platform built for PT. SUZUKI Indomobil."
    },
    mainImage: logoEbidding,
    images: [pt4, pt44, pt45],
    iconKey: "codeigniter"
  },
  {
    id: "simkeu",
    name: "SIMKEU",
    client: {
      id: "Kementerian Investasi / BKPM",
      en: "Ministry of Investment / BKPM, Indonesia"
    },
    techStack: ["React.js", "Laravel Lumen", "PostgreSQL", "Microservices", "REST API", "Git"],
    role: {
      id: "Pengembang Backend",
      en: "Backend Developer"
    },
    responsibilities: {
      id: [
        "Merekayasa microservices keuangan untuk mengelola alokasi anggaran kementerian dan catatan buku besar real-time.",
        "Mengintegrasikan gerbang pembayaran pihak ketiga dan kas negara melalui saluran API yang aman.",
        "Mengoptimalkan kalkulasi keuangan volume tinggi menggunakan kueri PostgreSQL mentah yang dioptimalkan."
      ],
      en: [
        "Engineered financial microservices managing ministerial budget allocations and real-time ledger records.",
        "Integrated complex third-party payment and national treasury gateways via secure API channels.",
        "Optimized high-volume financial calculations using optimized raw PostgreSQL queries."
      ]
    },
    shortDescription: {
      id: "Sistem manajemen anggaran dan keuangan kementerian berkinerja tinggi untuk Kementerian Investasi/BKPM.",
      en: "High-performance national budget and financial management system for Ministry of Investment/BKPM."
    },
    mainImage: logoSimkeu,
    images: [pt5, pt55, pt56, pt57],
    iconKey: "react"
  },
  {
    id: "kliq",
    name: "KLIQ",
    client: {
      id: "Pemerintah Brunei Darussalam",
      en: "Government / Enterprise of Brunei Darussalam"
    },
    techStack: ["Laravel", "MySQL", "PHP", "Bootstrap", "REST API", "Git"],
    role: {
      id: "Pengembang Backend",
      en: "Backend Developer"
    },
    responsibilities: {
      id: [
        "Memelihara dan meningkatkan endpoint backend berkinerja tinggi untuk portal layanan publik Brunei Darussalam.",
        "Merancang dan mengembangkan panel kontrol admin terstruktur untuk manajemen konten dan log keamanan.",
        "Melakukan pengerasan keamanan dan audit kerentanan berkala pada antarmuka API klien."
      ],
      en: [
        "Maintained and scaled high-traffic backend endpoints for Brunei Darussalam's public service portal.",
        "Designed and developed structured administration control panels for content management and security logs.",
        "Performed security hardening and regular vulnerability audits on client-facing API interfaces."
      ]
    },
    shortDescription: {
      id: "Platform integrasi layanan publik yang aman bagi pengguna di Brunei Darussalam.",
      en: "Secure public service integration platform serving users in Brunei Darussalam."
    },
    mainImage: logoKliq,
    images: [pt6, pt66, pt67, pt68],
    iconKey: "laravel"
  },
  {
    id: "bizservice",
    name: "BIZ SERVICE",
    client: {
      id: "Pemerintah Brunei Darussalam",
      en: "Government / Enterprise of Brunei Darussalam"
    },
    techStack: ["Flutter", "Laravel", "MySQL", "PHP", "REST API", "Git"],
    role: {
      id: "Pengembang Mobile & Backend",
      en: "Mobile & Backend Developer"
    },
    responsibilities: {
      id: [
        "Merekayasa REST API untuk komunikasi tanpa hambatan dengan aplikasi mobile Flutter manajemen bisnis.",
        "Merancang modul sinkronisasi offline untuk memungkinkan penyimpanan cache lokal dan sinkronisasi data bisnis di latar belakang.",
        "Membangun formulir interaktif multi-langkah di mobile dengan manajemen state yang dioptimalkan."
      ],
      en: [
        "Engineered REST APIs for seamless communication with Flutter mobile business management applications.",
        "Designed offline synchronization modules to allow local caching and background synchronization of business data.",
        "Built responsive, interactive multi-step wizard forms on mobile layout with optimized state management."
      ]
    },
    shortDescription: {
      id: "Aplikasi mobile manajemen bisnis dan layanan yang terintegrasi dengan backend Laravel yang aman di Brunei.",
      en: "Business and services management mobile app integrated with secure Laravel backend for Brunei."
    },
    mainImage: logoBiz,
    images: [pt7, pt71, pt72, pt73, pt74, pt75],
    iconKey: "flutter",
    category: "mobile"
  },
  {
    id: "dbadjoean",
    name: "D'BADJOEAN",
    client: {
      id: "D'Badjoean clothing brand, Indonesia",
      en: "D'Badjoean clothing brand, Indonesia"
    },
    techStack: ["Laravel", "MySQL", "PHP", "Bootstrap", "Git"],
    role: {
      id: "Pengembang Full Stack",
      en: "Full Stack Developer"
    },
    responsibilities: {
      id: [
        "Mengembangkan platform e-commerce kustom dan manajemen ritel dilengkapi sistem kontrol inventaris.",
        "Merekayasa dasbor administratif untuk menganalisis kinerja penjualan real-time dan tingkat stok barang.",
        "Membangun antarmuka belanja ramah pengguna dengan alur checkout terstruktur dan email konfirmasi otomatis."
      ],
      en: [
        "Developed a custom e-commerce and retail management platform with inventory control systems.",
        "Engineered an administrative dashboard to analyze real-time sales performance and stock levels.",
        "Created user-friendly shopping experience with structured checkouts and automatic order confirmation emails."
      ]
    },
    shortDescription: {
      id: "Platform manajemen inventaris ritel modern dan checkout e-commerce untuk bisnis pakaian.",
      en: "Modern retail inventory management and e-commerce checkout platform for apparel business."
    },
    mainImage: logoBadjoean,
    images: [pt8, pt81, pt82, pt83, pt84, pt85, pt86],
    iconKey: "laravel"
  },
  {
    id: "mycukai",
    name: "MYCUKAI",
    client: {
      id: "Kementerian Keuangan, Malaysia",
      en: "Ministry of Finance, Malaysia"
    },
    techStack: ["Laravel", "MySQL", "PHP", "Bootstrap", "REST API", "Git"],
    role: {
      id: "Pengembang Backend",
      en: "Backend Developer"
    },
    responsibilities: {
      id: [
        "Membangun logika perhitungan inti untuk penilaian pajak dan aturan pencocokan klasifikasi tarif.",
        "Merancang portal multi-tenant yang aman untuk mengelola pelaporan pajak bagi korporasi nasional.",
        "Merekayasa mesin pembuat laporan Excel/PDF yang mampu memproses jutaan baris data fiskal."
      ],
      en: [
        "Built core calculation logic for tax assessment and tariff classification matching rules.",
        "Designed responsive, secure multi-tenant portals managing tax filings for national corporations.",
        "Engineered Excel/PDF report generation engines capable of processing millions of lines of fiscal data."
      ]
    },
    shortDescription: {
      id: "Platform penilaian perpajakan enterprise dan bea cukai yang dibangun untuk Kementerian Keuangan Malaysia.",
      en: "Enterprise taxation and customs assessment platform built for the Malaysia Ministry of Finance."
    },
    mainImage: logoMycukai,
    images: [pt9, pt91, pt92],
    iconKey: "laravel"
  },
  {
    id: "jabfung",
    name: "JABFUNG",
    client: {
      id: "Kementerian Investasi / BKPM",
      en: "Ministry of Investment / BKPM, Indonesia"
    },
    techStack: ["Next.js", "AdonisJS", "PostgreSQL", "REST API", "TypeScript", "Git"],
    role: {
      id: "Pengembang Backend",
      en: "Backend Developer"
    },
    responsibilities: {
      id: [
        "Merancang backend komprehensif dengan AdonisJS dan TypeScript untuk melacak jabatan fungsional sipil.",
        "Membangun antarmuka frontend dinamis dengan Next.js menggunakan server-side rendering untuk kecepatan optimal.",
        "Mengonfigurasi pipeline integrasi berkelanjutan dan menangani penyebaran server produksi pada jaringan kementerian."
      ],
      en: [
        "Designed a comprehensive backend with AdonisJS and TypeScript to track functional civil service positions (Jabatan Fungsional).",
        "Built dynamic frontend interfaces with Next.js using server-side rendering for optimal speed and search indexing.",
        "Configured continuous integration pipelines and handled production server deployments on secure government networks."
      ]
    },
    shortDescription: {
      id: "Sistem administratif modern yang mengelola perkembangan karir fungsional untuk Kementerian Investasi.",
      en: "Modern administrative system managing functional career progressions for the Ministry of Investment."
    },
    mainImage: logoJabfung,
    images: [image_jabfung1, image_jabfung2, image_jabfung3, image_jabfung4],
    iconKey: "nextjs"
  },
  {
    id: "eroses",
    name: "EROSES",
    client: {
      id: "Kementerian Dalam Negeri, Malaysia",
      en: "Ministry of Home Affairs, Malaysia"
    },
    techStack: ["React.js", "Node.js", "Express", "REST API", "Bootstrap", "Git"],
    role: {
      id: "Pengembang Frontend",
      en: "Frontend Developer"
    },
    responsibilities: {
      id: [
        "Membangun komponen formulir yang responsif dengan validasi sisi klien untuk deklarasi status resmi.",
        "Mengoptimalkan ukuran bundel klien dan mengimplementasikan manajemen state efisien untuk menjaga performa.",
        "Menyelesaikan ketidakkonsistenan tata letak lintas-browser dan memastikan kepatuhan aksesibilitas web."
      ],
      en: [
        "Constructed highly responsive form components with client-side validation for official status declarations.",
        "Optimized client bundle sizes and implemented efficient state management (Redux/Context) to maintain speed.",
        "Resolved cross-browser layout inconsistencies and ensured strict web accessibility compliance."
      ]
    },
    shortDescription: {
      id: "Portal registrasi resmi interaktif yang dirancang untuk Kementerian Dalam Negeri Malaysia.",
      en: "Interactive official registration portal designed for the Malaysia Ministry of Home Affairs."
    },
    mainImage: logoEroses,
    images: [pt10, pt101, pt102, pt103],
    iconKey: "react"
  },
  {
    id: "pansel",
    name: "PANSEL",
    client: {
      id: "Kementerian Investasi / BKPM",
      en: "Ministry of Investment / BKPM, Indonesia"
    },
    techStack: ["Next.js", "AdonisJS", "PostgreSQL", "Microservices", "REST API", "Git"],
    role: {
      id: "Pengembang Backend",
      en: "Backend Developer"
    },
    responsibilities: {
      id: [
        "Mengembangkan mesin penyaringan rekrutmen resmi untuk kandidat tingkat tinggi di Kementerian Investasi.",
        "Mengintegrasikan microservices validasi kandidat dengan sistem penilaian kelayakan otomatis.",
        "Mengamankan database kandidat menggunakan enkripsi AES-256 untuk data identifikasi sensitif."
      ],
      en: [
        "Developed the official recruitment screening engine for high-level candidates at the Ministry of Investment.",
        "Integrated candidate validation microservices with automated qualification rating scoring systems.",
        "Secured candidate databases with AES-256 data encryption for sensitive identification and background checks."
      ]
    },
    shortDescription: {
      id: "Platform seleksi dan penyaringan eksekutif resmi yang direkayasa untuk dewan rekrutmen BKPM.",
      en: "Official executive screening and selection platform engineered for BKPM hiring boards."
    },
    mainImage: logoPansel,
    images: [image_pansel1, image_pansel2, image_pansel3, image_pansel4, image_pansel5, image_pansel6],
    iconKey: "nextjs"
  },
  {
    id: "wardah",
    name: "WARDAH",
    client: {
      id: "PT Paragon Technology and Innovation (Wardah)",
      en: "PT Paragon Technology and Innovation (Wardah), Indonesia"
    },
    techStack: ["React.js", "Vite", "Laravel", "MySQL", "PHP", "Tailwind CSS", "Git"],
    role: {
      id: "Pengembang Full Stack",
      en: "Full Stack Developer"
    },
    responsibilities: {
      id: [
        "Merekayasa kalkulasi matematis warna kulit yang memetakan parameter foto input ke produk kosmetik yang sesuai.",
        "Mengimplementasikan akses kamera langsung di browser dengan pengambilan gambar real-time dan ukuran kanvas dinamis.",
        "Mendesain antarmuka swipe interaktif untuk mencocokkan swatch warna dengan animasi yang responsif."
      ],
      en: [
        "Engineered skin tone mathematical calculations mapping input photo parameters to appropriate cosmetic products.",
        "Implemented direct mobile camera access in browser with real-time capture and canvas sizing.",
        "Styled a smooth, interactive swipe interface highlighting matching color swatches with responsive animations."
      ]
    },
    shortDescription: {
      id: "Kalkulator warna kulit dinamis dan rekomendasi kosmetik yang dibangun untuk Wardah.",
      en: "Dynamic skin tone calculator and cosmetic product recommendation engine built for Wardah."
    },
    mainImage: logoWardah,
    images: [image_wardah1, image_wardah2, image_wardah3, image_wardah4, image_wardah5, image_wardah6, image_wardah7, image_wardah8],
    iconKey: "react",
    category: "mobile"
  },
  {
    id: "portal",
    name: "PORTAL",
    client: {
      id: "Kementerian Investasi / BKPM",
      en: "Ministry of Investment / BKPM, Indonesia"
    },
    techStack: ["React.js", "Laravel Lumen", "PostgreSQL", "Microservices", "REST API", "Git"],
    role: {
      id: "Pengembang Backend",
      en: "Backend Developer"
    },
    responsibilities: {
      id: [
        "Merekayasa gerbang single-sign-on (SSO) terpusat untuk otorisasi kumpulan aplikasi internal BKPM.",
        "Mengimplementasikan manajemen sesi stateless berbasis JWT dan alur pembaruan token otomatis.",
        "Merancang middleware metrik kinerja dan pencatatan kesalahan untuk memantau kesehatan layanan backend."
      ],
      en: [
        "Engineered centralized single-sign-on (SSO) gateway portal authorizing internal BKPM application suites.",
        "Implemented secure JWT-based stateless session management and automated refresh token flows.",
        "Designed performance metrics and error-logging middleware monitoring health of backend services."
      ]
    },
    shortDescription: {
      id: "Portal kementerian internal terpusat dan sistem keamanan single sign-on untuk Kementerian Investasi.",
      en: "Centralized internal enterprise portal and single sign-on security system for Ministry of Investment."
    },
    mainImage: logoPortal,
    images: [image_portal1, image_portal2, image_portal3, image_portal4, image_portal5, image_portal6],
    iconKey: "react"
  }
];

// Backwards compatibility exports
export const projectImages: StaticImageData[][] = detailedProjects.map(p => p.images);
export const projectMainImages: StaticImageData[] = detailedProjects.map(p => p.mainImage);
export const projectDescriptionHeaders: string[] = detailedProjects.map(p => p.name);
export const projectDescriptions = {
  id: detailedProjects.map(p => p.shortDescription.id),
  en: detailedProjects.map(p => p.shortDescription.en)
};
export const projectIcons = detailedProjects.map(p => {
  if (p.iconKey === 'laravel') return { icon: FaLaravel, key: 'laravel' };
  if (p.iconKey === 'codeigniter') return { icon: SiCodeigniter, key: 'codeigniter' };
  if (p.iconKey === 'react') return { icon: FaReact, key: 'react' };
  if (p.iconKey === 'flutter') return { icon: SiFlutter, key: 'flutter' };
  return { icon: SiNextdotjs, key: 'nextjs' };
});
