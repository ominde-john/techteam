
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const BlogsPage = () => {
  const categories = ["All", "Tech News", "Tutorials", "Coding Challenge", "Reviews", "Member Spotlight", "Career Advice"];
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is changing the landscape of software development and what developers need to know.",
      category: "Tech News",
      author: "Jeremy Bravoge",
      authorImage: "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/577978823_1317783410084497_4369125535467726612_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t3fHbwfcrTQQ7kNvwEvHL9C&_nc_oc=Admv-rt1YNLStveYZFtDriJllg1MQ5ADTDzZ9kMdPloTCaYhdvBIfrOHHnZCjusgcF0&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=9mDLXcq3dCZ6Cg-MUPC5Eg&oh=00_Afi8tQAlti68NbkafcWdvwMocrbcVCvXLAoUoCIP7icMTA&oe=6923DA4A",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Your First React Application: A Step-by-Step Guide",
      excerpt: "Learn how to create your first React application from scratch with this comprehensive tutorial for beginners.",
      category: "Tutorials",
      author: "Evans Richard",
      authorImage: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-1/488623615_122146093142511675_2226259015078671316_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=ia6Mp0s7fTgQ7kNvwHofnDS&_nc_oc=Adm9RK8DkB6H9QpU6WujNpy5DuuuFp4i6JRcDaU6ptsRwOxCXAMcwmxdRGL4H2kvRrw&_nc_zt=24&_nc_ht=scontent-mba2-1.xx&_nc_gid=5TNsU2kVMHWq7arfv7VWnQ&oh=00_AfitfzXCI5c22902aAIUmG0vesiQJ8O4VA3nGaJffaba0g&oe=6923DC42",
      date: "April 22, 2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read"
    },
   
  
    {
      id: 5,
      title: "Member Spotlight: Jeremy Bravoge Journey from Beginner to Senior Developer",
      excerpt: "Learn about community member Jane Doe's inspiring career path and her advice for aspiring developers.",
      category: "Member Spotlight",
      author: "Code Master",
      authorImage: "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/577978823_1317783410084497_4369125535467726612_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t3fHbwfcrTQQ7kNvwEvHL9C&_nc_oc=Admv-rt1YNLStveYZFtDriJllg1MQ5ADTDzZ9kMdPloTCaYhdvBIfrOHHnZCjusgcF0&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=9mDLXcq3dCZ6Cg-MUPC5Eg&oh=00_Afi8tQAlti68NbkafcWdvwMocrbcVCvXLAoUoCIP7icMTA&oe=6923DA4A",
      date: "February 10, 2023",
      image: "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/577978823_1317783410084497_4369125535467726612_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t3fHbwfcrTQQ7kNvwEvHL9C&_nc_oc=Admv-rt1YNLStveYZFtDriJllg1MQ5ADTDzZ9kMdPloTCaYhdvBIfrOHHnZCjusgcF0&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=9mDLXcq3dCZ6Cg-MUPC5Eg&oh=00_Afi8tQAlti68NbkafcWdvwMocrbcVCvXLAoUoCIP7icMTA&oe=6923DA4A",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Navigating the Tech Job Market in 2026",
      excerpt: "Expert advice on how to stand out in the competitive tech job market, including resume tips and interview strategies.",
      category: "Career Advice",
      author: "John Ominde",
      authorImage: "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/439227936_122142134894144804_8017458543335806102_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=DtFTYLL9Kt4Q7kNvwG3yvGp&_nc_oc=Adk_MZLHWDRkyZlvMkzUM6uvPBlwEE_MI1xVDWmgNF4fxxyydQ2j_RoCGOlgJsMhYmI&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=9tOB6pAzox-tVXFaYe4eww&oh=00_AfjcMO-u9iMuq5JCX9RXh7zHyKFYpbACBJevERncgBeJIw&oe=6923FE39",
      date: "January 25, 2023",
      image: "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/439227936_122142134894144804_8017458543335806102_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=DtFTYLL9Kt4Q7kNvwG3yvGp&_nc_oc=Adk_MZLHWDRkyZlvMkzUM6uvPBlwEE_MI1xVDWmgNF4fxxyydQ2j_RoCGOlgJsMhYmI&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=9tOB6pAzox-tVXFaYe4eww&oh=00_AfjcMO-u9iMuq5JCX9RXh7zHyKFYpbACBJevERncgBeJIw&oe=6923FE39",
      readTime: "7 min read"
    }
  ];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div>
      <PageHeader
        title="Tech Team Blog"
        description="Stay informed with the latest tech news, tutorials, coding challenges, and more"
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="search" 
                  placeholder="Search articles..." 
                  className="pl-10 w-full md:w-80"
                />
              </div>
            </div>
            <div className="w-full md:w-auto overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={activeCategory === category ? "bg-techblue hover:bg-techblue-dark" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: '300px' }}
                  />
                </div>
                <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                  <span className="text-sm font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full inline-block mb-4">
                    {filteredPosts[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={filteredPosts[0].authorImage} 
                        alt={filteredPosts[0].author}
                        className="h-10 w-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="font-medium">{filteredPosts[0].author}</p>
                        <p className="text-sm text-gray-500">{filteredPosts[0].date}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {filteredPosts[0].readTime}
                    </span>
                  </div>
                  <Button className="mt-6 bg-techblue hover:bg-techblue-dark">
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map(post => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        className="h-8 w-8 rounded-full mr-2 object-cover"
                      />
                      <div>
                        <p className="font-medium text-sm">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-techblue hover:text-techblue-dark hover:bg-techblue/5 p-0">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-1">
              <Button variant="outline" className="w-10 h-10 p-0">
                &laquo;
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0 bg-techblue text-white">
                1
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                2
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                3
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                &raquo;
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
