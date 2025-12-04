import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const PageHeader = ({ title, description, children, className = "" }: PageHeaderProps) => {
  return (
    // UI/UX Improvement: Added strong shadow, border, and used a specific color set.
    <div className={`
      relative 
      bg-gray-900 
      text-white 
      py-20 md:py-28 lg:py-32 
      shadow-2xl 
      border-b-4 border-techgold/50 
      overflow-hidden 
      ${className}
    `}>
      
      {/* 🌟 Background Effect Layer (Subtle Diagonal Texture or Dots) */}
      {/* Assume 'bg-dot-pattern' or similar utility class for subtle background texture is defined */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      ></div>

      <div className="container-custom relative z-10">

        {/* TITLE - Improved Typography and Visual Weight */}
        <h1 className="
          text-4xl md:text-5xl lg:text-7xl 
          font-extrabold 
          mb-4 
          tracking-tight 
          drop-shadow-lg 
          animate-fade-up
        ">
          {/* Highlight the first word with brand color for visual interest */}
          <span className="text-techgold mr-2">{title.split(" ")[0]}</span> 
          {title.split(" ").slice(1).join(" ")}
        </h1>

        {description && (
          // DESCRIPTION - Improved Readability and Separation
          <p 
            className="
              text-lg md:text-2xl 
              text-gray-300 
              font-light 
              max-w-3xl 
              mt-6 
              border-l-4 border-techgold 
              pl-4 
              animate-fade-up
            " 
            style={{ animationDelay: "0.1s" }}
          >
            {description}
          </p>
        )}

        {children && (
          // CHILDREN/CTA - Clearer Visual Separation
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;