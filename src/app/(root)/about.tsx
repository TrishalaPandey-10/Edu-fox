import Link from "next/link";
import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="bg-[#BBE1FA] min-h-screen text-[#1B262C]">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a className="text-[#BBE1FA] text-xl font-bold">EduFox</a>
          </Link>
        </div>
        <nav className="bg-[#0F4C75] shadow-md p-4 rounded-2xl flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:underline text-[#BBE1FA]">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="hover:underline text-[#BBE1FA]">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="hover:underline text-[#BBE1FA]">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link href="/profile" legacyBehavior>
            <a>
              <Image
                src="/profile.png"
                alt="User Profile"
                width={30}
                height={30}
                className="rounded-full"
              />
            </a>
          </Link>
        </div>
      </header>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#1B262C]">About Us</h1>
        <div className="bg-[#0F4C75] p-4 mb-8 text-[#BBE1FA] rounded-lg">
          <p>About us content goes here...</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-[#0F4C75] p-4 text-[#1B262C] rounded-lg">
              <Image
                src="/path-to-image.jpg" // Replace with actual image paths
                alt="Developer Image"
                width={150}
                height={150}
                className="mb-4 rounded-full"
              />
              <h2 className="font-bold">Developer Name</h2>
              <p>Developer details go here...</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
