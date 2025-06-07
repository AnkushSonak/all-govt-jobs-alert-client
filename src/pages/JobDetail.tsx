import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SEO } from "@/components/SEO";
import { generateJobStructuredData, generateBreadcrumbStructuredData } from "@/utils/structuredData";
import { 
  Calendar, 
  MapPin, 
  Users, 
  ExternalLink, 
  Clock, 
  GraduationCap,
  Building2,
  ArrowLeft,
  Share2,
  BookOpen,
  DollarSign
} from "lucide-react";

// Mock job data - in real implementation, this would be fetched based on the job ID
const mockJobDetail = {
  id: 1,
  title: "Assistant Manager - State Bank of India",
  department: "State Bank of India",
  category: "Banking",
  location: "Mumbai, Maharashtra",
  qualification: "Graduate in any discipline",
  totalPosts: 250,
  applyDeadline: "2025-01-15",
  startDate: "2024-12-20",
  ageLimit: "21-30 years",
  salary: "₹31,705 - ₹45,950 per month",
  sourceUrl: "https://sbi.co.in/careers",
  officialNotification: "https://sbi.co.in/notification.pdf",
  applicationFee: "₹750 (₹125 for SC/ST/PWD)",
  selectionProcess: "Online Written Test + Interview",
  description: `
    State Bank of India invites applications from eligible candidates for the post of Assistant Manager. 
    This is a great opportunity to build a career in the banking sector with India's largest public sector bank.
  `,
  eligibility: [
    "Graduation in any discipline from a recognized university",
    "Age between 21-30 years as on 01.01.2025",
    "Valid score in SBI PO/Clerk examination or equivalent",
    "Computer proficiency certificate"
  ],
  importantDates: [
    { event: "Online Application Start", date: "2024-12-20" },
    { event: "Online Application End", date: "2025-01-15" },
    { event: "Admit Card Download", date: "2025-02-01" },
    { event: "Online Examination", date: "2025-02-15" },
    { event: "Interview (Tentative)", date: "2025-03-15" }
  ],
  howToApply: [
    "Visit the official website: sbi.co.in/careers",
    "Click on 'Current Openings' section",
    "Find 'Assistant Manager' recruitment notification",
    "Read the detailed notification carefully",
    "Click on 'Apply Online' button",
    "Fill the application form with correct details",
    "Upload required documents (Photo, Signature, etc.)",
    "Pay the application fee online",
    "Submit the application and take a printout"
  ]
};

const JobDetail = () => {
  const { jobSlug } = useParams();
  const job = mockJobDetail; // In real implementation, fetch job by ID from jobSlug

  const daysLeft = Math.ceil((new Date(job.applyDeadline).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
  const isUrgent = daysLeft <= 7;

  const pageTitle = `${job.title} - Apply Online | Government Job`;
  const pageDescription = `Apply for ${job.title} at ${job.department}. ${job.totalPosts} vacancies. Qualification: ${job.qualification}. Apply before ${job.applyDeadline}. Official application link provided.`;
  
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "https://govjobs-portal.com" },
    { name: "Jobs", url: "https://govjobs-portal.com/jobs" },
    { name: job.category, url: `https://govjobs-portal.com/category/${job.category.toLowerCase()}` },
    { name: job.title, url: `https://govjobs-portal.com/jobs/${jobSlug}` }
  ]);

  const jobStructuredData = generateJobStructuredData({
    ...job,
    slug: jobSlug || '',
    salary: job.salary,
    description: job.description
  });

  return (
    <>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        url={`https://govjobs-portal.com/jobs/${jobSlug}`}
        type="article"
        structuredData={[jobStructuredData, breadcrumbData]}
        canonical={`https://govjobs-portal.com/jobs/${jobSlug}`}
      />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-primary-foreground" role="banner">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold">GovJobs Portal</Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
                <Link to="/jobs" className="hover:text-blue-200 transition-colors">All Jobs</Link>
                <Link to="/categories" className="hover:text-blue-200 transition-colors">Categories</Link>
              </nav>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/jobs" className="hover:text-primary">Jobs</Link>
            <span>/</span>
            <span>{job.category}</span>
            <span>/</span>
            <span className="text-foreground">{job.title}</span>
          </nav>

          {/* Back Button */}
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <Link to="/">Back to Jobs</Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <main className="lg:col-span-2 space-y-6">
              {/* Job Header */}
              <article>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2" itemProp="title">{job.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline">{job.category}</Badge>
                          {isUrgent && (
                            <Badge variant="destructive" className="animate-pulse">
                              Urgent - {daysLeft} days left
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" aria-hidden="true" />
                            <span itemProp="hiringOrganization">{job.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" aria-hidden="true" />
                            <span itemProp="jobLocation">{job.location}</span>
                          </div>
                        </div>
                      </div>
                      <Button>
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Job
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </article>

              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Total Posts</p>
                        <p className="text-muted-foreground">{job.totalPosts} Vacancies</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Qualification</p>
                        <p className="text-muted-foreground">{job.qualification}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium">Age Limit</p>
                        <p className="text-muted-foreground">{job.ageLimit}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-medium">Salary</p>
                        <p className="text-muted-foreground">{job.salary}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Job Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>

              {/* Eligibility Criteria */}
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.eligibility.map((criteria, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Important Dates */}
              <Card>
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {job.importantDates.map((date, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{date.event}</span>
                        <Badge variant="outline">{date.date}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* How to Apply */}
              <Card>
                <CardHeader>
                  <CardTitle>How to Apply</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2">
                    {job.howToApply.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mt-0.5">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </main>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Apply Now Card */}
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="text-center">Apply for this Job</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Application Deadline</p>
                    <p className="font-bold text-lg">{job.applyDeadline}</p>
                    <p className={`text-sm ${isUrgent ? 'text-red-600' : 'text-muted-foreground'}`}>
                      {daysLeft > 0 ? `${daysLeft} days remaining` : "Deadline passed"}
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Application Fee</p>
                      <p className="font-medium">{job.applicationFee}</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Selection Process</p>
                      <p className="font-medium text-sm">{job.selectionProcess}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <a href={job.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Apply Now
                      </Button>
                    </a>
                    
                    <a href={job.officialNotification} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        View Notification
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Similar Jobs */}
              <Card>
                <CardHeader>
                  <CardTitle>Similar Jobs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <Link to={`/jobs/similar-job-${i}`} className="block">
                        <h4 className="font-medium text-sm mb-1">Senior Manager - Bank of India</h4>
                        <p className="text-xs text-muted-foreground mb-2">Banking • Delhi</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-green-600">45 Posts</span>
                          <span className="text-xs text-red-600">5 days left</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
