import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Create = ({setData}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log(data);
    setData(data)
    navigate("/event");
  };
  return (
    <div>
      <h1 className="bg-clip-text block text-transparent bg-gradient-to-r from-primary to-secondary font-bold text-4xl">
        Event Create Page
      </h1>
      <div className="flex h-[80vh] justify-center items-center text-black text-center">
        <div className="card md:w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-neutral">Event Name</span>
                </label>
                <input
                  {...register("event", {
                    required: { value: true, message: "Provide a event name" },
                  })}
                  type="text"
                  placeholder="Event Name"
                  className="input input-ghost  input-accent w-full max-w-xs "
                />
                <label className="label p-0">
                  {errors.event?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.event.message}
                    </span>
                  )}
                  {errors.event?.type === "pattern" && (
                    <span className="label-text-alt text-error">
                      {errors.event.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-neutral">Host Name</span>
                </label>
                <input
                  {...register("host", {
                    required: { value: true, message: "Provide a host name" },
                  })}
                  type="text"
                  placeholder="Host Name"
                  className="input input-ghost  input-accent w-full max-w-xs "
                />
                <label className="label p-0">
                  {errors.host?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.host.message}
                    </span>
                  )}
                  {errors.host?.type === "pattern" && (
                    <span className="label-text-alt text-error">
                      {errors.host.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">Event Time</span>
                </label>
                <input
                  {...register("start", {
                    required: { value: true, message: "Provide a event name" },
                  })}
                  type="date"
                  className="input input-ghost  input-accent w-full inline-block max-w-xs "
                />{" "}
                <span>To</span>
                <input
                  {...register("end", {
                    required: { value: true, message: "Provide a event name" },
                  })}
                  type="date"
                  className="input input-ghost  input-accent w-full inline-block max-w-xs "
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">Event Location</span>
                </label>
                <input
                  {...register("location", {
                    required: {
                      value: true,
                      message: "Provide a event location",
                    },
                  })}
                  type="text"
                  placeholder="Event Location"
                  className="input input-ghost  input-accent w-full max-w-xs "
                />
                <label className="label p-0">
                  {errors.location?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.location.message}
                    </span>
                  )}
                  {errors.location?.type === "pattern" && (
                    <span className="label-text-alt text-error">
                      {errors.location.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">Event Photo</span>
                </label>
                <input
                  {...register("event", {
                    required: { value: true, message: "Provide a event name" },
                  })}
                  type="text"
                  value="Birthday cake"
                  placeholder="Birthday cake"
                  className="input input-ghost  input-accent w-full max-w-xs "
                />
              </div>
              <input
                type="submit"
                value="next"
                className="btn mt-7 bg-gradient-to-r from-primary to-secondary btn-accent hover:text-white w-full max-w-xs"
              />
              {/* <Link to="/event">
              </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
