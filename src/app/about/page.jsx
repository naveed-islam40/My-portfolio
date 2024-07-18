"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import AboutUs from "./about1/page";
import CardList from "../components/cards/page";
import TestimonialsSlider from "../components/testimonials/page";
import ContactSection from "../components/contactSection/page";
import Mission from "../components/mission/page";

const ItPartnerSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  
  return (

    <div>
      <AboutUs />
      <div className=" bg-black relative  text-white min-h-screen overflow-hidden">
      
      <div
        className="absolute bg-fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/download.jpeg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between min-h-screen">
          <div className="leading-relaxed  flex flex-col px-3 md:px-3 items-center justify-center">
            <div className="text-center lg:text-left">
              <h3 className="text-teal-400 mb-2 text-xl">Welcome to Ditech</h3>
              <h2 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Let Us Be Your
                <br />
                <span className="text-teal-400">IT Partner</span>
              </h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas quis faucibus ligula. Vestibulum a purus massa. Ut
                elementum sem.
              </p>
              <div className="mb-4 leading-10">
                <div className="flex justify-between">
                  <span>Workflow Management</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-teal-400 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4 leading-10">
                <div className="flex justify-between">
                  <span>IT Practice in Cloud</span>
                  <span>58%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-teal-400 h-2.5 rounded-full"
                    style={{ width: "58%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between leading-10">
                  <span>Software for Financial</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-teal-400 h-2.5 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <div className="flex justify-center mb-5" ref={ref}>
              <div className=" text-center md:mr-12 mr-12">
                <h2 className="text-6xl text-teal-400 font-bold mb-1">
                  {startCounting ? (
                    <CountUp start={0} end={19} duration={4} suffix="+" />
                  ) : (
                    "0+"
                  )}
                </h2>
                <p className="text-sm mb-2">Years of Experience</p>
              </div>
              <div className=" text-center">
                <h2 className="text-6xl text-teal-400 font-bold mb-1">
                  {startCounting ? (
                    <CountUp start={0} end={152} duration={4} suffix="k" />
                  ) : (
                    "0k"
                  )}
                </h2>
                <p className="text-sm mb-2">Projects Completed</p>
              </div>
            </div>

            <div className="flex justify-center md:pt-10 lg:justify-start">
              <Image
                src="/waleed.jpeg"
                width={400}
                height={400}
                alt="Decorative"
                className="  rounded-lg w-3/4 lg:w-4/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <CardList/>
    <TestimonialsSlider/>
    <ContactSection/>
    <Mission/>
    </div>
  );
};

export default ItPartnerSection;

