import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Senior Research Engineer"
            company="LG Soft India"
            time="2022 - 2024"
            address="Marathahalli, Bengaluru, Karnataka 560103, India"
            companyLink="https://github.com/sandhani45"
            work="At LG, I serve as a Part Lead, where I play a crucial role in designing and implementing cutting-edge web solutions. My responsibilities include developing responsive and high-performance websites and applications using technologies such as HTML, CSS, JavaScript, React, and Node.js. I collaborate closely with cross-functional teams to ensure our projects meet the highest standards of functionality and user experience. One of my key achievements at LG Soft has been leading the development of a comprehensive e-commerce platform that significantly enhanced our client's online presence and sales. My work is driven by a passion for continuous learning and innovation, always striving to push the boundaries of what's possible in web development."
          />

          <Details
            position="Senior Software Engineer"
            company="JoulestoWatts Business Solutions Pvt Lt"
            time="2020 - 2022"
            address="Aswath Nagar, Marathahalli, Bengaluru, Karnataka 560037, India"
            companyLink="https://github.com/sandhani45"
            work="At JoulestoWatts Business Solutions, I worked as a Senior Software Engineer, where I was responsible for Collaborated with cross-functional teams to gather requirementsY analy%e user
feedbackY and iterate on software solutions for optimal performance.Conducted code reviewsY identi,ed areas for improvementY and implemented
best practices for code quality and maintainability.Engaged in continuous learning and professional developmentY staying abreast
of industry trends and emerging technologies.Developed and maintained version control processes using GitY contributing to
a streamlined and organized codebase.Maintained data visualiations during conversionY preserving the integrity and
effectiveness of charts and graphs."
          />
          <Details
            position="Software Engineer"
            company="CAPGEMINI PVT.LTD"
            time="2018 - 2020"
            address="EPIP Zone Whitefield Rd, Phase 2, Brookefield, Bengaluru, Karnataka 560066, India"
            companyLink="https://github.com/sandhani45"
            work="At CAPGEMINI PVT.LTD, I worked as a Software Engineer, Working as a part of the International Team for a few monthsY handling the 3D
and —D PDF view.Implemented continuous integration and deployment )CI:CD6 pipelinesY
reducing deployment time by —X5 and increasing overall system reliability.Introduced mechanism to convert a web page table to Performance Demand
Pool )PDF6.Contributed to the development of a dynamic e-commerce platformY
incorporating secure payment gateways and real-time inventory management.Successfully converted complex Excel datasets into HTMLY enhancing
accessibility and enabling collaborative data analysis on web platforms."
          />
          <Details
            position="Web Developer"
            company="7th Cross Rd, Mico Layout, BTM 2nd Stage, Bengaluru, Karnataka 560076, India"
            time="2016 - 2018"
            address=""
            companyLink="https://github.com/sandhani45"
            work="Involved in analy%ing client requirement and selecting suitable technology stack, Involved in designing scalable architecture based on the
requirement.Successfully integrated web-based functionality into a mobile appY
expanding the products reach and enhancing accessibility for users on the go."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link>
      </div>
    </div>
  );
};

export default Experience;
