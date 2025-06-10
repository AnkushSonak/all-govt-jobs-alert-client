
import { Calendar, MapPin, Users, ExternalLink, Building2 } from "lucide-react";
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
    <Card className="hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] border-border bg-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-foreground truncate">
                  <Link to={`/jobs/${job.slug}-${job.id}`} className="hover:text-primary transition-colors">
                    {job.title}
                  </Link>
                </h3>
                {job.isNew && (
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs flex-shrink-0 dark:bg-green-900 dark:text-green-100 dark:border-green-800">
                    New
                  </Badge>
                )}
                {isUrgent && (
                  <Badge variant="destructive" className="text-xs flex-shrink-0">
                    Urgent
                  </Badge>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Building2 className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{job.department}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{job.qualification}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>{job.totalPosts} positions</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {job.category}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  Deadline: {new Date(job.applyDeadline).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0 ml-4">
            <Link to={`/jobs/${job.slug}-${job.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            <a href={job.sourceUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
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
