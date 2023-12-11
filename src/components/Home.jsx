
import Navbar from './Navbar';
import me from '../assets/me.jpg'


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
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;