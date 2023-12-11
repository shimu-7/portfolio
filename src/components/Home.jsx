import cv from '../assets/Shimu.pdf'

const Home = () => {
    return (
        <div>
            This is Home
         
            <div className="diff aspect-[16/9]">
                <div className="diff-item-1 glass">
                    <div className="bg-black text-primary-content text-9xl font-black grid place-content-center">Shamima Akter Shimu <br /> Web Developer</div>
                </div>
                <div className="diff-item-2 glass">
                    <div className="bg-base-200 text-9xl font-black grid place-content-center">Shamima Akter Shimu <br /> Web Developer</div>
                </div>
                <div className="diff-resizer"></div>
            </div>
            <a href={cv} download="shimu.pdf"><button className='btn btn-outline btn-warning'>Download Resume</button></a>
        </div>
    );
};

export default Home;