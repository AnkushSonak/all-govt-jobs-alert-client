
import { Calendar, MapPin, Users, ExternalLink, Clock, Building2 } from "lucide-react";
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
    <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <Link 
                to={`/jobs/${job.slug}-${job.id}`} 
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 leading-tight"
              >
                {job.title}
              </Link>
              <p className="text-gray-600 text-sm mt-1">{job.department}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {job.isNew && (
              <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                New
              </Badge>
            )}
            {isUrgent && (
              <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200 text-xs animate-pulse">
                Urgent
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4 text-gray-400" />
            <span>{job.totalPosts} Posts</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="truncate">{job.qualification}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className={isUrgent ? "text-red-600 font-medium" : "text-gray-600"}>
              {daysLeft > 0 ? `${daysLeft} days left` : "Deadline passed"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs border-gray-200 text-gray-600 bg-gray-50">
            {job.category}
          </Badge>
          <div className="text-xs text-gray-500">
            Deadline: {new Date(job.applyDeadline).toLocaleDateString()}
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Link to={`/jobs/${job.slug}-${job.id}`} className="flex-1">
            <Button variant="outline" className="w-full h-10 text-sm border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl">
              View Details
            </Button>
          </Link>
          <a 
            href={job.sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full h-10 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
              <ExternalLink className="h-4 w-4 mr-2" />
              Apply Now
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
