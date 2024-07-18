"use client"
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import FontAwesome icons

import TeamUs from './tream1/page';
import Link from 'next/link';

const teamMembers = [
  { name: 'John Doe', role: 'CEO', imageUrl: '/1.png', bio: 'John is the CEO and founder of our company.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Jane Smith', role: 'CTO', imageUrl: '/2.png', bio: 'Jane is the CTO and leads our tech team.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Michael Brown', role: 'CFO', imageUrl: '/3.png', bio: 'Michael manages our financial operations.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Emily White', role: 'COO', imageUrl: '/1.png', bio: 'Emily oversees daily operations.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'David Wilson', role: 'CMO', imageUrl: '/2.png', bio: 'David is in charge of marketing strategies.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Sarah Davis', role: 'Lead Developer', imageUrl: '/3.png', bio: 'Sarah leads the development team.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Chris Martin', role: 'Designer', imageUrl: '/3.png', bio: 'Chris designs user experiences.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Anna Taylor', role: 'HR Manager', imageUrl: '/1.png', bio: 'Anna manages human resources.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'James Anderson', role: 'Project Manager', imageUrl: '/2.png', bio: 'James oversees project management.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Jessica Moore', role: 'QA Engineer', imageUrl: '/3.png', bio: 'Jessica ensures the quality of our products.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
];

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <>
      <Head>
        <title>Our Team</title>
      </Head>
      <TeamUs />
      <div className="bg-black min-h-screen py-12">
        <div className="container mx-auto px-6">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-teal-500">Meet Our Team</h1>
            <p className="text-gray-300 mt-4">We are a group of passionate and dedicated professionals.</p>
          </header>
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 relative group"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="bg-[#0D1B1B] rounded-lg shadow-lg overflow-hidden text-center transform transition duration-300 hover:scale-105">
                  <Image
                    width={400}
                    height={400}
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mt-4 object-cover object-center transition duration-300 hover:grayscale"
                  />
                  <div className="p-6">
                    <h2 className="text-xl text-teal-500 font-semibold mb-2">{member.name}</h2>
                    <p className="text-gray-300 mb-4">{member.role}</p>
                    <p className="text-gray-100">{member.bio}</p>
                    {hoveredMember === index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300 opacity-0 group-hover:opacity-100">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mr-4">
                          <FaLinkedin className="text-white text-3xl hover:text-teal-500 transition duration-300" />
                        </a>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="text-white text-3xl hover:text-teal-500 transition duration-300" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-6">About Our Team</h2>
            <p className="text-center mb-6">
              We are committed to excellence and innovation in all our projects. Our team works tirelessly to deliver top-notch services to our clients.
            </p>
            <div className="flex justify-center">
              <Link href={'/contact'} className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-600">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
