
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-500/30 mb-6">
              <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Academic Journey</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Academic{" "}
              <span className="bg-gradient-to-r from-blue-400 via-green-500 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Outstanding performance in iGCSE examinations with exceptional results across multiple subjects
            </p>
          </div>

          {/* Academic Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 backdrop-blur-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">7/10</div>
                <p className="text-gray-400">Results Published</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 backdrop-blur-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">94.7%</div>
                <p className="text-gray-400">Average Score</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 backdrop-blur-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
                <p className="text-gray-400">A* Grades</p>
              </CardContent>
            </Card>
          </div>

          {/* Subject Results */}
          <Card className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-gray-700/50 backdrop-blur-xl mb-12">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 text-yellow-400" />
                iGCSE Results
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {subjects.map((subject, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">{subject.name}</h3>
                        <Badge className={`${getGradeColor(subject.grade)} text-black font-bold px-3 py-1`}>
                          {subject.grade}
                        </Badge>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Score</span>
                          <span>{subject.percentage}%</span>
                        </div>
                        <Progress 
                          value={subject.percentage} 
                          className="h-3 bg-gray-700"
                        />
                      </div>
                      
                      {subject.note && (
                        <p className="text-sm text-green-400 bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                          {subject.note}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Results */}
          <Card className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-yellow-500/30 backdrop-blur-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-black text-sm">⏳</span>
                </div>
                Pending Results
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {pendingSubjects.map((subject, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4 text-center">
                    <span className="text-yellow-400 font-medium">{subject}</span>
                    <div className="text-sm text-gray-400 mt-1">Awaiting Results</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Academics;
