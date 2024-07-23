"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav";
import Image from "next/image";
import transparentLogo from "/public/images/11.png";
import { Button } from "../ui/button";
import whatsappLogo from "/public/images/whatsapp.svg";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <div className={styles.el}>
          <Link href="/">
            {/* <Image
              className="flex justify-center items-center"
              src={transparentLogo}
              width={80}
              height={80}
              alt="logo"
            /> */}
            <p>logo</p>
          </Link>
        </div>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Meniu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Inchide
            </motion.p>
          </div>
        </div>
        <div className={styles.shopContainer}>
          <Button variant="link" onClick={() => window.open("https://wa.me/40722334455")}>
            <Image className="mr-2" src={whatsappLogo} width={20} height={20} alt="wapp" />
            <p className="hidden md:flex">Whatsapp</p>
          </Button>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
