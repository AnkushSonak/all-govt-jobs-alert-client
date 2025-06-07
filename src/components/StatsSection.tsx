
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Building2, Clock, Award } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      value: "2,450+",
      label: "Active Jobs",
      description: "Current openings",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      value: "50,000+",
      label: "Total Posts",
      description: "Available positions",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Building2 className="h-8 w-8 text-purple-600" />,
      value: "200+",
      label: "Departments",
      description: "Government sectors",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      value: "28",
      label: "States/UTs",
      description: "Pan-India coverage",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      value: "24/7",
      label: "Updates",
      description: "Real-time notifications",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      value: "100%",
      label: "Verified",
      description: "Authentic job listings",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GovJobs Portal?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of job seekers across India for reliable government job notifications
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${stat.bgColor} ${stat.borderColor} group`}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h4>
                <p className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-500">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Trusted by leading organizations</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-700">SBI</div>
            <div className="text-2xl font-bold text-gray-700">IRCTC</div>
            <div className="text-2xl font-bold text-gray-700">UPSC</div>
            <div className="text-2xl font-bold text-gray-700">SSC</div>
            <div className="text-2xl font-bold text-gray-700">AIIMS</div>
          </div>
        </div>
      </div>
    </section>
  );
};
