import { NavLink } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
    const links = <>
        <li ><NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "#709176",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
        >
            Home
        </NavLink>
        </li>
        <li className="mx-4"><NavLink
            to="/projects"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "#709176",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
        >
            Projects
        </NavLink>
        </li>
        <li className="mr-4"><NavLink
            to="/about"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "#709176",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
        >
            About
        </NavLink>
        </li>
        <li><NavLink
            to="/contact"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "#709176",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
        >
            Contact
        </NavLink>
        </li>
    </>
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-lg menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                            {links}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-[#709176] text-2xl"> Shamima Shimu</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="flex mx-2 ">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end text-3xl">
                    <a href="https://www.linkedin.com/in/shamima-akter-shimu/" className='mx-3'><FaLinkedin /></a>
                    <a href="https://github.com/shimu-7"><FaGithub /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;