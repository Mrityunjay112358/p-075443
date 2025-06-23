
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Calendar } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Academic Excellence Award",
      organization: "Jayshree Periwal International School",
      year: "2024",
      category: "Academic",
      description: "Recognition for outstanding academic performance in Grade 10",
      icon: Trophy
    },
    {
      title: "Subject Excellence - Chemistry",
      organization: "Cambridge Assessment International Education",
      year: "2024",
      category: "Subject Award",
      description: "Exceptional performance in iGCSE Chemistry examination",
      icon: Award
    },
    {
      title: "Honor Roll Student",
      organization: "School Recognition",
      year: "2023-2024",
      category: "Academic",
      description: "Consistent high academic performance throughout the academic year",
      icon: Star
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic": return "bg-blue-100 text-blue-800";
      case "Subject Award": return "bg-green-100 text-green-800";
      case "Leadership": return "bg-purple-100 text-purple-800";
      case "Community": return "bg-orange-100 text-orange-800";
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
              Honours & Awards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition for academic achievements, leadership, and contributions to the school community.
            </p>
          </div>

          {/* Coming Soon Notice */}
          <Card className="mb-8 bg-yellow-50 border-yellow-200">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                More Awards Coming Soon!
              </h3>
              <p className="text-gray-700">
                I'm continuously working towards excellence in academics and extracurricular activities. 
                More awards and recognitions will be added as I achieve them.
              </p>
            </CardContent>
          </Card>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{award.year}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2">{award.title}</CardTitle>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">{award.organization}</p>
                      <Badge className={getCategoryColor(award.category)}>
                        {award.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{award.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Academic Achievements Summary */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Academic Achievements Summary
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">7/10</div>
                  <p className="text-gray-700">iGCSE Results Published</p>
                  <p className="text-sm text-gray-500">Outstanding performance across subjects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                  <p className="text-gray-700">Chemistry Grade</p>
                  <p className="text-sm text-gray-500">After successful grade inquiry</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                  <p className="text-gray-700">Results Pending</p>
                  <p className="text-sm text-gray-500">Awaiting final grades</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Awards;
