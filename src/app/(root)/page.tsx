import Link from "next/link";
import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="bg-[#1B262C] min-h-screen text-[#BBE1FA]">
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
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to EduFox!</h1>
      </main>
    </div>
  );
};

export default Home;
