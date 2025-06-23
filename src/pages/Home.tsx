
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { MapPin, School, Mail, Phone, ArrowRight, Zap, Code, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
                <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Available for Projects</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Mrityunjay
                </span>
              </h1>
              
              <div className="space-y-4 text-lg text-gray-300 mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                    <School className="w-4 h-4 text-black" />
                  </div>
                  <span>Grade 11 Student</span>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                  <span>Jayshree Periwal International School, Jaipur</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                Welcome to my digital universe! I'm a dedicated student passionate about 
                cutting-edge technology, innovation, and creating impactful solutions 
                through code and creativity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                  <Link to="/academics" className="flex items-center gap-2">
                    View My Academics
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                  <Link to="/projects" className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Explore Projects
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Profile Section */}
            <div className="flex-1 max-w-md relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-black text-8xl font-bold shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  M
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-3xl shadow-lg animate-bounce">
                  🎓
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl shadow-lg animate-pulse">
                  ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Info Cards - Solid Colors */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Academic Excellence - Solid Color */}
            <div className="relative group cursor-pointer transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-1 bg-cyan-500/30 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              <div className="relative glass-card p-8 text-center backdrop-blur-xl rounded-[2rem] border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float">
                  <School className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-visible">Academic Excellence</h3>
                <p className="text-muted mb-6 leading-relaxed">Outstanding performance in iGCSE examinations with exceptional results across multiple subjects</p>
                <Button asChild variant="link" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  <Link to="/academics" className="flex items-center gap-2 justify-center">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Innovative Projects - Solid Color */}
            <div className="relative group cursor-pointer transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-1 bg-purple-500/30 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse delay-300" />
              <div className="relative glass-card p-8 text-center backdrop-blur-xl rounded-[2rem] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float delay-300">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-visible">Innovative Projects</h3>
                <p className="text-muted mb-6 leading-relaxed">Creative solutions and cutting-edge projects showcasing advanced problem-solving and technical skills</p>
                <Button asChild variant="link" className="text-purple-400 hover:text-purple-300 font-semibold">
                  <Link to="/projects" className="flex items-center gap-2 justify-center">
                    Explore Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Honours & Awards - Solid Color */}
            <div className="relative group cursor-pointer transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-1 bg-yellow-500/30 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse delay-500" />
              <div className="relative glass-card p-8 text-center backdrop-blur-xl rounded-[2rem] border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float delay-500">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-visible">Honours & Awards</h3>
                <p className="text-muted mb-6 leading-relaxed">Recognition for academic achievements, leadership excellence, and outstanding contributions</p>
                <Button asChild variant="link" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                  <Link to="/awards" className="flex items-center gap-2 justify-center">
                    View Awards
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
