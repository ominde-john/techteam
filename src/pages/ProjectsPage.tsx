// ProjectsPage — Updated to Style 1 (Professional African developer portraits) + improved UI/UX
// Paste into ProjectsPage.tsx / ProjectsPage.jsx

import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Filter, Grid, LayoutGrid } from "lucide-react";

const ProjectsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // Improved, Africa-focused author names + professional portraits (Unsplash)
  const projects = [
    {
      id: 1,
      title: "Open Source AI Assistant",
      description:
        "A community-developed AI assistant that helps answer coding questions and debug errors in real-time.",
      category: "Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
      author: "James Mwangi",
      authorImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      technologies: ["Python", "TensorFlow", "React"],
      stars: 145,
      forks: 32,
    },
    {
      id: 2,
      title: "Blockchain Voting System",
      description:
        "Secure and transparent voting system built on blockchain technology for organizational elections.",
      category: "Blockchain",
      image:
        "https://images.unsplash.com/photo-1639322537231-2f206f0da5f7?auto=format&fit=crop&w=1400&q=80",
      author: "Amina Okoro",
      authorImage:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=400&q=80",
      technologies: ["Solidity", "Ethereum", "TypeScript"],
      stars: 98,
      forks: 24,
    },
    {
      id: 3,
      title: "AR Learning Platform",
      description:
        "Educational platform using augmented reality to make learning more interactive and engaging.",
      category: "Augmented Reality",
      image:
        "https://images.unsplash.com/photo-1626379953704-055a697cbaa7?auto=format&fit=crop&w=1400&q=80",
      author: "Kwame Mensah",
      authorImage:
        "https://images.unsplash.com/photo-1531123414780-fc0b13f1b4d1?auto=format&fit=crop&w=400&q=80",
      technologies: ["Unity", "AR.js", "React Native"],
      stars: 76,
      forks: 15,
    },
    {
      id: 4,
      title: "5G Network Monitor",
      description:
        "Tool for monitoring and analyzing 5G network performance and coverage in real-time.",
      category: "Telecommunications",
      image:
        "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=1400&q=80",
      author: "Zanele Dlamini",
      authorImage:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80",
      technologies: ["Python", "Django", "D3.js"],
      stars: 112,
      forks: 27,
    },
    {
      id: 5,
      title: "Cybersecurity Training Simulator",
      description:
        "Interactive simulation platform for training employees on recognizing and preventing cyber attacks.",
      category: "Cybersecurity",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80",
      author: "Fatima Ahmed",
      authorImage:
        "https://images.unsplash.com/photo-1545996124-fd8b6b2a3b3c?auto=format&fit=crop&w=400&q=80",
      technologies: ["JavaScript", "Node.js", "Three.js"],
      stars: 89,
      forks: 21,
    },
    {
      id: 6,
      title: "Virtual Reality Meeting Space",
      description:
        "A VR environment for remote teams to collaborate and meet as if they were in the same physical space.",
      category: "Virtual Reality",
      image:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1400&q=80",
      author: "Mohamed Abdi",
      authorImage:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
      technologies: ["Unity", "WebXR", "React"],
      stars: 134,
      forks: 38,
    },
  ];

  const categories = Array.from(new Set(projects.map((p) => p.category)));

  const filteredProjects = projects
    .filter((project) => {
      if (categoryFilter && project.category !== categoryFilter) return false;
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.technologies.join(" ").toLowerCase().includes(q)
      );
    })
    .sort((a, b) => b.stars - a.stars); // sort by popularity

  return (
    <div>
      <PageHeader
        title="Community Projects"
        description="Explore projects created by our talented community members across Africa and beyond."
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Search & filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search projects, technologies or authors..."
                className="pl-10 w-full rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    {categoryFilter ? categoryFilter : "Filter"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setCategoryFilter(null)}>All</DropdownMenuItem>
                  {categories.map((cat) => (
                    <DropdownMenuItem key={cat} onClick={() => setCategoryFilter(cat)}>
                      {cat}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex items-center border rounded-md overflow-hidden">
                <Button
                  variant="ghost"
                  className={`px-2 h-9 ${viewMode === "grid" ? "bg-gray-100" : ""}`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className={`px-2 h-9 ${viewMode === "list" ? "bg-gray-100" : ""}`}
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                >
                  <Grid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Gallery */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover"
                    />
                    <span className="absolute left-4 top-4 text-xs font-medium text-white bg-black/40 px-3 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={project.authorImage}
                          alt={project.author}
                          className="h-10 w-10 rounded-full mr-3 object-cover border"
                        />
                        <div>
                          <p className="text-sm font-medium">{project.author}</p>
                          <p className="text-xs text-gray-500">Lead Developer</p>
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 flex items-center gap-3">
                        <div className="flex items-center">
                          <span className="mr-1">⭐</span>
                          <span>{project.stars}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-1">🔀</span>
                          <span>{project.forks}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Button variant="outline" className="w-full rounded-full">
                        View Project
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="md:col-span-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ minHeight: "200px" }}
                      />
                    </div>
                    <div className="md:col-span-3 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>

                        <div className="text-sm text-gray-600 flex items-center gap-3">
                          <div className="flex items-center">
                            <span className="mr-1">⭐</span>
                            <span>{project.stars}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-1">🔀</span>
                            <span>{project.forks}</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <img
                            src={project.authorImage}
                            alt={project.author}
                            className="h-10 w-10 rounded-full mr-3 object-cover border"
                          />
                          <div>
                            <p className="font-medium">{project.author}</p>
                            <p className="text-xs text-gray-500">Full stack engineer</p>
                          </div>
                        </div>
                        <div>
                          <Button className="bg-techblue hover:bg-techblue-dark rounded-full">
                            View Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-techblue to-techblue-dark text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Have a project to showcase?</h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Share your work with the Tech Team community and get feedback, collaborators, and recognition.
            </p>
            <Button asChild size="lg" className="bg-white text-techblue hover:bg-gray-100 border-0 rounded-full">
              <a href="#submit">Submit Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
