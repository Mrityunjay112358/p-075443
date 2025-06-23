
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lightbulb, Code2, Rocket } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced data visualization platform with machine learning integration for predictive analytics and real-time insights.",
      technologies: ["React", "TypeScript", "Python", "TensorFlow"],
      status: "In Development",
      category: "AI & Machine Learning",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Blockchain Portfolio Tracker",
      description: "Cryptocurrency portfolio management application with real-time market data and automated trading alerts.",
      technologies: ["Next.js", "Web3", "Solidity", "Node.js"],
      status: "Planning",
      category: "Blockchain",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for visualizing and understanding deep learning architectures with 3D network representations.",
      technologies: ["Three.js", "Python", "FastAPI", "WebGL"],
      status: "Concept",
      category: "Data Science",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Development": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Planning": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Concept": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-8 backdrop-blur-xl">
              <Code2 className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-purple-400 text-sm font-medium text-visible">Innovation Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-visible">
              Future{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent neon-text">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Cutting-edge innovations and creative solutions showcasing advanced technology integration
            </p>
          </div>

          {/* Coming Soon Feature */}
          <div className="glass-card mb-12 p-8 text-center border-blue-500/30">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <Rocket className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-visible mb-4">
              Revolutionary Projects in Development
            </h3>
            <p className="text-muted max-w-2xl mx-auto mb-6">
              Pioneering the future with AI-driven solutions, blockchain innovations, and immersive technologies. 
              Experience the next generation of digital excellence.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <Lightbulb className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium text-visible">Coming Soon</span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-500 group animate-glow">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-3`}>
                      <Code2 className="w-6 h-6 text-black" />
                    </div>
                    <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-visible mb-2">{project.title}</h3>
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs text-muted mb-4">
                    {project.category}
                  </div>
                </div>
                
                <p className="text-muted mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-visible mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 text-xs text-visible font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20 text-sm font-medium text-visible hover:bg-white/20 transition-all duration-300">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 text-sm font-medium text-blue-400 hover:bg-blue-500/30 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="glass-card p-8 text-center border-gradient-to-r from-purple-500/30 to-pink-500/30">
            <h3 className="text-2xl font-bold text-visible mb-4">
              Let's Build the Future Together
            </h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Passionate about transforming innovative ideas into revolutionary digital experiences. 
              Ready to collaborate on groundbreaking projects that push technological boundaries.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-black font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
