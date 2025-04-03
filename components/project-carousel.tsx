"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectCarousel() {
  const projects = [
    {
      title: "Aalemni Design & Development",
      description:
        "Full-stack development and UI/UX design for the Aalemni platform, focusing on intuitive user interfaces, seamless user experience, and robust backend functionality.",
      tags: [
        "UI/UX Design",
        "Figma",
        "User Interface",
        "Prototyping",
        "Next.js",
        "Supabase",
        "Full-Stack Development",
        "E-Learning Platform",
      ],
      image: "/images/aalemni-design.jpg",
    },
    {
      title: "DeveLeb Design (UI/UX)",
      description:
        "Full UI/UX design for the DeveLeb community website, including wireframes, mockups, and prototypes.",
      tags: ["UI/UX Design", "Figma", "Wireframing", "Prototyping"],
      image: "/images/develeb-design.jpg",
    },
    {
      title: "CoSpace",
      description:
        "Coworking space platform with booking, rating, and admin dashboards, developed individually.",
      tags: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Coworking Space",
        "Admin Dashboard",
      ],
      image: "/images/cospace.jpg",
    },
    {
      title: "Lalezar",
      description:
        "E-commerce platform for spices, developed as a group project.",
      tags: ["MERN Stack", "E-commerce", "Spices"],
      image: "/images/lalezar.jpg",
    },
    {
      title: "Hotel Express",
      description: "Hotel management website, developed as a group project.",
      tags: ["React", "Node.js", "Sequelize", "Express.js"],
      image: "/images/hotel-express.jpg",
    },
    {
      title: "Money Minder",
      description:
        "FinTech financial tracker dashboard, developed as a group project.",
      tags: ["React", "Node.js", "Sequelize", "Express.js", "FinTech"],
      image: "/images/money-minder.jpg",
    },

    {
      title: "Technow",
      description:
        "Newsletter website with an admin dashboard, built as a group project.",
      tags: ["MERN Stack", "Admin Dashboard", "Newsletter"],
      image: "/images/technow.jpg",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="!pr-6 !pl-6 w-full"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-1 w-full px-5">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">
        {title}
      </h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">
        {description}
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
