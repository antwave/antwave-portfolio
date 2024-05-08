import React from "react";
import python from "../assets/python.png";
import django from "../assets/django.png";
import pandas from "../assets/pandas.svg";
import docker from "../assets/docker.png";
import dsa from "../assets/DSA.png";
import airflow from "../assets/airflow.png";
import spark from "../assets/spark.png";

const Skills = () => {
  return (
    <div
      className="border border-gray-600 bg-black text-gray-400 max-w-[1200px]
    mx-auto grid grid-cols-2 md:grid-cols-4 place-items-center md:justify-between md:items-center"
    >
      <h2 className="text-gray-400 text-4xl font-bold mx-4 mb-5 text-center">
        <span className="text-xs">(some)</span> <br /> Tech <br /> Skills
      </h2>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[100px] md:w-[100px]">
        <img src={python} alt="python" className="h-[100px]" />
        <p className="mt-2">PYTHON</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[100-px] md:w-[100px]">
        <img src={django} alt="django" className="h-[100px]" />
        <p className="mt-2">DJANGO</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 ">
        <img src={pandas} alt="pandas" className="h-[100px] w-[180px]" />
        <p className="mt-2">PANDAS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[100px] md:w-[120px]">
        <img src={docker} alt="docker" className="h-[100px]" />
        <p className="mt-2">DOCKER</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[100px] md:w-[100px]">
        <img src={dsa} alt="dsa" className="h-[100px]" />
        <p className="mt-2">DSA</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0">
        <img src={spark} alt="spark" className="h-[80px] w-[140px]" />
        <p className="mt-2">APACHE SPARK</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0">
        <img src={airflow} alt="airflow" className="h-[80px] w-[180px]" />
        <p className="mt-2">AIRFLOW</p>
      </div>
    </div>
  );
};

export default Skills;
