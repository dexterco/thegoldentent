import React from "react";
import { FaFacebook, FaTimes, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ac476c] text-white py-12 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 md:pr-8 mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">The Golden Tent</h2>
          <p className="text-sm">
            Golden Tent is your gateway to exquisite Middle Eastern wedding and conference venues.
            We curate extraordinary experiences for all wedding venues in the Middle East.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap md:flex-no-wrap justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#about" className="hover:text-gray-300 underline">About us</a>
                </li>
                <li>
                  <a href="#jobs" className="hover:text-gray-300 underline">Jobs</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-300 underline">Contact us</a>
                </li>
                <li>
                  <a href="#advertising" className="hover:text-gray-300 underline">Advertising</a>
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#list-your-venue" className="hover:text-gray-300 underline">List your venue</a>
                </li>
                <li>
                  <a href="#terms-of-use" className="hover:text-gray-300 underline">Terms of use</a>
                </li>
                <li>
                  <a href="#privacy-policy" className="hover:text-gray-300 underline">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-sm mb-8">
              Subscribe to our mailing list and be the first to know what’s happening.
            </p>
            <form className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full md:w-2/3 p-2 mb-2 md:mb-0 md:mr-2 rounded-md border text-black border-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-[#ac476c] py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-8 text-sm text-gray-300 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTimes size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
          </div>
          <div>&copy; {currentYear} The Golden Tent. Made with ❤️ for the 🌍</div>
        </div>
      </div>
    </footer>
  );
}
