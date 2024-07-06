"use client"
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"

import portfolio from "../../public/portfolio.webp"
import Blogs from "../../public/blogweb.webp"

export default function HoverLinks() {
  return (
    <section className='min-h-screen overflow-x-hidden bg-neutral-950 p-4 md:p-8'>
      <div className="mx-auto max-w-9xl ">
        <Link
          heading="Portfolio"
          subheading="Portfolio Website made using  NextJS"
          imgSrc="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="About"
          subheading="Website made using  NextJS"
          imgSrc="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Projects"
          subheading="Website made using  NextJS"
          imgSrc="https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Education"
          subheading="Website made using  NextJS"
          imgSrc="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D    "
          href="#"
        />
        
      </div>
   </section>
  )
}

const Link = ({ heading, subheading, imgSrc, href }) => {
  const ref=useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring=useSpring(y)
  
  const top=useTransform(ySpring, [0.5, -0.5],["40%","60%"])
  const left=useTransform(xSpring, [0.5, -0.5],["60%","70%"])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
   
    x.set(xPct)
    y.set(yPct)
  }

  return <motion.a ref={ref} onMouseMove={handleMouseMove} href={href} initial="initial" whileHover="whileHover" className='group  relative flex items-center justify-between  border-b-2 border-neutral-700 py-4  transition-colors hover:border-neutral-50 duration-500 md:py-6'>
    <div>
      <motion.span
        variants={{
        initial: {
          x: 0
          
        },
        whileHover: {
          x: -16,
        },
        }}
        transition={{
          type: "spring",
          delayChildren: 0.25,
          staggerChildren:0.08
      }}
        className='duration-800 relative z-10 block text-4xl font-bold text-neutral-500 transition-colors  md:text-6xl group-hover:text-neutral-50'>
        {heading.split("").map((l, i) => {
          return <motion.span variants={{
        initial: {
          x: 0
          
        },
        whileHover: {
          x: 16,
        },
          }}
        transition={{
        type:"spring"
      }}
            className='inline-block' key={i}>{l}</motion.span>
        })}
      </motion.span>
      <span className='relative z-10 mt-2 block text-neutral-500 transition-colors duration-500 group-hover:text-neutral-100'>{subheading}</span>
    </div>
    <motion.img
    variants={{
        initial: {
        scale: 0,
        rotate:"-10.5deg"
        },
        whileHover: {
          scale: 1,
        rotate:"10.5deg"
        },
        }}
      style={{
      top,
      left,
      translateX: '-50%',
      translateY:'-50%',
      }}
      transition={{
        type:"spring"
      }}
      className='absolute z-0 h-24 w-32 rounded-lg object-cover md:h-44 md:w-64' src={imgSrc} alt={heading} />
    <motion.div
      variants={{
        initial: {
          x: "25%",
          opacity: 0,
          
        },
        whileHover: {
          x: "0%",
          opacity: 1,
        },
      }}
      transition={{
       
        type:"spring"
      }}
      className='relative z-10 p-4'>
      <FiArrowRight className='text-5xl text-neutral-50'/>
      </motion.div>
  </motion.a>;
};