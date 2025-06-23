
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, School, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600">Mrityunjay</span>
              </h1>
              
              <div className="space-y-4 text-lg text-gray-600 mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <School className="w-5 h-5 text-blue-600" />
                  <span>Grade 11 Student</span>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Jayshree Periwal International School, Jaipur</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-8 max-w-2xl">
                Welcome to my portfolio! I'm a dedicated student passionate about learning, 
                innovation, and making a positive impact through my academic and project work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/academics">View My Academics</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/projects">See My Projects</Link>
                </Button>
              </div>
            </div>
            
            {/* Profile Image Placeholder */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  M
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                  🎓
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <School className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <p className="text-gray-600">Strong performance in iGCSE examinations with outstanding results</p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/academics">View Details →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovative Projects</h3>
                <p className="text-gray-600">Creative solutions and technical projects showcasing problem-solving skills</p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/projects">Explore Projects →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Honours & Awards</h3>
                <p className="text-gray-600">Recognition for academic achievements and extracurricular excellence</p>
                <Button asChild variant="link" className="mt-4">
                  <Link to="/awards">View Awards →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
