import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-[#1B262C] min-h-screen text-[#BBE1FA]">
      <header className="bg-[#0F4C75] shadow-md p-4 rounded-lg w-full">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            EduFox
          </div>

          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:underline text-[#BBE1FA]">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="hover:underline text-[#BBE1FA]">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="hover:underline text-[#BBE1FA]">Contact</a>
              </Link>
            </li>
          </ul>

          <div>
            <Link href="/login" legacyBehavior>
              <a className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Login/Signup
              </a>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to EduFox</h1>
      </main>
    </div>
  );
};

export default Home;
