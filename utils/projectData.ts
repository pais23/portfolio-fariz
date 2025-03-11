import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';
import { FaLaravel, FaReact } from 'react-icons/fa';
import { SiCodeigniter, SiFlutter } from 'react-icons/si';

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
import pt44 from '../public/suzuki/suzuki2.png';
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
import pt9 from '../public/mycukai/mycukai1.png';
import pt91 from '../public/mycukai/mycukai2.png';
import pt92 from '../public/mycukai/mycukai3.png';
import pt10 from '../public/eroses/eroses1.png';
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
import image_wardah5 from '../public/wardah/wardah5.png';
import image_wardah6 from '../public/wardah/wardah6.png';
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

export const projectImages: StaticImageData[][] = [
  [pt2, pt22, pt23],
  [pt3, pt33, pt34, pt35, pt36],
  [pt4, pt44, pt45],
  [pt5, pt55, pt56, pt57],
  [pt6, pt66, pt67, pt68],
  [pt7, pt71, pt72, pt73, pt74, pt75],
  [pt8, pt81, pt82, pt83, pt84, pt85, pt86],
  [pt9, pt91, pt92],
  [image_jabfung1, image_jabfung2, image_jabfung3, image_jabfung4],
  [pt10, pt101, pt102, pt103],
  [image_pansel1, image_pansel2, image_pansel3, image_pansel4, image_pansel5, image_pansel6],
  [image_wardah1, image_wardah2, image_wardah3, image_wardah4, image_wardah5, image_wardah6, image_wardah7, image_wardah8],
  [image_portal1, image_portal2, image_portal3, image_portal4, image_portal5, image_portal6]
];

export const projectMainImages: StaticImageData[] = [
  logoTnde,
  logoCrms,
  logoEbidding,
  logoSimkeu,
  logoKliq,
  logoBiz,
  logoBadjoean,
  logoMycukai,
  logoJabfung,
  logoEroses,
  logoPansel,
  logoWardah,
  logoPortal
];

export const projectDescriptionHeaders: string[] = [
  "TNDE",
  "CRMS",
  "E-BIDDING",
  "SIMKEU",
  "KLIQ",
  "BIZ SERVICE",
  "D'BADJOEAN",
  "MYCUKAI",
  "JABFUNG",
  "EROSES",
  "PANSEL",
  "WARDAH",
  "PORTAL"
];

export const projectDescriptions = {
  id: [
    "TNDE: Sistem manajemen dokumen untuk Bandara Internasional Jawa Barat, dikembangkan dengan Laravel dan MySQL.",
    "CRMS (City Road Management System): Berkolaborasi dengan Kementerian Pekerjaan Umum dan Perumahan Rakyat, dibangun menggunakan CodeIgniter dan PostgreSQL.",
    "E-Procurement Application for PT. SUZUKI Indomobil: Dikembangkan menggunakan CodeIgniter dan MySQL.",
    "SIMKEU: Sistem Keuangan untuk Kementerian Investasi/BKPM. Dibangun dengan ReactJS, Laravel Lumen, dan PostgreSQL.",
    "KLIQ: Aplikasi multiplatform untuk Brunei Darussalam, dikembangkan menggunakan Laravel dan MySQL.",
    "Biz Services: Aplikasi untuk mengelola layanan di Brunei Darussalam, dikembangkan dengan Flutter, Laravel, dan MySQL.",
    "D'Badjoean: Aplikasi untuk mengelola bisnis pakaian dan aksesoris, dikembangkan menggunakan Laravel dan MySQL.",
    "MyCukai: Aplikasi yang digunakan di Malaysia untuk mengelola perpajakan, khususnya di Kementerian Keuangan. Dibangun dengan Laravel dan MySQL.",
    "Jabfung: Sistem Keuangan untuk Kementerian Investasi/BKPM. Dibangun dengan NextJS, AdonisJS, dan PostgreSQL.",
    "eRoses: Aplikasi yang digunakan di Malaysia, khususnya untuk Kementerian Dalam Negeri. Dibangun dengan ReactJS",
    "Pansel: Sistem Keuangan untuk Kementerian Investasi/BKPM. Dibangun dengan NextJS, AdonisJS, dan PostgreSQL.",
    "Wardah: Aplikasi untuk membantu menentukan shade dari kulit, terdapat fitur skin tone calculator. Dibangun dengan ReactJS, Vite, Laravel dan MySQL.",
    "Portal: Sistem Keuangan untuk Kementerian Investasi/BKPM. Dibangun dengan ReactJS, Laravel Lumen, dan PostgreSQL."
  ],
  en: [
    "TNDE: Document management system for West Java International Airport, developed with Laravel and MySQL.",
    "CRMS (City Road Management System): Collaborated with the Ministry of Public Works and Housing, built using CodeIgniter and PostgreSQL.",
    "E-Procurement Application for PT. SUZUKI Indomobil: Developed using CodeIgniter and MySQL.",
    "SIMKEU: Financial System for the Ministry of Investment/BKPM. Built with ReactJS, Laravel Lumen, and PostgreSQL.",
    "KLIQ: Multiplatform application for Brunei Darussalam, developed using Laravel and MySQL.",
    "Biz Services: Application to manage services in Brunei Darussalam, developed with Flutter, Laravel, and MySQL.",
    "D'Badjoean: Application to manage clothing and accessories business, developed using Laravel and MySQL.",
    "MyCukai: Application used in Malaysia for tax management, specifically in the Ministry of Finance. Built with Laravel and MySQL.",
    "Jabfung: Financial System for the Ministry of Investment/BKPM. Built with NextJS, AdonisJS, and PostgreSQL.",
    "eRoses: Application used in Malaysia, specifically for the Ministry of Home Affairs. Built with ReactJS",
    "Pansel: Financial System for the Ministry of Investment/BKPM. Built with NextJS, AdonisJS, and PostgreSQL.",
    "Wardah: Application to help determine skin tone, with a skin tone calculator feature. Built with ReactJS, Vite, Laravel and MySQL.",
    "Portal: Financial System for the Ministry of Investment/BKPM. Built with ReactJS, Laravel Lumen, and PostgreSQL."
  ]
};

export const projectIcons = [
  { icon: FaLaravel, key: "laravel" },
  { icon: SiCodeigniter, key: "codeigniter" },
  { icon: SiCodeigniter, key: "codeigniter" },
  { icon: FaReact, key: "react" },
  { icon: FaLaravel, key: "laravel" },
  { icon: SiFlutter, key: "flutter" },
  { icon: FaLaravel, key: "laravel" },
  { icon: FaLaravel, key: "laravel" },
  { icon: FaReact, key: "react" },
  { icon: FaReact, key: "react" },
  { icon: FaReact, key: "react" },
  { icon: FaReact, key: "react" },
  { icon: FaReact, key: "react" },
]; 