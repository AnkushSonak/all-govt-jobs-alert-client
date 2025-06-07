import { useState } from "react";
import { Search, MapPin, Calendar, Building2, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { JobCard } from "@/components/JobCard";
import { FilterSection } from "@/components/FilterSection";
import { StatsSection } from "@/components/StatsSection";
import { SEO } from "@/components/SEO";
import { generateWebsiteStructuredData } from "@/utils/structuredData";
import { Link } from "react-router-dom";

// Mock data - in real implementation, this would come from your PostgreSQL database
const mockJobs = [
  {
    id: 1,
    title: "Assistant Manager - State Bank of India",
    department: "Banking",
    location: "Mumbai, Maharashtra",
    qualification: "Graduate",
    applyDeadline: "2025-01-15",
    totalPosts: 250,
    sourceUrl: "https://sbi.co.in/careers",
    category: "Banking",
    isNew: true,
    slug: "assistant-manager-sbi-mumbai"
  },
  {
    id: 2,
    title: "Junior Engineer - Indian Railways",
    department: "Railways",
    location: "Delhi, NCR",
    qualification: "Diploma/B.Tech",
    applyDeadline: "2025-01-20",
    totalPosts: 500,
    sourceUrl: "https://indianrailways.gov.in",
    category: "Engineering",
    isNew: true,
    slug: "junior-engineer-indian-railways-delhi"
  },
  {
    id: 3,
    title: "Staff Nurse - All India Institute of Medical Sciences",
    department: "Healthcare",
    location: "New Delhi",
    qualification: "B.Sc Nursing",
    applyDeadline: "2025-01-25",
    totalPosts: 100,
    sourceUrl: "https://aiims.edu",
    category: "Healthcare",
    isNew: false,
    slug: "staff-nurse-aiims-delhi"
  },
  {
    id: 4,
    title: "Assistant Professor - University Grants Commission",
    department: "Education",
    location: "Various States",
    qualification: "Ph.D",
    applyDeadline: "2025-02-01",
    totalPosts: 75,
    sourceUrl: "https://ugc.ac.in",
    category: "Education",
    isNew: false,
    slug: "assistant-professor-ugc-various"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !selectedState || selectedState === "all" || job.location.includes(selectedState);
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    
    return matchesSearch && matchesState && matchesCategory;
  });

  const pageTitle = "Latest Government Jobs 2025 - Banking, Railways, SSC, UPSC | GovJobs Portal";
  const pageDescription = "Find latest government job notifications across India. 500+ current openings in Banking, Railways, SSC, UPSC, and State Government jobs with official application links.";

  return (
    <>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        url="https://govjobs-portal.com"
        type="website"
        structuredData={generateWebsiteStructuredData()}
        canonical="https://govjobs-portal.com"
      />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-primary-foreground" role="banner">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                <Link to="/" aria-label="GovJobs Portal - Home">GovJobs Portal</Link>
              </h1>
              <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Main navigation">
                <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
                <Link to="/jobs" className="hover:text-blue-200 transition-colors">All Jobs</Link>
                <Link to="/categories" className="hover:text-blue-200 transition-colors">Categories</Link>
                <Link to="/states" className="hover:text-blue-200 transition-colors">By State</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12" role="main">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Find Your Dream Government Job
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover the latest government job opportunities across India. 
                Fast, reliable, and always up-to-date with official notifications.
              </p>
            </div>

            {/* Search Section */}
            <section aria-label="Job search">
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-6">
                  <form role="search" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-2">
                        <div className="relative">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" aria-hidden="true" />
                          <Input
                            placeholder="Search jobs by title, department..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                            aria-label="Search government jobs"
                          />
                        </div>
                      </div>
                      <Select value={selectedState} onValueChange={setSelectedState}>
                        <SelectTrigger aria-label="Select state">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All States</SelectItem>
                          <SelectItem value="Delhi">Delhi</SelectItem>
                          <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="Karnataka">Karnataka</SelectItem>
                          <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button type="submit" className="w-full">
                        <Search className="h-4 w-4 mr-2" aria-hidden="true" />
                        Search Jobs
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </section>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Latest Jobs Section */}
        <section className="py-12" aria-label="Latest government jobs">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Filters Sidebar */}
              <aside className="md:w-1/4" aria-label="Job filters">
                <FilterSection 
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </aside>

              {/* Jobs Listing */}
              <main className="md:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Latest Government Jobs</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{filteredJobs.length} jobs found</span>
                  </div>
                </div>

                <div className="grid gap-4" role="list" aria-label="Job listings">
                  {filteredJobs.map((job) => (
                    <article key={job.id} role="listitem">
                      <JobCard job={job} />
                    </article>
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedState("");
                        setSelectedCategory("");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </main>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-12" role="contentinfo">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">GovJobs Portal</h4>
                <p className="text-gray-400">
                  Your trusted source for government job notifications across India.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Quick Links</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/latest" className="hover:text-white">Latest Jobs</Link></li>
                  <li><Link to="/admit-cards" className="hover:text-white">Admit Cards</Link></li>
                  <li><Link to="/results" className="hover:text-white">Results</Link></li>
                  <li><Link to="/syllabus" className="hover:text-white">Syllabus</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Categories</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/banking" className="hover:text-white">Banking</Link></li>
                  <li><Link to="/railways" className="hover:text-white">Railways</Link></li>
                  <li><Link to="/ssc" className="hover:text-white">SSC</Link></li>
                  <li><Link to="/upsc" className="hover:text-white">UPSC</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Contact</h5>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: info@govjobs.com</li>
                  <li>Phone: +91 98765 43210</li>
                  <li>Address: New Delhi, India</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
              <p>&copy; 2025 GovJobs Portal. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
