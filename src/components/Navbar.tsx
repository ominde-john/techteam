import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, HelpCircle, LifeBuoy } from "lucide-react"; // Imported new icons

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Primary Navigation Links
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects" },
    { name: "Discussion", path: "/discussion" },
    { name: "Contact", path: "/contact" },
  ];

  // Utility Links (FAQ/Support)
  const utilityItems = [
    { name: "FAQ", path: "/faq", icon: <HelpCircle className="h-4 w-4 mr-1 text-techgold" /> },
    { name: "Help Desk", path: "/help", icon: <LifeBuoy className="h-4 w-4 mr-1 text-techgold" /> },
    { name: "Support", path: "/support", icon: <LifeBuoy className="h-4 w-4 mr-1 text-techgold" /> },
  ];

  const CONTACT_PHONE = "0115000514";
  const CONTACT_EMAIL = "info@techteam.org"; // Example email

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white sticky top-0 z-50">

      {/* 🚀 1. TOP BAR (Utility & Contacts) - High Contrast/Accessibility */}
      <div className="bg-gray-900 text-gray-300 text-sm py-2 hidden md:block border-b border-techgold/20">
        <div className="container-custom flex justify-between items-center">
          
          {/* Contacts */}
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${CONTACT_PHONE}`} 
              className="flex items-center hover:text-techgold transition-colors"
              aria-label={`Call us at ${CONTACT_PHONE}`}
            >
              <Phone className="h-4 w-4 mr-1 text-techgold" />
              {CONTACT_PHONE}
            </a>
            <a 
              href={`mailto:${CONTACT_EMAIL}`} 
              className="flex items-center hover:text-techgold transition-colors"
              aria-label={`Email us at ${CONTACT_EMAIL}`}
            >
              <Mail className="h-4 w-4 mr-1 text-techgold" />
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Utility Links */}
          <div className="flex items-center space-x-4">
            {utilityItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center hover:text-techgold transition-colors"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* 🧭 2. MAIN NAVBAR - Branding and Primary Navigation */}
      <div className="shadow-md"> {/* Added stronger shadow to main bar */}
        <div className="container-custom flex justify-between items-center py-4">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            {/* UI: Reduced logo size slightly to fit the two-tier structure better, added hover effect */}
            <img 
              src="/tech team logo.png" 
              alt="Tech Team Logo" 
              className="h-10 w-10 rounded-full object-cover border-2 border-techblue group-hover:border-techgold transition-colors duration-300" 
            />
            {/* UI: Used techgold for primary text accent */}
            <span className="font-extrabold text-2xl text-gray-900 group-hover:text-techgold transition-colors duration-300">Tech Team</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  px-3 py-2 rounded-lg text-base font-semibold transition-all duration-300 
                  ${
                    isActive(item.path)
                      ? "text-techgold bg-techgold/10 border-b-2 border-techgold" // Active state improved
                      : "text-gray-700 hover:text-techgold hover:bg-gray-100" // Hover state improved
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button - Kept techblue for distinction */}
            <Link to="/dashboard">
              <Button className="ml-4 bg-techblue hover:bg-techblue-dark shadow-lg transition-transform hover:scale-[1.03]">
                Member Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-techgold hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 3. Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg absolute w-full z-40">
          <div className="flex flex-col space-y-2">
            
            {/* Primary Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-techgold font-bold bg-techgold/10"
                    : "text-gray-700 hover:text-techgold hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Utility Links in Mobile */}
            <div className="pt-2 border-t border-gray-100 space-y-1">
              {utilityItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center px-3 py-2 rounded-md text-base text-gray-700 hover:text-techgold hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contacts in Mobile */}
            <div className="flex flex-col space-y-2 mt-4 text-sm pt-4 border-t border-gray-100">
                <a href={`tel:${CONTACT_PHONE}`} className="flex items-center text-gray-700 hover:text-techgold">
                    <Phone className="h-4 w-4 mr-2 text-techgold" /> Call: {CONTACT_PHONE}
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-gray-700 hover:text-techgold">
                    <Mail className="h-4 w-4 mr-2 text-techgold" /> Email: {CONTACT_EMAIL}
                </a>
            </div>

            {/* CTA Button */}
            <Link 
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="mt-4 w-full bg-techblue hover:bg-techblue-dark shadow-lg">
                Member Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;