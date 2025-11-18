import React from 'react';

const showcaseItems = [
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Linux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Cloudflare', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
  { name: 'Supabase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'OpenAI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg' },
];

const ShowcaseSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Tech Showcase</h2>
        <div className="space-y-12">
          {showcaseItems.map((item, index) => (
            <div key={item.name} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-center text-gray-700">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
