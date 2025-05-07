import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const FooterInfo = () => {
  return (
    <div className="bg-secondary text-white px-4 py-10 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row justify-between">
        {/* About */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">About US</h3>
          <p className="text-gray-300">
            SchoolAura Smart Education Platform is a step towards making
            learning better and effective for the students and help to achieving
            their goals.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/5">
          <h3 className="text-lg font-semibold mb-2 text-[#f55900]">
            Quick Links
          </h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Benefits</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>

        {/* Help & Support */}
        <div className="md:w-1/5">
          <h3 className="text-lg font-semibold mb-2 text-[#f55900]">
            Help & Support
          </h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Terms & condition</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="md:w-1/5">
          <h3 className="text-lg font-semibold mb-2 text-[#f55900]">
            Follow Us
          </h3>
          <div className="flex gap-4 mt-2">
            <FaFacebook className="text-blue-500 text-xl" />
            <FaInstagram className="text-pink-500 text-xl" />
            <FaTwitter className="text-sky-400 text-xl" />
            <FaWhatsapp className="text-green-500 text-xl" />
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-gray-300">
        <div className="flex items-center gap-2">
          <FaPhone className="text-[#f55900]" />
          <span>
            <strong className="text-white">Call Us:</strong> +91-9540343932
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-[#f55900]" />
          <span>
            <strong className="text-white">Mail Us:</strong>{" "}
            contact@schoolaura.com
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#f55900]" />
          <span>
            <strong className="text-white">Office Address:</strong> E 44/3,
            Pocket D, Okhla Phase II, Okhla Industrial Area, New Delhi, Delhi
            110020, India
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
