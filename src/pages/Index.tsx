
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
  const [isDesktopFilterOpen, setIsDesktopFilterOpen] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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
    { name: "Banking", count: "150+", icon: "🏦", slug: "banking" },
    { name: "Railways", count: "200+", icon: "🚆", slug: "railways" },
    { name: "SSC", count: "180+", icon: "📚", slug: "ssc" },
    { name: "UPSC", count: "45+", icon: "🏛️", slug: "upsc" },
    { name: "Healthcare", count: "120+", icon: "🏥", slug: "healthcare" },
    { name: "Defense", count: "90+", icon: "⚔️", slug: "defense" }
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
      
      <div className="min-h-screen bg-slate-50 text-sm">
        {/* Enhanced Header with Search */}
        <header className="bg-white shadow-sm border-b border-slate-200" role="banner">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-900">
                    <Link to="/" aria-label="GovJobs Portal - Home">GovJobs Portal</Link>
                  </h1>
                  <p className="text-slate-500 text-xs">Your Gateway to Government Careers</p>
                </div>
              </div>

              {/* Search in Header */}
              <div className="flex-1 max-w-xl mx-6">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" aria-hidden="true" />
                  <Input
                    placeholder="Search government jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-9 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-sm"
                    aria-label="Search government jobs"
                  />
                </div>
              </div>

              <nav className="hidden md:flex space-x-4 text-sm" role="navigation" aria-label="Main navigation">
                <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors px-2 py-1">Home</Link>
                <Link to="/jobs" className="text-slate-600 hover:text-blue-600 transition-colors px-2 py-1">All Jobs</Link>
                <Link to="/categories" className="text-slate-600 hover:text-blue-600 transition-colors px-2 py-1">Categories</Link>
                <Link to="/states" className="text-slate-600 hover:text-blue-600 transition-colors px-2 py-1">States</Link>
                <Link to="/admit-cards" className="text-slate-600 hover:text-blue-600 transition-colors px-2 py-1">Admit Cards</Link>
                <Link to="/results" className="text-slate-600 hover:text-blue-600 transition-colors px-2 py-1">Results</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Simplified Hero Section */}
        <section className="py-8 bg-gradient-to-r from-blue-50 to-slate-50" role="main">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Find Your Dream Government Job
              </h2>
              <p className="text-slate-600 mb-4 max-w-xl mx-auto text-sm">
                Discover the latest government job opportunities across India with official notifications and application links.
              </p>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-medium border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                2,450+ Active Positions Available
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories Section */}
        <section className="py-6 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Popular Categories</h3>
              <p className="text-slate-600 text-xs">Browse jobs by category</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {featuredCategories.map((category, index) => (
                <Link to={`/categories/${category.slug}`} key={index}>
                  <Card className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md border border-slate-200 bg-white hover:bg-slate-50">
                    <CardContent className="p-3 text-center">
                      <div className="text-xl mb-1">{category.icon}</div>
                      <h4 className="font-semibold text-xs mb-0.5 text-slate-900">{category.name}</h4>
                      <p className="text-xs text-slate-500">{category.count} Jobs</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Jobs Section */}
        <section className="py-6 bg-slate-50" aria-label="Latest government jobs">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Mobile Filter Trigger */}
              <div className="lg:hidden">
                <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full mb-4 text-sm border-slate-200 hover:bg-slate-100">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter Jobs
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 bg-white">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2 text-sm text-slate-900">
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

              {/* Desktop Sidebar with Toggle */}
              <aside className={`hidden lg:block transition-all duration-300 ${isDesktopFilterOpen ? 'lg:w-1/4' : 'lg:w-auto'}`} aria-label="Job filters">
                <div className="sticky top-6">
                  <Card className="shadow-sm border-slate-200 bg-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                      <CardTitle className={`flex items-center gap-2 text-sm text-slate-900 transition-all duration-300 ${!isDesktopFilterOpen ? 'hidden' : ''}`}>
                        <Filter className="h-4 w-4" />
                        Filter Jobs
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsDesktopFilterOpen(!isDesktopFilterOpen)}
                        className="h-8 w-8 p-0 hover:bg-slate-100"
                      >
                        <Menu className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    {isDesktopFilterOpen && (
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
              <main className={`transition-all duration-300 ${isDesktopFilterOpen ? 'lg:w-3/4' : 'lg:w-full'}`}>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Latest Government Jobs</h3>
                    <p className="text-slate-600 mt-0.5 text-xs">Fresh opportunities updated daily</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-xs text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg">
                      <Users className="h-3 w-3" />
                      <span>{filteredJobs.length} jobs found</span>
                    </div>
                    <Link to="/jobs">
                      <Button variant="outline" size="sm" className="text-xs border-slate-200 hover:bg-slate-100">
                        View All Jobs
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-3" role="list" aria-label="Job listings">
                  {filteredJobs.map((job) => (
                    <article key={job.id} role="listitem" className="group">
                      <JobCard job={job} />
                    </article>
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-slate-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">No jobs found</h4>
                    <p className="text-slate-500 text-sm mb-4">
                      We couldn't find any jobs matching your criteria. Try adjusting your filters.
                    </p>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-sm"
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
        <footer className="bg-slate-900 text-white py-8" role="contentinfo">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Building2 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">GovJobs Portal</h4>
                    <p className="text-slate-400 text-xs">Career Gateway</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Your trusted source for government job notifications across India.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-sm mb-3 text-white">Quick Links</h5>
                <ul className="space-y-1 text-slate-400 text-xs">
                  <li><Link to="/jobs" className="hover:text-white transition-colors">Latest Jobs</Link></li>
                  <li><Link to="/admit-cards" className="hover:text-white transition-colors">Admit Cards</Link></li>
                  <li><Link to="/results" className="hover:text-white transition-colors">Results</Link></li>
                  <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-sm mb-3 text-white">Categories</h5>
                <ul className="space-y-1 text-slate-400 text-xs">
                  <li><Link to="/categories/banking" className="hover:text-white transition-colors">Banking</Link></li>
                  <li><Link to="/categories/railways" className="hover:text-white transition-colors">Railways</Link></li>
                  <li><Link to="/categories/ssc" className="hover:text-white transition-colors">SSC</Link></li>
                  <li><Link to="/categories/upsc" className="hover:text-white transition-colors">UPSC</Link></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-sm mb-3 text-white">States</h5>
                <ul className="space-y-1 text-slate-400 text-xs">
                  <li><Link to="/states/delhi" className="hover:text-white transition-colors">Delhi</Link></li>
                  <li><Link to="/states/maharashtra" className="hover:text-white transition-colors">Maharashtra</Link></li>
                  <li><Link to="/states/karnataka" className="hover:text-white transition-colors">Karnataka</Link></li>
                  <li><Link to="/states" className="hover:text-white transition-colors">All States</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-4 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-xs">&copy; 2025 GovJobs Portal. All rights reserved.</p>
              <div className="flex gap-4 mt-2 md:mt-0 text-xs">
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
