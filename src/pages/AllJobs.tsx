
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
  const [isDesktopFilterOpen, setIsDesktopFilterOpen] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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
        {/* Header - Improved Mobile */}
        <header className="bg-white shadow-md border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg className="h-5 md:h-6 w-5 md:w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-gray-900">GovJobs Portal</h1>
                  <p className="text-gray-500 text-xs">Your Gateway to Government Careers</p>
                </div>
              </Link>

              <div className="flex-1 md:max-w-2xl md:mx-8">
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

              <nav className="hidden lg:flex space-x-6 text-sm">
                <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                <Link to="/jobs" className="text-blue-600 font-medium">All Jobs</Link>
                <Link to="/categories" className="text-gray-600 hover:text-blue-600">Categories</Link>
                <Link to="/states" className="text-gray-600 hover:text-blue-600">States</Link>
              </nav>

              {/* Mobile Menu */}
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="text-sm">
                      <Menu className="h-4 w-4 mr-2" />
                      Menu
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-72">
                    <SheetHeader>
                      <SheetTitle>Navigation</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4 mt-6">
                      <Link to="/" className="text-gray-600 hover:text-blue-600 px-2 py-2">Home</Link>
                      <Link to="/jobs" className="text-blue-600 font-medium px-2 py-2">All Jobs</Link>
                      <Link to="/categories" className="text-gray-600 hover:text-blue-600 px-2 py-2">Categories</Link>
                      <Link to="/states" className="text-gray-600 hover:text-blue-600 px-2 py-2">States</Link>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        {/* Page Header - Better Mobile */}
        <section className="py-6 md:py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">All Government Jobs</h2>
            <p className="text-gray-600 text-sm md:text-base">Complete list of available government job opportunities</p>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
              {/* Mobile Filter */}
              <div className="lg:hidden">
                <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full mb-4 text-sm">
                      <Filter className="h-4 w-4 mr-2" />
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

              {/* Desktop Filter with Toggle - Same as Home Page */}
              <aside className={`hidden lg:block transition-all duration-300 ${isDesktopFilterOpen ? 'lg:w-1/4' : 'lg:w-auto'}`}>
                <div className="sticky top-6">
                  <Card className="shadow-sm border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                      <CardTitle className={`flex items-center gap-2 text-sm transition-all duration-300 ${!isDesktopFilterOpen ? 'hidden' : ''}`}>
                        <Filter className="h-4 w-4" />
                        Filter Jobs
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsDesktopFilterOpen(!isDesktopFilterOpen)}
                        className="h-8 w-8 p-0 hover:bg-gray-100 transition-all duration-200"
                      >
                        <Menu className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    {isDesktopFilterOpen && (
                      <CardContent className="animate-fade-in">
                        <FilterSection 
                          selectedCategory={selectedCategory}
                          setSelectedCategory={setSelectedCategory}
                        />
                      </CardContent>
                    )}
                  </Card>
                </div>
              </aside>

              {/* Jobs List */}
              <main className={`transition-all duration-300 ${isDesktopFilterOpen ? 'lg:w-3/4' : 'lg:w-full'}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-3">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                    <Users className="h-3 md:h-4 w-3 md:w-4" />
                    <span>{filteredJobs.length} jobs found</span>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
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
