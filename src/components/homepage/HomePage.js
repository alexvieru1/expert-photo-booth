"use client"
import React from 'react'
import Hero from './Hero'
import { motion } from "framer-motion";
import Link from "next/link";
import DespreNoi from './DespreNoi';
import Evenimente from './Evenimente';
import Pachete from './Pachete';
import Footer from '../Footer';
import ServiciiHp from './ServiciiHp';

const HomePage = () => {
  return (
    <div className='flex-col w-full'>
        <Hero/>
        <DespreNoi/>
        <ServiciiHp/>
        <Evenimente/>
        {/* <Pachete/> */}
        <Footer/>
    </div>
  )
}

export default HomePage