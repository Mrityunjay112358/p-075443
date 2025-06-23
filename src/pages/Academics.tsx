
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, TrendingUp } from "lucide-react";

const Academics = () => {
  const completedResults = [
    { subject: "Chemistry", grade: "99%", status: "completed", special: "Improved after inquiry from 98%" },
    { subject: "Mathematics", grade: "A*", status: "completed" },
    { subject: "Physics", grade: "A*", status: "completed" },
    { subject: "Biology", grade: "A", status: "completed" },
    { subject: "English Language", grade: "A", status: "completed" },
    { subject: "Computer Science", grade: "A*", status: "completed" },
    { subject: "Business Studies", grade: "A", status: "completed" },
  ];

  const pendingResults = [
    { subject: "Economics", status: "pending" },
    { subject: "History", status: "pending" },
    { subject: "Art & Design", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Academic Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My iGCSE Grade 10 examination results showcase consistent high performance 
              across multiple subjects, reflecting dedication to academic excellence.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                <p className="text-gray-600">Results Published</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                <p className="text-gray-600">A* Grades Achieved</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <p className="text-gray-600">Results Pending</p>
              </CardContent>
            </Card>
          </div>

          {/* Completed Results */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Published Results (7 subjects)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {completedResults.map((result, index) => (
                  <div 
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{result.subject}</h3>
                      <Badge variant={result.grade.includes('A*') ? 'default' : result.grade.includes('A') ? 'secondary' : 'outline'}>
                        {result.grade}
                      </Badge>
                    </div>
                    {result.special && (
                      <div className="flex items-center gap-1 text-sm text-green-600 bg-green-50 p-2 rounded">
                        <TrendingUp className="w-4 h-4" />
                        <span>{result.special}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-500" />
                Pending Results (3 subjects)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {pendingResults.map((result, index) => (
                  <div 
                    key={index}
                    className="border rounded-lg p-4 bg-blue-50 border-blue-200"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900">{result.subject}</h3>
                      <Badge variant="outline" className="bg-blue-100 text-blue-700">
                        Awaiting Results
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Special Achievement Highlight */}
          <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Chemistry Grade Improvement
                  </h3>
                  <p className="text-gray-700">
                    Through careful inquiry and review process, my Chemistry grade was improved 
                    from 98% to 99%, demonstrating attention to detail and commitment to academic excellence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Academics;
