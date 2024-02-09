import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import SideBar from './pages/SideBar';
import Footer from './pages/Footer';
import Content from './pages/content';



function App() {
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
