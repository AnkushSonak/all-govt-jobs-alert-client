
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, FileText } from "lucide-react";
import { SEO } from "@/components/SEO";

const results = [
  {
    id: 1,
    title: "SBI PO Result 2024",
    organization: "State Bank of India",
    resultDate: "2024-12-15",
    status: "Declared",
    category: "Banking",
    resultUrl: "https://sbi.co.in/result",
    cutoffMarks: "85.5"
  },
  {
    id: 2,
    title: "Railway ALP Result 2024",
    organization: "Indian Railways",
    resultDate: "2024-12-20",
    status: "Declared",
    category: "Railways",
    resultUrl: "https://indianrailways.gov.in/result",
    cutoffMarks: "78.2"
  },
  {
    id: 3,
    title: "SSC CHSL Result 2024",
    organization: "Staff Selection Commission",
    resultDate: "2025-01-05",
    status: "Expected",
    category: "SSC",
    resultUrl: "#",
    cutoffMarks: "TBA"
  },
  {
    id: 4,
    title: "UPSC NDA Result 2024",
    organization: "Union Public Service Commission",
    resultDate: "2025-01-10",
    status: "Expected",
    category: "UPSC",
    resultUrl: "#",
    cutoffMarks: "TBA"
  },
  {
    id: 5,
    title: "IBPS Clerk Result 2024",
    organization: "Institute of Banking Personnel Selection",
    resultDate: "2024-12-25",
    status: "Declared",
    category: "Banking",
    resultUrl: "https://ibps.in/result",
    cutoffMarks: "82.1"
  }
];

const Results = () => {
  return (
    <>
      <SEO 
        title="Government Exam Results - Banking, Railways, SSC, UPSC Results | GovJobs Portal"
        description="Check latest government exam results. Get Banking, Railways, SSC, UPSC and other government recruitment exam results with cut-off marks."
        url="https://govjobs-portal.com/results"
        canonical="https://govjobs-portal.com/results"
      />
      
      <div className="min-h-screen bg-gray-50 text-sm">
        {/* Header */}
        <header className="bg-white shadow-md border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">GovJobs Portal</h1>
                  <p className="text-gray-500 text-xs">Your Gateway to Government Careers</p>
                </div>
              </Link>

              <nav className="hidden md:flex space-x-6 text-sm">
                <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                <Link to="/jobs" className="text-gray-600 hover:text-blue-600">All Jobs</Link>
                <Link to="/categories" className="text-gray-600 hover:text-blue-600">Categories</Link>
                <Link to="/admit-cards" className="text-gray-600 hover:text-blue-600">Admit Cards</Link>
                <Link to="/results" className="text-blue-600 font-medium">Results</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Page Header */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Exam Results</h2>
            <p className="text-gray-600">Check latest government examination results and cut-off marks</p>
          </div>
        </section>

        {/* Results List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="space-y-4">
              {results.map((result) => (
                <Card key={result.id} className="border border-gray-200 bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-base text-gray-900">{result.title}</h3>
                          <Badge 
                            variant={result.status === "Declared" ? "default" : "secondary"}
                            className={result.status === "Declared" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                          >
                            {result.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {result.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{result.organization}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Result Date: {new Date(result.resultDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            <span>Cut-off: {result.cutoffMarks}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {result.status === "Declared" ? (
                          <a href={result.resultUrl} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-xs h-8">
                              <FileText className="h-3 w-3 mr-1" />
                              View Result
                            </Button>
                          </a>
                        ) : (
                          <Button disabled className="text-xs h-8">
                            Result Pending
                          </Button>
                        )}
                        <a href={result.resultUrl !== "#" ? result.resultUrl : "#"} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="text-xs h-8 border-gray-200">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Official Site
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Results;
