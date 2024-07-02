import Head from 'next/head';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaSafari } from 'react-icons/fa';
import styles from "../styles/Home.module.css";
import 'animate.css';

import Image from '@/components/Image'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Dedi Irawan | Linktwoo</title>
          <meta name="description" content="Add a description for your Linktree here." />
          <link rel="shortcut icon" href="faviconn.ico" type="image/x-icon" />
        </Head>
        <main className={styles.main}>
          {/* <Navbar /> */}
          <Image />
          {/* <img className={styles.logo} src="/1688224876902.png" alt="dedi irawan" /> */}
          <p className={styles.description}>Dedi Irawan | Web Developer</p>

          <div className={styles.grid}>
            <a href="https://twitter.com/dediakairawan" target='__blank' className={styles.card}>
              <h2 className="animate__animated animate__fadeIn animate__delay-0.5s"><FaTwitter className="text-xl animate__animated animate__slideInUp" /> X</h2>
            </a>

            <a href="https://www.instagram.com/dediirwannn_/" target='__blank' className={styles.card}>
              <h2 className="animate__animated animate__fadeIn animate__delay-0.5s"><FaInstagram className="text-xl animate__animated animate__slideInUp" /> Instagram</h2>
            </a>

            <a href="https://github.com/dediirawanuti" target='__blank' className={styles.card}>
              <h2 className="animate__animated animate__fadeIn animate__delay-0.5s"><FaGithub className="text-xl animate__animated animate__slideInUp" /> Github</h2>
            </a>

            <a href="https://www.linkedin.com/in/dediirawan024/" target='__blank' className={styles.card}>
              <h2 className="animate__animated animate__fadeIn animate__delay-0.5s"><FaLinkedin className="text-xl animate__animated animate__slideInUp" /> LinkedIn</h2>
            </a>

            <a href="https://dediirawan.my.id" target='__blank' className={styles.card}>
              <h2 className="animate__animated animate__fadeIn animate__delay-0.5s"><FaSafari className="text-xl animate__animated animate__slideInUp" /> Portofolio</h2>
            </a>

          </div>
        </main>
        <footer className={styles.footer}>
          <a href="https://dediirawan.my.id" target='__blank'>Copyright &copy; onlydev.id</a>
        </footer>
      </div>
    </>
  );
}
