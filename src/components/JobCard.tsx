
import { Calendar, MapPin, Users, ExternalLink, Building2, Sparkles, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  qualification: string;
  applyDeadline: string;
  totalPosts: number;
  sourceUrl: string;
  category: string;
  isNew: boolean;
  slug: string;
}

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const daysLeft = Math.ceil((new Date(job.applyDeadline).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
  const isUrgent = daysLeft <= 7;

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-border bg-card relative overflow-hidden">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600 group-hover:h-2 transition-all duration-300"></div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            {/* Enhanced icon with gradient background */}
            <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-purple-600/10 dark:from-primary/20 dark:to-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-primary/10">
              <Building2 className="h-7 w-7 text-primary" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold text-foreground truncate group-hover:text-primary transition-colors">
                  <Link to={`/jobs/${job.slug}-${job.id}`} className="hover:text-primary transition-colors">
                    {job.title}
                  </Link>
                </h3>
                
                <div className="flex items-center gap-2 flex-shrink-0">
                  {job.isNew && (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs flex items-center gap-1 animate-pulse">
                      <Sparkles className="h-3 w-3" />
                      New
                    </Badge>
                  )}
                  {isUrgent && (
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 text-xs flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Urgent
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Building2 className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span className="truncate">{job.department}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span className="truncate">{job.qualification}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span>{job.totalPosts} positions</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge 
                  variant="outline" 
                  className="text-xs border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  {job.category}
                </Badge>
                <div className="text-xs text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Deadline: {new Date(job.applyDeadline).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2 flex-shrink-0 ml-4">
            <Link to={`/jobs/${job.slug}-${job.id}`}>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-primary/20 text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                View Details
              </Button>
            </Link>
            <a href={job.sourceUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Apply
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
