"use client"
import React from 'react'
import Hero from './Hero'
import { motion } from "framer-motion";
import Link from "next/link";
import DespreNoi from './DespreNoi';

const HomePage = () => {
  return (
    <div className='flex-col w-full'>
        <Hero/>
        <DespreNoi/>
    </div>
  )
}

export default HomePage