"use client"; 
import Image from "next/image";
// import Navbar from '../components/Nav';
import React, { useState } from "react";
import Navbar from '../components/Nav.tsx'


export default function Main() {
  return (
    <>
    <Navbar />
    <main
         className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/images/bg-aicam.png')" }}
      >
      <div className="absolute  inset-0 bg-gray-500 opacity-98 rounded-1" style={{marginBottom:-30 , marginLeft:30, marginRight:30,marginTop:100,backgroundColor: '#D9D9D9'}}>
        {/* <div className="absolute  inset-0 bg-blue-500 opacity-98 rounded-1" style={{marginBottom:10, marginLeft:10, marginRight:10,marginTop:10,backgroundColor: '#074FB5'}}>
       
      
        </div> */}
      
      </div>
    </main>
    </>
  );
}
