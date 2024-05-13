import React from "react";
import { Link } from "react-router-dom";
import pic from "../../assets/image.png";
import hire from "../../assets/hireme.png";

export default function Home() {
  return (
    <section className=" px-5 dark:bg-black dark:text-white">
      <div className="p-36">
        <span className=" font-bold text-5xl font-serif">
          <h2>Hello,</h2>
        </span>
        <span className="font-semibold text-4xl font-serif">
          I'm
          <span className=" font-normal font-serif text-orange-700">
            {" "}
            Nikhil
          </span>
          <br />
          Full Stack Developer.
        </span>
        <br /> <br />
        <p className=" font-medium  max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          explicabo labore necessitatibus earum laudantium ipsum vitae sit quod
          deleniti minus ad consequatur minima laboriosam quas, possimus placeat
          fuga? Cum, asperiores!
        </p>
        <br />
        <Link>
          <button className=" bg-orange-700 text-white font-serif font-semibold border-none rounded-lg px-3 py-2 pl-12 relative m-2 mx-3 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 focus:outline-none">
            <img
              src={hire}
              alt="#"
              className=" object-cover h-5  absolute left-3 top-1.3"
            />
            Hire me
          </button>
        </Link>
      </div>
      <div>
        <img
          src={pic}
          alt=""
          className=" absolute h-3/4 top-12 left-1/2 dark:z-10"
        />
        <span className=" ">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className=" h-5/6  absolute top-12 left-1/2 -z-10 dark:h-5/6  dark:absolute dark:top-12 dark:left-1/2 dark:z-0 "  
          >
            
            <defs>
              
              <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                
                <stop
                  id="stop1"
                  stopColor="rgba(248, 117, 55, 1)"
                  offset="0%"
                />
                <stop
                  id="stop2"
                  stopColor="rgba(251, 168, 31, 1)"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M27.5,-30.8C34.5,-26.8,38.3,-17.1,40.2,-7C42,3.1,42,13.6,37.2,21.2C32.5,28.8,23.2,33.3,14.5,33.9C5.9,34.4,-2.1,30.9,-9.7,27.7C-17.4,24.5,-24.7,21.5,-30.7,15.6C-36.7,9.6,-41.3,0.8,-41.1,-8.4C-40.8,-17.5,-35.7,-27,-28,-30.8C-20.4,-34.7,-10.2,-33,0,-33C10.2,-33.1,20.4,-34.8,27.5,-30.8Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth={0}
              
             
            />
          </svg>
        </span>
      </div>
    </section>
  );
}
