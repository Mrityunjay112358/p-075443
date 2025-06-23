
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lightbulb } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Title 1",
      description: "A brief description of your first project. Explain what it does, what technologies you used, and what problem it solves.",
      technologies: ["React", "JavaScript", "CSS"],
      status: "Completed",
      category: "Web Development"
    },
    {
      title: "Project Title 2",
      description: "Description of your second project. This could be a school project, personal project, or something you built for fun.",
      technologies: ["Python", "Data Analysis"],
      status: "In Progress",
      category: "Data Science"
    },
    {
      title: "Project Title 3",
      description: "Another project description. Feel free to add real projects as you complete them.",
      technologies: ["Java", "Mobile App"],
      status: "Planning",
      category: "Mobile Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Planning": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my technical projects, creative solutions, and innovative ideas. 
              Each project represents my journey of learning and problem-solving.
            </p>
          </div>

          {/* Coming Soon Notice */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <Lightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Projects Coming Soon!
              </h3>
              <p className="text-gray-700">
                I'm currently working on exciting projects that I'll be showcasing here soon. 
                Check back regularly to see my latest work and innovations.
              </p>
            </CardContent>
          </Card>

          {/* Sample Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" disabled>
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" disabled>
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Have a Project Idea?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on interesting projects. 
                Whether it's academic, personal, or community-focused, I'd love to hear your ideas!
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
