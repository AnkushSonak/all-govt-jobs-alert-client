
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Download, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";

const admitCards = [
  {
    id: 1,
    title: "SBI Clerk Admit Card 2025",
    organization: "State Bank of India",
    examDate: "2025-01-20",
    downloadDate: "2025-01-10",
    status: "Available",
    category: "Banking",
    downloadUrl: "https://sbi.co.in/admitcard"
  },
  {
    id: 2,
    title: "Railway JE Admit Card 2025",
    organization: "Indian Railways",
    examDate: "2025-01-25",
    downloadDate: "2025-01-15",
    status: "Available",
    category: "Railways",
    downloadUrl: "https://indianrailways.gov.in/admitcard"
  },
  {
    id: 3,
    title: "SSC CGL Admit Card 2025",
    organization: "Staff Selection Commission",
    examDate: "2025-02-01",
    downloadDate: "2025-01-20",
    status: "Coming Soon",
    category: "SSC",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "UPSC CSE Admit Card 2025",
    organization: "Union Public Service Commission",
    examDate: "2025-02-10",
    downloadDate: "2025-01-25",
    status: "Coming Soon",
    category: "UPSC",
    downloadUrl: "#"
  }
];

const AdmitCards = () => {
  return (
    <>
      <SEO 
        title="Admit Cards Download - Government Exam Hall Tickets | GovJobs Portal"
        description="Download admit cards for government exams. Get hall tickets for Banking, Railways, SSC, UPSC and other government recruitment exams."
        url="https://govjobs-portal.com/admit-cards"
        canonical="https://govjobs-portal.com/admit-cards"
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
                <Link to="/admit-cards" className="text-blue-600 font-medium">Admit Cards</Link>
                <Link to="/results" className="text-gray-600 hover:text-blue-600">Results</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Page Header */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Admit Cards</h2>
            <p className="text-gray-600">Download admit cards and hall tickets for government examinations</p>
          </div>
        </section>

        {/* Admit Cards List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="space-y-4">
              {admitCards.map((card) => (
                <Card key={card.id} className="border border-gray-200 bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-base text-gray-900">{card.title}</h3>
                          <Badge 
                            variant={card.status === "Available" ? "default" : "secondary"}
                            className={card.status === "Available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                          >
                            {card.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {card.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{card.organization}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Exam Date: {new Date(card.examDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            <span>Available from: {new Date(card.downloadDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {card.status === "Available" ? (
                          <a href={card.downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-xs h-8">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          </a>
                        ) : (
                          <Button disabled className="text-xs h-8">
                            Coming Soon
                          </Button>
                        )}
                        <a href={card.downloadUrl} target="_blank" rel="noopener noreferrer">
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

export default AdmitCards;
