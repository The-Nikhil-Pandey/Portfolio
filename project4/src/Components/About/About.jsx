import React from 'react'
import { Link } from 'react-router-dom';
import M from '../../assets/mongodb.png'
import E from '../../assets/express.png'
import R from '../../assets/react.png'
import N from '../../assets/node.png'
import Next from '../../assets/next.png'
import dsa from '../../assets/dsa.png'
import sd from '../../assets/system design.png'
import c from '../../assets/c.png'
import redux from '../../assets/redux.png'
import vite from '../../assets/vite.png'



export default function About() {
  return (
     <section className='dark:bg-black dark:text-white'>
        <span className='text-center '>
        <h1 className=' font-serif font-bold text-5xl  py-8'>My Expertise</h1></span>
        <p style={{width:"100%"}} className='text-center px-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis blanditiis accusantium maiores ipsa, asperiores similique quod voluptate ratione nemo?</p>
        
        <div className=''>
            <ul className=' flex flex-row gap-x-28 gap-y-8 content-center justify-center flex-wrap p-20 dark:bg-black dark:text-black'>
                <li>
                    <Link
                    className=' flex bg-gray-200 py-4 px-8 rounded-xl hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 hover:text-white'><img src={R} alt=""
                    className=' h-24' />
                    <span className=' pt-3 pl-10 max-w-80'>React JS : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, quas.</span>
                    </Link>
                </li>
                <li>
                    <Link
                    className=' flex bg-gray-200 py-4 px-8 rounded-xl hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 hover:text-white'>
                    <img src={Next} alt=""
                    className='h-24' />
                    <span className=' pt-3 pl-10 max-w-80'>Next JS : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquam!</span></Link>
                </li>
                <li>
                    <Link 
                    className='flex bg-gray-200 py-4 px-8 rounded-xl hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 hover:text-white'><img src={E} alt=""
                    className='h-24' />
                    <span className=' pt-3 pl-10 max-w-80'>Express JS : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, recusandae.</span></Link>
                </li>
                <li>
                    <Link
                    className='flex bg-gray-200 py-4 px-8 rounded-xl hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 hover:text-white'><img src={N} alt=""
                    className='h-24' />
                    <span className=' pt-3 pl-10 max-w-80'>Node JS : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, temporibus!</span></Link>
                </li>
                <li>
                    <Link
                    className='flex bg-gray-200 py-4 px-8 rounded-xl hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 hover:text-white'><img src={M} alt=""
                    className='h-24' />
                    <span className=' pt-3 pl-10 max-w-80'>MongoDb : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, maxime!</span></Link>
                </li>
                <li>
                    <Link
                    className='flex bg-gray-200 py-4 px-8 rounded-xl hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 hover:text-white'><img src={dsa} alt=""
                    className='h-24' />
                    <span className=' pt-3 pl-10 max-w-80'>DSA : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, animi.</span></Link>
                </li>
                <li>
                    <Link
                    className='flex bg-gray-200 py-4 px-8 rounded-xl hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 hover:text-white'><img src={sd} alt=""
                    className='h-24' />
                    <span className=' pt-3 pl-10 max-w-80'>System Design : Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, fugit.</span></Link>
                </li>
                <li>
                    <Link
                    className='flex bg-gray-200 py-4 px-8 rounded-xl hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 hover:text-white'><img src={c} alt=""
                    className='h-24' />
                    <span className=' pt-3 pl-10 max-w-80'>C (Language) : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, omnis.</span></Link>
                </li>
                <li>
                    <Link
                    className='flex bg-gray-200 py-4 px-8 rounded-xl hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 hover:text-white'><img src={redux} alt=""
                    className='h-24' />
                    <span className=' pt-3 pl-10 max-w-80'>Redux : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus.</span></Link>
                </li>
                <li>
                    <Link
                    className='flex bg-gray-200 py-4 px-8 rounded-xl hover:bg-orange-900 focus:ring-4 focus:ring-orange-300 hover:text-white'><img src={vite} alt=""
                    className='h-24' />
                    <span className=' pt-3 pl-10 max-w-80'>Vite : Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt.</span></Link>
                </li>
            </ul>
        </div>
     </section>
  );
}