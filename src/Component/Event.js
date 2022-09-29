import React from "react";
import Birthday from "../images/Birthday cake.png";
import { ImLocation2 } from "react-icons/im";

const Event = ({ data }) => {
  const { end, start, location, host, event } = data;

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="  lg:order-last order-first">
            <img
              src={Birthday}
              className="max-w-sm rounded-lg shadow-xl"
              alt=""
            />
          </div>
          <div className="max-w-sm">
            <h1 className="text-5xl font-bold text-left text-accent">
              {event}
            </h1>
            <p className="py-6 text-left text-neutral">{host}</p>
            <div>
              <ImLocation2 />

              <div>
                <p>{start}</p>
                to <span>{end}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
