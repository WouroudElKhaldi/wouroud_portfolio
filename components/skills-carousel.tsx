"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SkillsCarousel({
  skillsData,
}: {
  skillsData: Record<string, { name: string; proficiency: number }[]>;
}) {
  const categories = Object.entries(skillsData);
  const groupedCategories = [];

  // Group every 3 skill categories together
  for (let i = 0; i < categories.length; i += 3) {
    groupedCategories.push(categories.slice(i, i + 3));
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      className="w-full"
    >
      {groupedCategories.map((group, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-12">
            {group.map(([category, skills]) => (
              <SkillCategory
                key={category}
                category={category}
                skills={skills}
              />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function SkillCategory({
  category,
  skills,
}: {
  category: string;
  skills: { name: string; proficiency: number }[];
}) {
  const [visibleCount, setVisibleCount] = useState(5);
  const expanded = visibleCount >= skills.length;

  return (
    <div className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
      <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">
        {category}
      </h4>
      <div>
        {skills.slice(0, visibleCount).map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            proficiency={skill.proficiency}
          />
        ))}
      </div>
      {skills.length > 5 && (
        <button
          onClick={() => setVisibleCount(expanded ? 5 : skills.length)}
          className="mt-2 text-purple-400 hover:text-purple-300 text-sm w-full text-center"
        >
          {expanded ? "Show Less" : "Show More..."}
        </button>
      )}
    </div>
  );
}

function SkillBar({
  name,
  proficiency,
}: {
  name: string;
  proficiency: number;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  );
}

export default SkillsCarousel;
