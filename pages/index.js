import React from 'react'
import Footer from "/components/Footer"
import Hero from "/components/Hero"
import Project_Card from "/components/Project_Card"
import Get_in_touch from '../components/Get_in_touch'
import Navbar from '../components/Navbar'



export default function index() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Project_Card/>
    <Get_in_touch/>
    <Footer/>
    </>
  )
}
