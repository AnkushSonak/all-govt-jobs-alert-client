
import { useState } from "react";
import { Search, Filter, Menu, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { JobCard } from "@/components/JobCard";
import { FilterSection } from "@/components/FilterSection";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
      
      <div className="min-h-screen bg-gray-50">
        <Header 
          showSearch={true}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={() => {}}
        />

        {/* Page Header */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">All Government Jobs</h1>
              <p className="text-xl text-gray-600 mb-8">Browse complete list of available government job opportunities across India</p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg border border-gray-300 p-4 shadow-sm">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="Search all government jobs..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-12 h-12 text-lg border-0 focus:ring-2 focus:ring-blue-500 rounded-lg"
                        />
                      </div>
                    </div>
                    <Button className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Mobile Filter */}
              <div className="lg:hidden">
                <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full mb-6 h-12 text-sm border border-gray-300 rounded-lg">
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

              {/* Desktop Filter */}
              <aside className={`hidden lg:block transition-all duration-300 ${isDesktopFilterOpen ? 'lg:w-1/4' : 'lg:w-auto'}`}>
                <div className="sticky top-6">
                  <Card className="shadow-sm border border-gray-200 rounded-lg bg-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                      <CardTitle className={`flex items-center gap-2 text-lg transition-all duration-300 ${!isDesktopFilterOpen ? 'hidden' : ''}`}>
                        <Filter className="h-5 w-5" />
                        Filter Jobs
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsDesktopFilterOpen(!isDesktopFilterOpen)}
                        className="h-8 w-8 p-0 hover:bg-gray-100 transition-all duration-200 rounded-lg"
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
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Job Opportunities</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-lg border">
                      <Users className="h-4 w-4" />
                      <span>{filteredJobs.length} jobs found</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <Search className="h-10 w-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                    <p className="text-gray-600">Try adjusting your search criteria or filters</p>
                  </div>
                )}
              </main>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AllJobs;
