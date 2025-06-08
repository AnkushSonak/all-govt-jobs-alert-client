
import { useState, useEffect } from "react";
import { MapPin, Calendar, Building2, Users, Filter, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { JobCard } from "@/components/JobCard";
import { FilterSection } from "@/components/FilterSection";
import { SearchBar } from "@/components/SearchBar";
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
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = () => {
    setSearchPerformed(true);
    // Scroll to results section when search is performed
    setTimeout(() => {
      const resultsSection = document.getElementById('search-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto animate-pulse"></div>
          <h2 className="text-xl font-semibold text-slate-900">Loading GovJobs Portal...</h2>
          <div className="w-48 h-2 bg-slate-200 rounded-full mx-auto overflow-hidden">
            <div className="w-full h-full bg-blue-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-sm">
        {/* Enhanced Header with Search */}
        <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-40 animate-fade-in" role="banner">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3 animate-fade-in">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg shadow-sm">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-900">
                    <Link to="/" aria-label="GovJobs Portal - Home">GovJobs Portal</Link>
                  </h1>
                  <p className="text-slate-500 text-xs">Your Gateway to Government Careers</p>
                </div>
              </div>

              {/* Enhanced Search in Header */}
              <div className="flex-1 max-w-2xl mx-6 animate-slide-in-right">
                <SearchBar 
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  onSearch={handleSearch}
                />
              </div>

              <nav className="hidden md:flex space-x-4 text-sm animate-fade-in" role="navigation" aria-label="Main navigation">
                <Link to="/" className="text-slate-600 hover:text-blue-600 transition-all duration-200 px-2 py-1 rounded hover:bg-slate-50">Home</Link>
                <Link to="/jobs" className="text-slate-600 hover:text-blue-600 transition-all duration-200 px-2 py-1 rounded hover:bg-slate-50">All Jobs</Link>
                <Link to="/categories" className="text-slate-600 hover:text-blue-600 transition-all duration-200 px-2 py-1 rounded hover:bg-slate-50">Categories</Link>
                <Link to="/states" className="text-slate-600 hover:text-blue-600 transition-all duration-200 px-2 py-1 rounded hover:bg-slate-50">States</Link>
                <Link to="/admit-cards" className="text-slate-600 hover:text-blue-600 transition-all duration-200 px-2 py-1 rounded hover:bg-slate-50">Admit Cards</Link>
                <Link to="/results" className="text-slate-600 hover:text-blue-600 transition-all duration-200 px-2 py-1 rounded hover:bg-slate-50">Results</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section with Animation */}
        <section className="py-12 bg-gradient-to-r from-blue-50 via-white to-slate-50 relative overflow-hidden" role="main">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23e2e8f0\" fill-opacity=\"0.3\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-slide-in-up">
                Find Your Dream Government Job
              </h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-base animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover the latest government job opportunities across India with official notifications and application links.
              </p>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200 animate-bounce-gentle">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                2,450+ Active Positions Available
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories Section with Animation */}
        <section className="py-8 bg-white/50 backdrop-blur-sm border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 animate-fade-in">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Popular Categories</h3>
              <p className="text-slate-600 text-sm">Browse jobs by category</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {featuredCategories.map((category, index) => (
                <Link to={`/categories/${category.slug}`} key={index}>
                  <Card className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border border-slate-200 bg-white/80 backdrop-blur-sm group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">{category.icon}</div>
                      <h4 className="font-semibold text-sm mb-1 text-slate-900">{category.name}</h4>
                      <p className="text-xs text-slate-500">{category.count} Jobs</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Search Results Indicator */}
        {searchPerformed && searchTerm && (
          <section className="py-4 bg-blue-50 border-b border-blue-100 animate-fade-in" id="search-results">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-2 text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <p className="text-sm font-medium">
                  Showing {filteredJobs.length} results for "{searchTerm}"
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setSearchTerm("");
                    setSearchPerformed(false);
                  }}
                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 text-xs h-6"
                >
                  Clear
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Latest Jobs Section */}
        <section className="py-8 bg-gradient-to-b from-slate-50 to-white" aria-label="Latest government jobs">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Mobile Filter Trigger */}
              <div className="lg:hidden animate-fade-in">
                <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full mb-4 text-sm border-slate-200 hover:bg-slate-100 transition-all duration-200">
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
              <aside className={`hidden lg:block transition-all duration-300 animate-slide-in-left ${isDesktopFilterOpen ? 'lg:w-1/4' : 'lg:w-auto'}`} aria-label="Job filters">
                <div className="sticky top-24">
                  <Card className="shadow-lg border-slate-200 bg-white/90 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                      <CardTitle className={`flex items-center gap-2 text-sm text-slate-900 transition-all duration-300 ${!isDesktopFilterOpen ? 'hidden' : ''}`}>
                        <Filter className="h-4 w-4" />
                        Filter Jobs
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsDesktopFilterOpen(!isDesktopFilterOpen)}
                        className="h-8 w-8 p-0 hover:bg-slate-100 transition-all duration-200"
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

              {/* Enhanced Jobs Listing */}
              <main className={`transition-all duration-300 ${isDesktopFilterOpen ? 'lg:w-3/4' : 'lg:w-full'}`}>
                <div className="flex justify-between items-center mb-6 animate-fade-in">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Latest Government Jobs</h3>
                    <p className="text-slate-600 mt-1 text-sm">Fresh opportunities updated daily</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600 bg-white/90 backdrop-blur-sm border border-slate-200 px-3 py-2 rounded-lg shadow-sm">
                      <Users className="h-4 w-4" />
                      <span>{filteredJobs.length} jobs found</span>
                    </div>
                    <Link to="/jobs">
                      <Button variant="outline" size="sm" className="text-sm border-slate-200 hover:bg-slate-100 transition-all duration-200 hover:shadow-md">
                        View All Jobs
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-4" role="list" aria-label="Job listings">
                  {filteredJobs.map((job, index) => (
                    <article key={job.id} role="listitem" className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <JobCard job={job} />
                    </article>
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="text-center py-16 animate-fade-in">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
                      <Building2 className="h-10 w-10 text-slate-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">No jobs found</h4>
                    <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
                      We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms.
                    </p>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-sm transition-all duration-200 hover:shadow-lg"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedState("");
                        setSelectedCategory("");
                        setSearchPerformed(false);
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
        <footer className="bg-slate-900 text-white py-12 relative overflow-hidden" role="contentinfo">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="animate-fade-in">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">GovJobs Portal</h4>
                    <p className="text-slate-400 text-xs">Career Gateway</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Your trusted source for government job notifications across India.
                </p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h5 className="font-semibold text-sm mb-4 text-white">Quick Links</h5>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><Link to="/jobs" className="hover:text-white transition-colors duration-200">Latest Jobs</Link></li>
                  <li><Link to="/admit-cards" className="hover:text-white transition-colors duration-200">Admit Cards</Link></li>
                  <li><Link to="/results" className="hover:text-white transition-colors duration-200">Results</Link></li>
                  <li><Link to="/categories" className="hover:text-white transition-colors duration-200">Categories</Link></li>
                </ul>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h5 className="font-semibold text-sm mb-4 text-white">Categories</h5>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><Link to="/categories/banking" className="hover:text-white transition-colors duration-200">Banking</Link></li>
                  <li><Link to="/categories/railways" className="hover:text-white transition-colors duration-200">Railways</Link></li>
                  <li><Link to="/categories/ssc" className="hover:text-white transition-colors duration-200">SSC</Link></li>
                  <li><Link to="/categories/upsc" className="hover:text-white transition-colors duration-200">UPSC</Link></li>
                </ul>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h5 className="font-semibold text-sm mb-4 text-white">States</h5>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><Link to="/states/delhi" className="hover:text-white transition-colors duration-200">Delhi</Link></li>
                  <li><Link to="/states/maharashtra" className="hover:text-white transition-colors duration-200">Maharashtra</Link></li>
                  <li><Link to="/states/karnataka" className="hover:text-white transition-colors duration-200">Karnataka</Link></li>
                  <li><Link to="/states" className="hover:text-white transition-colors duration-200">All States</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center animate-fade-in">
              <p className="text-slate-400 text-sm">&copy; 2025 GovJobs Portal. All rights reserved.</p>
              <div className="flex gap-6 mt-3 md:mt-0 text-sm">
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors duration-200">Terms of Service</Link>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">Contact Us</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
