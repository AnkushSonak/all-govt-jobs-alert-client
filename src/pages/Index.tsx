import { useState } from "react";
import { Search, MapPin, Calendar, Building2, Users, TrendingUp, Filter, Star, Clock, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !selectedState || selectedState === "all" || job.location.includes(selectedState);
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    
    return matchesSearch && matchesState && matchesCategory;
  });

  const pageTitle = "Latest Government Jobs 2025 - Banking, Railways, SSC, UPSC | GovJobs Portal";
  const pageDescription = "Find latest government job notifications across India. 500+ current openings in Banking, Railways, SSC, UPSC, and State Government jobs with official application links.";

  // Featured categories for quick access
  const featuredCategories = [
    { name: "Banking", count: "150+", icon: "🏦", color: "bg-blue-50 border-blue-200 text-blue-700" },
    { name: "Railways", count: "200+", icon: "🚆", color: "bg-green-50 border-green-200 text-green-700" },
    { name: "SSC", count: "180+", icon: "📚", color: "bg-purple-50 border-purple-200 text-purple-700" },
    { name: "UPSC", count: "45+", icon: "🏛️", color: "bg-orange-50 border-orange-200 text-orange-700" },
    { name: "Healthcare", count: "120+", icon: "🏥", color: "bg-red-50 border-red-200 text-red-700" },
    { name: "Defense", count: "90+", icon: "⚔️", color: "bg-gray-50 border-gray-200 text-gray-700" }
  ];

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
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Enhanced Header */}
        <header className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground shadow-lg" role="banner">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Building2 className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">
                    <Link to="/" aria-label="GovJobs Portal - Home">GovJobs Portal</Link>
                  </h1>
                  <p className="text-blue-100 text-sm">Your Gateway to Government Careers</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
                <Link to="/" className="hover:text-blue-200 transition-colors flex items-center gap-2">
                  <span>Home</span>
                </Link>
                <Link to="/jobs" className="hover:text-blue-200 transition-colors">All Jobs</Link>
                <Link to="/categories" className="hover:text-blue-200 transition-colors">Categories</Link>
                <Link to="/states" className="hover:text-blue-200 transition-colors">By State</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <section className="py-16 relative overflow-hidden" role="main">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live Job Updates • 2,450+ Active Positions
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Find Your Dream
                <span className="gradient-text block">Government Job</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover the latest government job opportunities across India with official notifications, 
                application links, and expert guidance. Your career in public service starts here.
              </p>

              {/* Quick Stats */}
              <div className="flex justify-center gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2.4K+</div>
                  <div className="text-sm text-gray-600">Active Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Openings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">200+</div>
                  <div className="text-sm text-gray-600">Departments</div>
                </div>
              </div>
            </div>

            {/* Enhanced Search Section */}
            <section aria-label="Job search">
              <Card className="max-w-5xl mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form role="search" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Search Jobs
                        </label>
                        <div className="relative">
                          <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <Input
                            placeholder="Search by job title, department, or keyword..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 h-12 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            aria-label="Search government jobs"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <Select value={selectedState} onValueChange={setSelectedState}>
                          <SelectTrigger className="h-12 border-gray-200" aria-label="Select state">
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
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Search
                        </label>
                        <Button type="submit" className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                          <Search className="h-5 w-5 mr-2" aria-hidden="true" />
                          Find Jobs
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </section>
          </div>
        </section>

        {/* Featured Categories Section */}
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Popular Categories</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse jobs by category and find opportunities that match your expertise
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {featuredCategories.map((category, index) => (
                <Card key={index} className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 ${category.color}`}>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h4 className="font-semibold text-lg mb-2">{category.name}</h4>
                    <p className="text-sm font-medium">{category.count} Jobs</p>
                    <div className="flex justify-center mt-3">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Latest Jobs Section */}
        <section className="py-16 bg-white" aria-label="Latest government jobs">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Mobile Filter Trigger */}
              <div className="lg:hidden">
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full mb-6">
                      <Menu className="h-4 w-4 mr-2" />
                      Filter Jobs
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        Filter Jobs
                      </SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterSection 
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Desktop Sidebar with Toggle */}
              <aside className="hidden lg:block lg:w-1/4" aria-label="Job filters">
                <div className="sticky top-6">
                  <Card className="shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        Filter Jobs
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="h-8 w-8 p-0"
                      >
                        <Menu className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    {!isFilterOpen && (
                      <CardContent>
                        <FilterSection 
                          selectedCategory={selectedCategory}
                          setSelectedCategory={setSelectedCategory}
                        />
                      </CardContent>
                    )}
                  </Card>
                </div>
              </aside>

              {/* Enhanced Jobs Listing */}
              <main className={`${isFilterOpen ? 'lg:w-full' : 'lg:w-3/4'} transition-all duration-300`}>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Latest Government Jobs</h3>
                    <p className="text-gray-600 mt-2">Fresh opportunities updated daily</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                      <Users className="h-4 w-4" />
                      <span>{filteredJobs.length} jobs found</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Star className="h-4 w-4 mr-2" />
                      Save Search
                    </Button>
                  </div>
                </div>

                <div className="space-y-6" role="list" aria-label="Job listings">
                  {filteredJobs.map((job) => (
                    <article key={job.id} role="listitem" className="group">
                      <JobCard job={job} />
                    </article>
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="h-12 w-12 text-gray-400" />
                    </div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-2">No jobs found</h4>
                    <p className="text-gray-500 text-lg mb-6">
                      We couldn't find any jobs matching your criteria. Try adjusting your filters.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-blue-700"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedState("");
                        setSelectedCategory("");
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </main>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16" role="contentinfo">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">GovJobs Portal</h4>
                    <p className="text-gray-400 text-sm">Career Gateway</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Your trusted source for government job notifications across India. 
                  We help you find the perfect opportunity in public service.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-lg mb-4 text-white">Quick Links</h5>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/latest" className="hover:text-white transition-colors">Latest Jobs</Link></li>
                  <li><Link to="/admit-cards" className="hover:text-white transition-colors">Admit Cards</Link></li>
                  <li><Link to="/results" className="hover:text-white transition-colors">Results</Link></li>
                  <li><Link to="/syllabus" className="hover:text-white transition-colors">Syllabus</Link></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-lg mb-4 text-white">Categories</h5>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/banking" className="hover:text-white transition-colors">Banking</Link></li>
                  <li><Link to="/railways" className="hover:text-white transition-colors">Railways</Link></li>
                  <li><Link to="/ssc" className="hover:text-white transition-colors">SSC</Link></li>
                  <li><Link to="/upsc" className="hover:text-white transition-colors">UPSC</Link></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-lg mb-4 text-white">Contact Info</h5>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span>📧</span> info@govjobs.com
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📞</span> +91 98765 43210
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📍</span> New Delhi, India
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2025 GovJobs Portal. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
