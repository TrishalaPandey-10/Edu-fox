import Link from "next/link";
import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
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
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#BBE1FA]">Contact</h1>
        <div className="bg-[#BBE1FA] p-8 rounded-lg max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#0F4C75] mb-2">Email Address</label>
            <input type="email" id="email" className="w-full p-2 bg-[#0F4C75] text-[#BBE1FA] rounded-md"/>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-[#0F4C75] mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full p-2 bg-[#0F4C75] text-[#BBE1FA] rounded-md"></textarea>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Send
          </button>
        </div>
      </main>
    </div>
  );
};

export default Contact;
