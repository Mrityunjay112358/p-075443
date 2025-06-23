
import React from "react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Calendar, Target, Code, Beaker } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Excellence in Chemistry",
      organization: "Jayshree Periwal International School",
      year: "2025",
      category: "Academic Excellence",
      description: "School top achievement in Chemistry with exceptional performance",
      icon: Beaker
    },
    {
      title: "Excellence in French",
      organization: "Jayshree Periwal International School", 
      year: "2025",
      category: "Academic Excellence",
      description: "School top achievement in French language with outstanding results",
      icon: Star
    },
    {
      title: "Cambridge Science Competition - National Winner",
      organization: "Cambridge Assessment",
      year: "2024",
      category: "Research & Innovation",
      description: "Developed a research paper and achieved national winner status in the prestigious Cambridge Science Competition",
      icon: Trophy
    },
    {
      title: "LingHacks Hackathon 2025 - 2nd Place",
      organization: "LingHacks",
      year: "2025",
      category: "Technology & Innovation",
      description: "Secured 2nd place and won $450 prize in the competitive LingHacks Hackathon",
      icon: Code
    },
    {
      title: "AIME Qualification",
      organization: "Mathematical Association of America",
      year: "2024",
      category: "Mathematics",
      description: "Qualified for the American Invitational Mathematics Examination, demonstrating exceptional mathematical ability",
      icon: Target
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic Excellence": return "bg-gradient-to-r from-blue-400 to-cyan-500 text-black";
      case "Research & Innovation": return "bg-gradient-to-r from-purple-400 to-violet-500 text-black";
      case "Technology & Innovation": return "bg-gradient-to-r from-green-400 to-emerald-500 text-black";
      case "Mathematics": return "bg-gradient-to-r from-orange-400 to-yellow-500 text-black";
      default: return "bg-gradient-to-r from-gray-400 to-gray-500 text-black";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 mb-8 backdrop-blur-xl">
              <Trophy className="w-5 h-5 text-yellow-400 mr-3" />
              <span className="text-yellow-400 text-sm font-medium text-visible">Recognition & Achievement</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-visible">
              Honours &{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 bg-clip-text text-transparent neon-text">
                Awards
              </span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Recognition for academic achievements, research excellence, technological innovation, and mathematical prowess
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-500 group animate-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-muted">{award.year}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-visible mb-2">{award.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-muted">{award.organization}</p>
                    <Badge className={`${getCategoryColor(award.category)} font-bold px-3 py-1 rounded-full`}>
                      {award.category}
                    </Badge>
                  </div>
                  <p className="text-muted leading-relaxed">{award.description}</p>
                </div>
              );
            })}
          </div>

          {/* Academic Achievements Summary */}
          <div className="glass-card p-8 backdrop-blur-xl border-gradient-to-r from-yellow-500/30 to-orange-500/30">
            <h3 className="text-3xl font-semibold text-center mb-8 text-visible flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-black" />
              </div>
              Achievement Highlights
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-yellow-400 mb-3 text-visible">2</div>
                <p className="text-visible font-medium">Subject Excellence Awards</p>
                <p className="text-sm text-muted">School top in Chemistry & French</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-400 mb-3 text-visible">1st</div>
                <p className="text-visible font-medium">National Science Winner</p>
                <p className="text-sm text-muted">Cambridge Science Competition</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-green-400 mb-3 text-visible">2nd</div>
                <p className="text-visible font-medium">Hackathon Placement</p>
                <p className="text-sm text-muted">LingHacks 2025 - $450 Prize</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-orange-400 mb-3 text-visible">AIME</div>
                <p className="text-visible font-medium">Math Qualification</p>
                <p className="text-sm text-muted">American Invitational Mathematics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
