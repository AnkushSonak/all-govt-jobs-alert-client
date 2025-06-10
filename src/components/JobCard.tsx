
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
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Building2 className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                <Link to={`/jobs/${job.slug}-${job.id}`} className="hover:text-blue-600">
                  {job.title}
                </Link>
              </h3>
              {job.isNew && (
                <Badge className="bg-green-100 text-green-700 border-green-200 text-xs flex-shrink-0">
                  New
                </Badge>
              )}
              {isUrgent && (
                <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200 text-xs flex-shrink-0">
                  Urgent
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
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
              <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-gray-50">
                {job.category}
              </Badge>
              <div className="text-xs text-gray-500">
                Deadline: {new Date(job.applyDeadline).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 flex-shrink-0 ml-4">
          <Link to={`/jobs/${job.slug}-${job.id}`}>
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              View Details
            </Button>
          </Link>
          <a href={job.sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <ExternalLink className="h-4 w-4 mr-1" />
              Apply
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
