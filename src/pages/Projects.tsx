
import React from "react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Code2, Rocket, Brain, Heart, Music, Cpu, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced data visualization from CCTV footage with machine learning integration for predictive analytics and real-time insights for shop managers",
      technologies: ["AI", "Machine Learning", "CCTV Analytics", "Real-time Processing"],
      status: "In Process of Launch",
      category: "AI & Machine Learning",
      gradient: "from-blue-500 to-cyan-500",
      icon: Brain
    },
    {
      title: "AI-Driven Ambulance Traffic Management",
      description: "Built real-time emergency detection system using CCTV, OCR, and traffic signal control to prioritize ambulances at intersections. Endorsed by Punjab Police and Traffic Control System",
      technologies: ["CCTV", "OCR", "Traffic Control", "Emergency Detection"],
      status: "Pilot Location: Mohali, Punjab",
      category: "Smart City Solutions",
      gradient: "from-red-500 to-orange-500",
      icon: Heart
    },
    {
      title: "AERIS – Emotion & Speaker Aware Hearing Aid Assistant",
      description: "Built an assistive wearable that identifies speaker (e.g., mom/dad/friend) and emotional tone (happy, sad, angry) using audio cues (no facial input) to support hearing-impaired users via vibrational feedback and color-coded text.",
      technologies: ["Audio Classification", "Speaker Embedding", "Haptic Mapping", "TinyML"],
      status: "Research Paper Submitted to IEEE",
      category: "Assistive Technology",
      gradient: "from-purple-500 to-pink-500",
      icon: Heart
    },
    {
      title: "GlobalMix – Cross-Cultural Music AI",
      description: "Developing AI system that transforms Western pop songs into culturally grounded genres like Hindustani thumri, preserving emotional arcs. Tackles cultural authenticity, microtonal conversion, and emotion transfer.",
      technologies: ["AI", "Music Processing", "Cultural Analysis", "Emotion Transfer"],
      status: "In Development",
      category: "AI & Cultural Innovation",
      gradient: "from-green-500 to-emerald-500",
      icon: Music
    },
    {
      title: "Musica Universalis – Music for Social Healing",
      description: "Led free music education for underprivileged youth; partnered with 5 NGOs and Soul of SYMPHONY Jaipur. Brought music into hospitals and underserved schools; promoted creative expression.",
      technologies: ["Music Education", "Social Impact", "NGO Partnerships", "Community Outreach"],
      status: "President & Program Lead",
      category: "Social Impact",
      gradient: "from-yellow-500 to-orange-500",
      icon: Music
    },
    {
      title: "NephroLight – AI Wearable for Kidney Health",
      description: "Designing a low-cost wearable that uses multispectral PPG (940/970nm + green) to predict 8 kidney-related biomarkers (fluid overload, anemia, access stenosis, etc.) via on-device TinyML — no internet or blood test required.",
      technologies: ["Multispectral PPG", "TinyML", "Biomarker Prediction", "Wearable Tech"],
      status: "Founder, Lead Researcher",
      category: "Healthcare Innovation",
      gradient: "from-cyan-500 to-blue-500",
      icon: Cpu
    }
  ];

  const getStatusColor = (status: string) => {
    if (status.includes("Launch")) return "bg-green-500/20 text-green-400 border-green-500/30";
    if (status.includes("Development")) return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    if (status.includes("Research")) return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    if (status.includes("Pilot")) return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    if (status.includes("President")) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    return "bg-gray-500/20 text-gray-400 border-gray-500/30";
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
              Revolutionary{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent neon-text">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Cutting-edge innovations and creative solutions showcasing advanced technology integration and social impact
            </p>
          </div>

          {/* Internship Highlight */}
          <div className="glass-card mb-12 p-8 text-center border-blue-500/30">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <Award className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-visible mb-4">
              Software Engineering Intern – LLM Security Systems
            </h3>
            <p className="text-cyan-400 font-semibold mb-4">Gracker AI (June 2025 - July 2025)</p>
            <p className="text-muted max-w-3xl mx-auto mb-6">
              Designed and developed a comprehensive tool to test Gracker AI's LLM content agents for vulnerabilities such as prompt injection and jailbreak attacks. Executed 500+ test cases, evaluated 25 attack patterns, and introduced core improvements to agent safety protocols, including output filtering and input sanitization.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-500 group animate-glow">
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-3`}>
                        <IconComponent className="w-6 h-6 text-black" />
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
                  </div>
                </div>
              );
            })}
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Projects;
