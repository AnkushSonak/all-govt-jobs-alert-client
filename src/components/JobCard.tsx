
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
    <Card className="hover:shadow-lg transition-all duration-300 border border-slate-200 bg-white hover:bg-slate-50">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Link 
                to={`/jobs/${job.slug}-${job.id}`} 
                className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2"
              >
                {job.title}
              </Link>
              {job.isNew && (
                <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs border-green-200">
                  New
                </Badge>
              )}
              {isUrgent && (
                <Badge variant="destructive" className="animate-pulse text-xs bg-red-100 text-red-700 border-red-200">
                  Urgent
                </Badge>
              )}
            </div>
            <p className="text-slate-600 font-medium text-xs">{job.department}</p>
          </div>
          <Badge variant="outline" className="shrink-0 text-xs border-slate-200 text-slate-600 bg-slate-50">
            {job.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <MapPin className="h-3 w-3 text-slate-400" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Users className="h-3 w-3 text-slate-400" />
            <span>{job.totalPosts} Posts</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Calendar className="h-3 w-3 text-slate-400" />
            <span className="truncate">{job.qualification}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Clock className="h-3 w-3 text-slate-400" />
            <span className={isUrgent ? "text-red-600 font-medium" : "text-slate-600"}>
              {daysLeft > 0 ? `${daysLeft} days left` : "Deadline passed"}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Link to={`/jobs/${job.slug}-${job.id}`} className="flex-1">
            <Button variant="outline" className="w-full text-xs h-8 border-slate-200 hover:bg-slate-100 text-slate-700">
              View Details
            </Button>
          </Link>
          <a 
            href={job.sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full text-xs h-8 bg-blue-600 hover:bg-blue-700 text-white">
              <ExternalLink className="h-3 w-3 mr-1" />
              Apply Now
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
