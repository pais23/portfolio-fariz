import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub} from "react-icons/ai";
import Image from 'next/image';
import avatar from '../public/my-avatar.png';
import android from '../public/android.png';
import website from '../public/website.png';
import vector from '../public/vector.png';
import pt1 from '../public/pt1.jpg';
import pt2 from '../public/pt2.jpg';
import pt3 from '../public/pt3.jpg';
import pt4 from '../public/pt4.jpg';
import pt5 from '../public/pt5.jpg';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Portofolio Fariz Nur Masyhuri</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'> 
        <section className="min-h-screen">
          <nav className="py-10 mb-1 flex justify-between">
            <h1 className='text-xl font-burtons dark:text-white'>Personal Portfolio</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96'>
            <Image src={avatar} layout="fill" objectFit='cover' alt='object image'/>
          </div>
          <div className='text-center p-5'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Fariz Nur Masyhuri</h2>
            <h3 className='text-2xl py-2 md-text-3xl dark:text-white'>Web & Android Developer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-gray-200'>
              Seorang pembuat aplikasi android dan website yang mempunyai pengalaman bekerja 
              selama 2 tahun dan menyukai dunia pemrograman. Mari mengenal lebih lanjut tentang saya dibawah ini!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16  text-gray-600 dark:text-gray-200'>
            <a href="https://github.com/pais23"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/fariznur/"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/paris.ssh/"><AiFillInstagram /></a>
            
          </div>
          
        </section>
        
        {/* Section 2 */}

        <section>
          <div>
            <h3 className='text-3xl py-5 mt-10 text-center dark:text-white'>Kemampuan Saya</h3>
            <p className='text-md py-2 leading-8 text-center max-w-4xl mx-auto text-gray-800 dark:text-white'>
              Selama saya bekerja selama 2 tahun, saya telah bekerja sama dengan beberapa <span className='text-teal-500'>  instansi pemerintahan </span> 
              dan juga <span className='text-teal-500'> berkolaborasi </span>dengan orang-orang yang berbakat dalam membuat website untuk penggunaan 
              bisnis dan konsumen. 
            </p>
            <p className='text-md py-2 leading-8 text-center text-gray-800 dark:text-white'>
              Saya menawarkan layanan untuk membuat website dan juga aplikasi android.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={website} width={100} height={100} alt='design image' className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Website</h3>
              <p className='py-2'>
                Membuat website yang responsive dan nyaman untuk dilihat sesuai dengan kebutuhan anda.
              </p>
              <h4 className='py-4 text-teal-600'>Dibuat Menggunakan</h4>
              <p className='text-gray-800 py-1'>Laravel</p>
              <p className='text-gray-800 py-1'>React.js</p>
              <p className='text-gray-800 py-1'>Next.js</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={android} width={100} height={100} alt='design image' className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Aplikasi Android</h3>
              <p className='py-2'>
                Membuat aplikasi android yang elegan sesuai dengan yang anda butuhkan.
              </p>
              <h4 className='py-4 text-teal-600'>Dibuat Menggunakan</h4>
              <p className='text-gray-800 py-1'>Java</p>
              <p className='text-gray-800 py-1'>Flutter</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <div>
            <h3 className='text-3xl py-1 text-center dark:text-white'>Portofolio</h3>
            <p className='text-md py-2 leading-8 text-center text-gray-800 dark:text-white'>
              Berikut ini merupakan tampilan dari website dan aplikasi android yang sudah saya kerjakan.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={pt4} alt="project1" className='rounded-lg object-cover' width={'100'} height={'100'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={pt3} alt="project2" className='rounded-lg object-cover' width={'100'} height={'100'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={pt1} alt="project1" className='rounded-lg object-cover' width={'100'} height={'100'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={pt2} alt="project2" className='rounded-lg object-cover' width={'100'} height={'100'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={pt5} alt="project1" className='rounded-lg object-cover' width={'100'} height={'100'} layout="responsive"/>
            </div>
          </div>
        </section>
 
      </main>
    </div>
  )
}
