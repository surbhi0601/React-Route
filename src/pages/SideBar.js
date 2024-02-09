import '../App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

import React from 'react';
const SideBar = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("Home");
  })
  const [time, setTime] = useState(0)
  useEffect(() => {
    console.log("About ");
  })
  const [round, setRound] = useState(0)
  useEffect(() => {
    console.log("Contact");
  })
  return (

    <nav className=' '>
      <ul>
        <li>
          <Link to="/" className='home text-rose-800 font-bold text-2xl m-3 focus:ml-8' onClick={() => setCount(count + 1)}>Home {count}</Link>
        </li>
        <li>
          <Link to="/about" className='header text-rose-800 font-bold text-2xl m-3 focus:ml-8' onClick={() => setTime(time + 1)}>About {time}</Link>
        </li>
        <li>
          <Link to="/contact" className='sidebar text-rose-800 font-bold text-2xl m-3 focus:ml-8' onClick={() => setRound(round + 1)}>Contact {round}</Link>
        </li>
      </ul>
    </nav>
  );

};

export default SideBar;