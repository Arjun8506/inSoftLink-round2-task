import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAngleRight,
} from "react-icons/fa";

const footerLinks = [
  {
    heading: "Quick Links",
    links: [
      { label: "About Us", href: "#" },
      { label: "Benefits", href: "#" },
      { label: "Blogs", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Features", href: "#" },
    ],
  },
  {
    heading: "Help & Support",
    links: [
      { label: "Services", href: "#" },
      { label: "Support", href: "#" },
      { label: "Terms & condition", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
];

const FooterHeading = ({ text }) => (
  <h3 className="text-lg text-primary mb-2">{text}</h3>
);

const FooterInfo = () => {
  const socialData = [
    {
      src: "/assets/fb.png",
      alt: "facebook",
    },
    {
      src: "/assets/insta.png",
      alt: "instagram",
    },
    {
      src: "/assets/twitter.png",
      alt: "twitter",
    },
    {
      src: "/assets/whatsapp.png",
      alt: "whatsapp",
    },
  ];
  return (
    <div className="bg-secondary text-white px-4 py-10 pt-36 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row justify-between">
        <div className="md:w-1/4">
          <FooterHeading text={"About US"} />
          <p className="text-gray-300">
            SchoolAura Smart Education Platform is a step towards making
            learning better and effective for the students and help to achieving
            their goals.
          </p>
        </div>

        {footerLinks.map((section, index) => (
          <div key={index} className="md:w-1/5">
            <FooterHeading text={section.heading} />
            <ul className="space-y-1 text-gray-300">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="flex items-center gap-0.5 text-gray-400 hover:text-white"
                  >
                    <FaAngleRight className="text-primary" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:w-1/5">
          <FooterHeading text={"Follow Us"} />
          <div className="grid grid-cols-2 w-[40%] gap-4 mt-2">
            {socialData?.map((item, index) => (
              <img src={item?.src} alt={item?.alt} key={index} />
            ))}
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-gray-300">
        <div className="flex items-center gap-2">
          <div className="p-[10px] bg-[#666666] flex items-center justify-center rounded-full">
            <FaPhone size={28} className="rotate-90" />
          </div>
          <p className="flex flex-col items-start">
            <span className="text-primary">Call Us:</span>
            <a href="tel:+919540343932">+91-9540343932</a>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-[10px] bg-[#666666] flex items-center justify-center rounded-full">
            <FaEnvelope size={28} />
          </div>
          <p className="flex flex-col items-start">
            <span className="text-primary">Mail Us:</span>
            <a href="mailto:contact@schoolaura.com">contact@schoolaura.com</a>
          </p>
        </div>

        <div className="flex items-start gap-2">
          <div className="p-[10px] bg-[#666666] flex items-center justify-center rounded-full">
            <FaMapMarkerAlt size={28} />
          </div>
          <p className="flex flex-col items-start">
            <span className="text-primary">Office Address:</span>
            <span className="text-sm">
              Pocket D, Okhla Phase II, Okhla Industrial Area, New Delhi, Delhi
              110020, India
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
