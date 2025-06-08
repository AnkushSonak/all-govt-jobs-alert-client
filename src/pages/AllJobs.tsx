
import { useState } from "react";
import { Search, Filter, Menu, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { JobCard } from "@/components/JobCard";
import { FilterSection } from "@/components/FilterSection";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

// Extended mock data for all jobs
const allJobs = [
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
  // Add more jobs for demonstration
  {
    id: 5,
    title: "Clerk - Punjab National Bank",
    department: "Banking",
    location: "Various States",
    qualification: "Graduate",
    applyDeadline: "2025-01-30",
    totalPosts: 300,
    sourceUrl: "https://pnb.co.in",
    category: "Banking",
    isNew: false,
    slug: "clerk-pnb-various"
  },
  {
    id: 6,
    title: "Sub Inspector - Central Reserve Police Force",
    department: "Police",
    location: "All India",
    qualification: "Graduate",
    applyDeadline: "2025-02-05",
    totalPosts: 150,
    sourceUrl: "https://crpf.gov.in",
    category: "Police",
    isNew: true,
    slug: "sub-inspector-crpf-all-india"
  }
];

const AllJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO 
        title="All Government Jobs 2025 - Complete List | GovJobs Portal"
        description="Browse all available government job opportunities across India. Find banking, railways, SSC, UPSC and state government jobs with complete details."
        url="https://govjobs-portal.com/jobs"
        canonical="https://govjobs-portal.com/jobs"
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

              <div className="flex-1 max-w-2xl mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search all government jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-10 bg-gray-50 border-gray-200"
                  />
                </div>
              </div>

              <nav className="hidden md:flex space-x-6 text-sm">
                <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                <Link to="/jobs" className="text-blue-600 font-medium">All Jobs</Link>
                <Link to="/categories" className="text-gray-600 hover:text-blue-600">Categories</Link>
                <Link to="/states" className="text-gray-600 hover:text-blue-600">States</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Page Header */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Government Jobs</h2>
            <p className="text-gray-600">Complete list of available government job opportunities</p>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Mobile Filter */}
              <div className="lg:hidden">
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full mb-4 text-sm">
                      <Menu className="h-4 w-4 mr-2" />
                      Filter Jobs
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2 text-sm">
                        <Filter className="h-4 w-4" />
                        Filter Jobs
                      </SheetTitle>
                    </SheetHeader>
                    <div className="mt-4">
                      <FilterSection 
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Desktop Filter */}
              <aside className="hidden lg:block lg:w-1/4">
                <div className="sticky top-6">
                  <Card className="shadow-sm border-gray-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Filter className="h-4 w-4" />
                        Filter Jobs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <FilterSection 
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                      />
                    </CardContent>
                  </Card>
                </div>
              </aside>

              {/* Jobs List */}
              <main className="lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                    <Users className="h-3 w-3" />
                    <span>{filteredJobs.length} jobs found</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h4>
                    <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
                  </div>
                )}
              </main>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllJobs;
