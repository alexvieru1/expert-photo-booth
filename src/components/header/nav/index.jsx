'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "Acasă",
    href: "/",
    src: "home.webp"
  },
  {
    title: "Despre Noi",
    href: "/despre-noi",
    src: "despre-noi.webp"
  },
  {
    title: "Evenimente",
    href: "/evenimente",
    src: "evenimente.webp"
  },
  {
    title: "Pachete",
    href: "/pachete",
    src: "pachete.webp"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.webp"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}

