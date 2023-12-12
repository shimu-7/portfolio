
import Navbar from './Navbar';
import me from '../assets/me.jpg'
import cv from '../assets/Shimu.pdf'
import Skills from './Skills';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
           

            <div className="hero my-2  border-2 border-[#709176]  px-7 py-4">
                <div className="hero-content flex-col md:flex-row md:gap-20">
                    <div className="avatar">
                        <div className="w-60 rounded-full ring ring-neutralring-offset-base-100 ring-offset-4">
                            <img src={me} />
                        </div>
                    </div>
                    <div>
                        <p className="text-5xl font-bold">Hi, <br /> I am  Shimu</p>
                        <h1 className="text-5xl text-[#9FBC7B] font-bold">Web Developer</h1>
                        <p className="text-lg font-light py-4">I am proficient in React, JavaScript, Tailwind CSS, Daisy UI and MongoDB and Competitive Problem Solver. I'm seeking opportunities to apply my skills and create innovative web solutions.</p>
                        <div>
                        <a href={cv} download="shimu.pdf"><button className='btn btn-outline  bg-[#709176] text-white'>Download Resume</button></a>
                        <Link to='/contact'><button className="btn btn-outline  border-[#709176] font-semibold">Contact me</button></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Skills></Skills>
            <Footer></Footer>

        </div>
    );
};

export default Home;