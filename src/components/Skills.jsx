import html from '../assets/images/HTML.png'
import css from '../assets/images/CSS.png'
import tailwind from '../assets/images/TailwindCSS-Dark.png'
import javascript from '../assets/images/JavaScript.png'
import cPlus from '../assets/images/c++.png'
import react from '../assets/images/React-Dark.png'
import mongo from '../assets/images/MongoDB.png'
import firebase from '../assets/images/Firebase-Dark.png'

const Skills = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='flex justify-center my-8'>
                <div className='md:w-4/12 text-center'>

                    <h3 className='text-3xl uppercase font-medium py-4  border-y-4 border-[#709176]'>Technologies I Know</h3>
                </div>

            </div>
            <div className='flex justify-center flex-row gap-2 '>
                <img className='w-20 h-20' src={html} alt="" />
                <img className='w-20 h-20' src={css} alt="" />
                <img className='w-20 h-20' src={tailwind} alt="" />
                <img className='w-20 h-20' src={javascript} alt="" />
                <img className='w-20 h-20' src={cPlus} alt="" />
            </div>
            <div className=' mt-4 flex justify-center flex-row gap-2 '>
                <img className='w-20 h-20' src={react} alt="" />
                <img className='w-20 h-20' src={mongo} alt="" />
                <img className='w-20 h-20' src={firebase} alt="" />
                
            </div>

        </div>
    );
};

export default Skills;