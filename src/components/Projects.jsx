import Footer from "./Footer";
import Navbar from "./Navbar";


const Projects = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto h-[2px] bg-[#709176]"></div>
            <div className="hero  ">
                <div className="hero-content flex-col md:flex-row-reverse md:gap-20">
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-4xl font-bold">JobNest</h1>
                        <p className="py-4">JobNest is a website where users can search job, apply for a job. If any job role is available, user can post about this role and modify job description.After Successfully signed in, by clicking on profile picture, user will redirect to user profile route with a customized navbar with private routes .</p>
                        <a href="https://fancy-frangollo-0163ad.netlify.app/" ><button className='btn btn-outline  bg-[#709176] text-white'>Live Link</button></a>
                    </div>
                    <div className="card md:w-1/2 shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <img src="https://i.ibb.co/ZNSmbm0/jobnest.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="max-w-3xl my-5 mx-auto h-[2px] bg-[#709176]"></div>
            <div className="hero  ">
                <div className="hero-content flex-col md:flex-row-reverse md:gap-20">
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-4xl font-bold">Smart Diagnostic Center</h1>
                        <p className="py-4">This is diagnostic center management site where patient can book an appointment and cancel appointment. Admin panel is implemented in this website and admin can change user role, add new service, update the services etc.</p>
                        <a href="https://velvety-biscochitos-24094c.netlify.app/" ><button className='btn btn-outline  bg-[#709176] text-white'>Live Link</button></a>
                    </div>
                    <div className="card md:w-1/2 shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <img src="https://i.ibb.co/CnZH4g4/diagonstic.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="max-w-3xl my-5 mx-auto h-[2px] bg-[#709176]"></div>
            <div className="hero  ">
                <div className="hero-content flex-col md:flex-row-reverse md:gap-20">
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-4xl font-bold">ThrillWheel</h1>
                        <p className="py-4">ThrillWheel is a brandshop where many cars of various brand are available. Firebase Authentication is used for user authentication. User can add car on the cart and delete from car.</p>
                        <a href="https://brand-shop-8c364.web.app/" ><button className='btn btn-outline  bg-[#709176] text-white'>Live Link</button></a>
                    </div>
                    <div className="card md:w-1/2 shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <img src="https://i.ibb.co/Ctf1XfG/brand.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;