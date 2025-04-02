"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import SkillsCarousel from "./skills-carousel";

const timelineData = [
  {
    id: 1,
    company: "Reltrix | previously DTT",
    role: "Ful Stack Software Engineer",
    period: "May 2024 - Present",
    location: "Tripoli, Lebanon",
    type: "Full-time",
    logo: "/company-a-logo.svg",
    skills: [
      "Laravel",
      "PHP",
      "React",
      "JS",
      "KYCs Integration",
      "PSPs Integration",
    ],
  },
  {
    id: 2,
    company: "Develeb",
    role: "UI/UX Designer",
    period: "Jun 2024 - Sep 2024",
    location: "SRemote",
    type: "Internship",
    logo: "/company-b-logo.svg",
    skills: ["React", "Next.js", "Tailwind CSS", "Figma", "UI", "UX"],
  },
];

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 90 },
    { name: "TypeScript", proficiency: 80 },
    { name: "PHP", proficiency: 80 },
  ],
  "Frameworks/Libraries": [
    { name: "React", proficiency: 95 },
    { name: "Next.js", proficiency: 90 },
    { name: "Node.js", proficiency: 90 },
    { name: "Express.js", proficiency: 90 },
    { name: "Nest.js", proficiency: 75 },
    { name: "Laravel", proficiency: 85 },
  ],
  "State Management": [
    { name: "Redux", proficiency: 85 },
    { name: "Zustand", proficiency: 80 },
    { name: "Axios", proficiency: 90 },
  ],
  Databases: [
    { name: "PostgreSQL", proficiency: 85 },
    { name: "MySQL", proficiency: 80 },
    { name: "MongoDB", proficiency: 75 },
    { name: "Prisma", proficiency: 80 },
  ],
  "CMS/E-commerce Platforms": [
    { name: "WordPress", proficiency: 85 },
    { name: "Shopify", proficiency: 80 },
  ],
  "Authentication & Security": [
    { name: "OAuth", proficiency: 75 },
    { name: "JWT", proficiency: 85 },
    { name: "Web Security Best Practices", proficiency: 70 },
  ],
  "API Development & Documentation": [
    { name: "REST APIs", proficiency: 90 },
    { name: "GraphQL", proficiency: 70 },
    { name: "Swagger", proficiency: 85 },
  ],
  "Payment Integration": [
    { name: "Binance Pay", proficiency: 80 },
    { name: "Fincra", proficiency: 75 },
    { name: "Whish", proficiency: 70 },
    { name: "Pay Tree", proficiency: 70 },
    { name: "Coinsbuy", proficiency: 70 },
    { name: "Pagadito", proficiency: 70 },
    { name: "Credimax", proficiency: 70 },
    { name: "Orbital", proficiency: 70 },
    { name: "Hubtel", proficiency: 70 },
    { name: "Upay", proficiency: 70 },
    { name: "PayAtom", proficiency: 70 },
    { name: "OfaPay", proficiency: 70 },
    { name: "Bridger Pay", proficiency: 70 },
    { name: "Bitwallet", proficiency: 70 },
    { name: "DP Pay", proficiency: 70 },
  ],
  "KYC Integrations": [
    { name: "Sumsub", proficiency: 70 },
    { name: "Shufti", proficiency: 70 },
    { name: "Coinkade", proficiency: 70 },
  ],
  "Trading Platform Integrations": [
    { name: "MT4", proficiency: 70 },
    { name: "MT5", proficiency: 70 },
    { name: "TradeLocker", proficiency: 70 },
    { name: "Ark Trader", proficiency: 70 },
    { name: "Vertex", proficiency: 70 },
  ],
  "CI/CD & Deployment": [
    { name: "Vercel", proficiency: 90 },
    { name: "Netlify", proficiency: 85 },
    { name: "GitHub Actions", proficiency: 80 },
    { name: "GCP", proficiency: 80 },
    { name: "CPanel Hosting", proficiency: 80 },
  ],
  Tools: [
    { name: "Git", proficiency: 95 },
    { name: "Docker", proficiency: 90 },
    { name: "Figma", proficiency: 85 },
    { name: "Lerna.js", proficiency: 75 },
    { name: "Agile Methodologies", proficiency: 85 },
  ],
};

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-12 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="containe mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Code, Coffee & Me
            </span>
            <span className="ml-2">☕💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16 px-4">
            {/* <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-69dycok1tWUrjh0VA4bIB19grsFa5b.jpeg"
                  alt="Wouroud EL Khaldi"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div> */}
            <div className="w-full">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Full Stack Engineer 💻, UI/UX Designer 🎨, and Web Security
                  Enthusiast 🔐. Passionate about creating seamless user
                  experiences while building robust, secure applications.
                  {` Let's `}
                  turn complex ideas into innovative solutions! 🚀
                </p>

                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-2xl mb-4 font-semibold text-purple-500">
                    🚀 <strong>{`Hey, I'm Wouroud El Khaldi!`}</strong>
                  </p>
                  <p className="mb-4 text-lg">
                    A <strong>Full Stack Software Engineer 💻</strong> with a
                    passion for <strong>UI/UX Design 🎨</strong> and{" "}
                    <strong>Cybersecurity 🔐</strong>. I specialize in creating
                    secure, scalable web applications that deliver exceptional
                    user experiences. From{" "}
                    <span className="text-blue-500">frontend design</span> to{" "}
                    <span className="text-green-500">backend architecture</span>
                    , I love building full-fledged solutions that bridge the gap
                    between design and development.
                  </p>
                  <p className="mb-4 text-lg">
                    I have extensive experience working with technologies like{" "}
                    <span className="text-green-500">
                      <strong>React.js</strong>
                    </span>
                    ,{" "}
                    <span className="text-purple-500">
                      <strong>Next.js</strong>
                    </span>
                    ,{" "}
                    <span className="text-blue-500">
                      <strong>Node.js</strong>
                    </span>
                    ,{" "}
                    <span className="text-orange-500">
                      <strong>Express.js</strong>
                    </span>
                    ,{" "}
                    <span className="text-pink-500">
                      <strong>Laravel</strong>
                    </span>
                    , and much more. I also have a strong background in{" "}
                    <strong>UI/UX design</strong> (Figma is my canvas 🖌️),
                    helping to create intuitive, user-friendly interfaces.
                    {` I'm `}
                    constantly exploring new trends in{" "}
                    <strong>cybersecurity</strong> to ensure that the solutions
                    I build are not only functional but also safe and secure 🛡️.
                  </p>
                  <p className="mb-4 text-lg">
                    When{` I'm `}not coding,{` you'll `}find me learning about
                    the latest in <strong>web security</strong> 🔍, diving into{" "}
                    <strong>full-stack development</strong> 🖥️, or designing
                    polished interfaces 🖌️.{` I'm `}always open to collaborating
                    🤝, solving tough problems 🧩, and creating things that push
                    the boundaries of{` what's `}possible on the web 🌐.
                  </p>
                  <p className="text-lg">
                    <strong>
                      {` Let's `}connect, collaborate, and build something
                      amazing!
                    </strong>{" "}
                    Whether{` it's `}creating high-performance, secure
                    applications or crafting designs that users love 💖,
                    {` I'm `}always up for a challenge. The future of the web is
                    bright 🌟, and
                    {` I'm `}here to make my mark. 🌍
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20 px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                The Road So Far
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">
                            {item.role}
                          </h3>
                          <h4 className="text-lg text-purple-400">
                            {item.company}
                          </h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <SkillsCarousel skillsData={skillsData} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
