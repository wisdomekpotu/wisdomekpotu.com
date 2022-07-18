import React from 'react'
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Project_Card from "../components/Project_Card"
import Get_in_touch from '../components/Get_in_touch'
import Navbar from '../components/Navbar'
import Featured_Post from '../components/Featured_Post'
import Tools from '../components/Tools'



export default function index() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Tools/>
    <Project_Card/>
    <Featured_Post/>
    <Get_in_touch/>
    <Footer/>
    </>
  )
}
