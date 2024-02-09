import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import SideBar from './pages/SideBar';
import Footer from './pages/Footer';
import Content from './pages/content';
import React, { useEffect, useState } from 'react';



function App() {
  // const [count,setCount]=useState(0)
  // useEffect(()=>{
  //   console.log("Hello ") ;
  // })
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <SideBar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
       
       {/* <h1 className='text-2xl text-white'>Hello Surbhi {count}</h1>
       <button onClick={()=>setCount(count+1)} className='bg-rose-500 p-3'>Click Here</button> */}
       

       

      </div>
    </BrowserRouter>
  );
}

function Home(){
  return <Content title="Home"/>
}

function About(){
  return <Content title="About"/>
}

function Contact(){
  return <Content title="Contact"/>
}
export default App;
