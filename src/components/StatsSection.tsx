
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Building2 } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      value: "2,450+",
      label: "Active Jobs",
      description: "Current openings"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      value: "50,000+",
      label: "Total Posts",
      description: "Available positions"
    },
    {
      icon: <Building2 className="h-8 w-8 text-purple-600" />,
      value: "200+",
      label: "Departments",
      description: "Government sectors"
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      value: "28",
      label: "States/UTs",
      description: "Pan-India coverage"
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-500">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
