import React from "react";
import { useLoaderData } from "react-router-dom";

const Course = () => {
  const course = useLoaderData();

  console.log(course);
  const { title, picture, description, author, price } = course;
  return (
    <div className=" w-1/2 mx-auto mt-10">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body gap-4">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-4 w-full">
              <img className="w-10 rounded-full" src={author.picture} alt="" />
              <h4>{author.name}</h4>
            </div>
            <p className="">{price}</p>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
