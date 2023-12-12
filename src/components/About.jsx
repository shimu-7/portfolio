import Footer from "./Footer";
import Navbar from "./Navbar";


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto h-[2px] bg-[#709176]"></div>
            <div className='flex justify-center my-8'>
                <div className='md:w-4/12 text-center'>

                    <h3 className='text-2xl uppercase font-medium py-4  border-y-4 border-[#709176]'>Educational Qualification</h3>

                </div>
            </div>
            <div className=" mt-4 flex flex-col md:flex-row w-full border-opacity-50">
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                    <h2>Bsc. in Computer Science and Engineering <br /> Comilla University, Bangladesh</h2>
                    <p>January 2019 – Present</p>
                </div>
                <div className="divider md:divider-horizontal divider-success"></div>
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                    <h2>Chandpur govt. Women College (Class XII) <br /> Chandpur, Bangladesh
                    </h2>
                    <p>July 2016 – May 2018</p>

                </div>
            </div>
            <div className='flex justify-center my-8'>
                <div className='md:w-4/12 text-center'>

                    <h3 className='text-2xl uppercase font-medium py-4  border-y-4 border-[#709176]'>ACHIEVEMENT AND
                        CONTEST</h3>

                </div>
            </div>

            <div className="flex flex-col w-full">
                <div className="grid  card bg-base-300 rounded-box place-items-center">
                    Champion at ESDG4BD Grace
                    Hopper Girls Programming Camp
                    Programming Contest(individual) <a href="https://vjudge.net/contest/335738#rank" className="text-blue-500">Standings</a>
                </div>
                <div className="grid my-2 card bg-base-300 rounded-box place-items-center">
                    Contestant at National Girls’ Programming Contest 2022 (Rank:20)
                    <a href="https://toph.co/c/national-girls-programming-contest-2022/standings" className="text-blue-500">Standings</a>
                </div>
                <div className="grid my-2 card bg-base-300 rounded-box place-items-center">
                    Contestant at Ada Lovelace National Girls’ Programming Contest
                    2022 (Rank:27)
                    <a href="https://toph.co/c/alngpc-2022/standings" className="text-blue-500">Standings</a>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;