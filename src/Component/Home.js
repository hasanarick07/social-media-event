import React from "react";
import { Link } from "react-router-dom";
import landingPage from "../images/Landing page image.svg";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" basis-1/2">
            <img
              src={landingPage}
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <button className="btn btn-primary lg:hidden bg-gradient-to-r from-primary to-secondary mt-7 w-full text-white">
              <Link to="/create">🎉 Create my event</Link>
            </button>
          </div>
          <div className="basis-1/2 lg:order-last order-first">
            <h1 className="text-5xl font-bold lg:text-right text-accent">
              Imagine if
              <span className="bg-clip-text block text-transparent bg-gradient-to-r from-primary to-secondary ">
                Snapchat
              </span>
              had events.
            </h1>
            <p className="py-6 lg:text-right text-neutral">
              Easily host and share events with your friends across any social
              media.
            </p>
            <button className="btn btn-primary hidden lg:inline-block bg-gradient-to-r from-primary to-secondary text-white w-full">
              <Link to="/create">🎉 Create my event</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
