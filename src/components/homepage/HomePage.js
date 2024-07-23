"use client"
import React from 'react'
import Hero from './Hero'
import { motion } from "framer-motion";
import Link from "next/link";
import SecondHero from './SecondHero';

const HomePage = () => {
  return (
    <div className='flex-col w-full'>
        <Hero/>
        <SecondHero/>
    </div>
  )
}

export default HomePage