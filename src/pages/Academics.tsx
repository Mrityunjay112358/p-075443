
import React from "react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Trophy, Clock, Star, Target } from "lucide-react";

const Academics = () => {
  const publishedResults = [
    { subject: "Business Studies", grade: "A*", score: "95%", color: "from-green-400 to-emerald-500" },
    { subject: "English Literature", grade: "A*", score: "91%", color: "from-blue-400 to-cyan-500" },
    { subject: "English Language", grade: "A*", score: "90%", color: "from-purple-400 to-violet-500" },
    { subject: "Chemistry", grade: "A*", score: "99%", color: "from-yellow-400 to-orange-500" },
    { subject: "Additional Mathematics", grade: "A*", score: "98%", color: "from-red-400 to-pink-500" },
    { subject: "Physics", grade: "A*", score: "97%", color: "from-indigo-400 to-blue-500" },
    { subject: "French", grade: "A*", score: "97%", color: "from-teal-400 to-green-500" }
  ];

  const pendingResults = [
    { subject: "Global Perspectives", status: "Pending", color: "from-gray-400 to-gray-500" },
    { subject: "Computer Science", status: "Pending", color: "from-gray-400 to-gray-500" },
    { subject: "Extended Mathematics", status: "Pending", color: "from-gray-400 to-gray-500" }
  ];

  const achievements = [
    {
      title: "Excellence in Chemistry",
      description: "School Top Achievement",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Excellence in French",
      description: "School Top Achievement", 
      icon: Trophy,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Cambridge Science Competition",
      description: "National Winner - Research Paper",
      icon: Award,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "LingHacks Hackathon 2025",
      description: "2nd Place Winner - $450 Prize",
      icon: Star,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "AIME Qualification",
      description: "Qualified for American Invitational Mathematics Examination",
      icon: Target,
      color: "from-red-400 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8 backdrop-blur-xl">
              <BookOpen className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-blue-400 text-sm font-medium text-visible">Academic Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-visible">
              Academic{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent neon-text">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Exceptional performance across diverse subjects with consistent A* grades and innovative research contributions
            </p>
          </div>

          {/* Overall Performance */}
          <div className="glass-card mb-16 p-8 text-center border-blue-500/30">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <Trophy className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-3xl font-bold text-visible mb-4">Outstanding iGCSE Performance</h3>
            <div className="text-6xl font-bold text-blue-400 mb-4 text-visible">97.5%</div>
            <p className="text-xl text-muted mb-6">Overall Percentage Across All Published Results</p>
            <div className="flex justify-center items-center gap-4">
              <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold px-4 py-2 text-lg">
                7 A* Grades Published
              </Badge>
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 text-lg">
                3 Results Pending
              </Badge>
            </div>
          </div>

          {/* Published Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-visible flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-black" />
              </div>
              Published Results - 7 A* Grades
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {publishedResults.map((result, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-500 group animate-glow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-float`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <BookOpen className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-visible mb-2">{result.subject}</h3>
                  <div className="text-3xl font-bold text-green-400 mb-2 text-visible">{result.grade}</div>
                  <p className="text-muted font-semibold">{result.score}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-visible flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-black" />
              </div>
              Pending Results
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pendingResults.map((result, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-500 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse`}>
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-visible mb-2">{result.subject}</h3>
                  <p className="text-yellow-400 font-semibold">{result.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
