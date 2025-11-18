import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-black text-gray-300 font-['Poppins']">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Logo + About */}
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <img src="/tech team logo.png" alt="Tech Team Logo" className="h-16 w-16 rounded-full object-cover" />
                <span className="font-bold text-2xl text-white">Tech Team</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering Technology Everywhere. A community of tech enthusiasts,
                developers, and innovators.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-techgold mr-3" />
                  Nairobi CBD
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-techgold mr-3" />
                  0115000514
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-techgold mr-3" />
                  <a href="mailto:info@techteam.com" className="hover:text-white">
                    info@techteam.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="text-center text-gray-500 text-sm mt-10">
            © {new Date().getFullYear()} Tech Team. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-techgold text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default Footer;
