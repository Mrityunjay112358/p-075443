
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Award, TrendingUp, Star, Zap } from "lucide-react";

const Academics = () => {
  const subjects = [
    { name: "Chemistry", grade: "A*", percentage: 99, color: "from-green-400 to-emerald-500", note: "Grade improved from 98% to 99% after inquiry" },
    { name: "Mathematics", grade: "A*", percentage: 95, color: "from-blue-400 to-cyan-500" },
    { name: "Physics", grade: "A*", percentage: 94, color: "from-purple-400 to-violet-500" },
    { name: "Biology", grade: "A*", percentage: 92, color: "from-pink-400 to-rose-500" },
    { name: "English Literature", grade: "A", percentage: 88, color: "from-orange-400 to-yellow-500" },
    { name: "Computer Science", grade: "A*", percentage: 96, color: "from-cyan-400 to-teal-500" },
    { name: "Business Studies", grade: "A", percentage: 89, color: "from-indigo-400 to-purple-500" },
  ];

  const pendingSubjects = [
    "Economics",
    "History", 
    "Geography"
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A*": return "bg-gradient-to-r from-green-400 to-emerald-500";
      case "A": return "bg-gradient-to-r from-blue-400 to-cyan-500";
      case "B": return "bg-gradient-to-r from-yellow-400 to-orange-500";
      default: return "bg-gradient-to-r from-gray-400 to-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-500/30 mb-8 backdrop-blur-xl">
              <BookOpen className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-blue-400 text-sm font-medium text-visible">Academic Journey</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-visible">
              Academic{" "}
              <span className="bg-gradient-to-r from-blue-400 via-green-500 to-cyan-400 bg-clip-text text-transparent neon-text">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Outstanding performance in iGCSE examinations with exceptional results across multiple subjects
            </p>
          </div>

          {/* Academic Stats - Circular Design */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500 animate-glow">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float">
                <Star className="w-10 h-10 text-black" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2 text-visible">7/10</div>
              <p className="text-muted">Results Published</p>
            </div>
            
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500 animate-glow">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float delay-300">
                <TrendingUp className="w-10 h-10 text-black" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2 text-visible">94.7%</div>
              <p className="text-muted">Average Score</p>
            </div>
            
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500 animate-glow">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float delay-500">
                <Award className="w-10 h-10 text-black" />
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-2 text-visible">6</div>
              <p className="text-muted">A* Grades</p>
            </div>
          </div>

          {/* Subject Results - Fluid Cards */}
          <div className="glass-card mb-12 p-8 backdrop-blur-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-visible flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 text-yellow-400" />
                iGCSE Results
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {subjects.map((subject, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-visible">{subject.name}</h3>
                    <Badge className={`${getGradeColor(subject.grade)} text-black font-bold px-4 py-2 rounded-full`}>
                      {subject.grade}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-muted mb-2">
                      <span>Score</span>
                      <span className="text-visible font-medium">{subject.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${subject.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${subject.percentage}%` }}
                      />
                    </div>
                  </div>
                  
                  {subject.note && (
                    <div className="text-sm text-green-400 bg-green-500/10 p-3 rounded-xl border border-green-500/20 backdrop-blur-sm">
                      <span className="text-visible">{subject.note}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pending Results - Organic Shape */}
          <div className="glass-card p-8 backdrop-blur-xl border-yellow-500/30">
            <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-3 text-visible">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-black text-lg">⏳</span>
              </div>
              Pending Results
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pendingSubjects.map((subject, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-4 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300">
                  <span className="text-yellow-400 font-medium text-visible">{subject}</span>
                  <div className="text-sm text-muted mt-1">Awaiting Results</div>
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
