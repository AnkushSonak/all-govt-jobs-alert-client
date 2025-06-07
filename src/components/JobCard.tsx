
import { Calendar, MapPin, Users, ExternalLink, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Link 
                to={`/jobs/${job.slug}-${job.id}`} 
                className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                {job.title}
              </Link>
              {job.isNew && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  New
                </Badge>
              )}
              {isUrgent && (
                <Badge variant="destructive" className="animate-pulse">
                  Urgent
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground font-medium">{job.department}</p>
          </div>
          <Badge variant="outline" className="shrink-0">
            {job.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{job.totalPosts} Posts</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Qualification: {job.qualification}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className={isUrgent ? "text-red-600 font-medium" : ""}>
              {daysLeft > 0 ? `${daysLeft} days left` : "Deadline passed"}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link to={`/jobs/${job.slug}-${job.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <a 
            href={job.sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              Apply Now
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
