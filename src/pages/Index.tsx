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
import { ThemeToggle } from "@/components/ThemeToggle";

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

  const displayedJobs = filteredJobs.slice(0, 15);

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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-primary rounded-lg mx-auto animate-pulse"></div>
          <h2 className="text-xl font-semibold text-foreground">Loading GovJobs Portal...</h2>
          <div className="w-48 h-2 bg-muted rounded-full mx-auto overflow-hidden">
            <div className="w-full h-full bg-primary rounded-full animate-pulse"></div>
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
      
      <div className="min-h-screen bg-background text-sm">
        {/* Enhanced Header with Search */}
        <header className="bg-card/90 backdrop-blur-sm shadow-sm border-b border-border sticky top-0 z-40 animate-fade-in" role="banner">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3 animate-fade-in">
                <div className="bg-gradient-to-r from-primary to-purple-600 p-2 rounded-lg shadow-sm">
                  <Building2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-foreground">
                    <Link to="/" aria-label="GovJobs Portal - Home">GovJobs Portal</Link>
                  </h1>
                  <p className="text-muted-foreground text-xs">Your Gateway to Government Careers</p>
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

              <div className="flex items-center gap-4">
                <nav className="hidden md:flex space-x-4 text-sm animate-fade-in" role="navigation" aria-label="Main navigation">
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">Home</Link>
                  <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">All Jobs</Link>
                  <Link to="/categories" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">Categories</Link>
                  <Link to="/states" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">States</Link>
                  <Link to="/admit-cards" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">Admit Cards</Link>
                  <Link to="/results" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">Results</Link>
                </nav>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section with Animation */}
        <section className="py-12 bg-hero relative overflow-hidden" role="main">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"hsl(var(--primary))\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-up">
                Find Your Dream Government Job
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-base animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover the latest government job opportunities across India with official notifications and application links.
              </p>
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/20 animate-bounce-gentle">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                2,450+ Active Positions Available
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories Section with Animation */}
        <section className="py-8 bg-card/50 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 animate-fade-in">
              <h3 className="text-xl font-bold text-foreground mb-2">Popular Categories</h3>
              <p className="text-muted-foreground text-sm">Browse jobs by category</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {featuredCategories.map((category, index) => (
                <Link to={`/categories/${category.slug}`} key={index}>
                  <Card className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border border-border bg-card/80 backdrop-blur-sm group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">{category.icon}</div>
                      <h4 className="font-semibold text-sm mb-1 text-foreground">{category.name}</h4>
                      <p className="text-xs text-muted-foreground">{category.count} Jobs</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Search Results Indicator */}
        {searchPerformed && searchTerm && (
          <section className="py-4 bg-primary/10 border-b border-primary/20 animate-fade-in" id="search-results">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
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
                  className="text-primary hover:text-primary hover:bg-primary/10 text-xs h-6"
                >
                  Clear
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Latest Jobs Section */}
        <section className="py-8 bg-professional" aria-label="Latest government jobs">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Mobile Filter Trigger */}
              <div className="lg:hidden animate-fade-in">
                <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full mb-4 text-sm border-border hover:bg-muted transition-all duration-200">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter Jobs
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 bg-card">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2 text-sm text-foreground">
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
                  <Card className="shadow-lg border-border bg-card/90 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                      <CardTitle className={`flex items-center gap-2 text-sm text-foreground transition-all duration-300 ${!isDesktopFilterOpen ? 'hidden' : ''}`}>
                        <Filter className="h-4 w-4" />
                        Filter Jobs
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsDesktopFilterOpen(!isDesktopFilterOpen)}
                        className="h-8 w-8 p-0 hover:bg-muted transition-all duration-200"
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
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 animate-fade-in">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Latest Government Jobs</h3>
                    <p className="text-muted-foreground mt-1 text-sm">Fresh opportunities updated daily</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card/90 backdrop-blur-sm border border-border px-3 py-2 rounded-lg shadow-sm">
                      <Users className="h-4 w-4" />
                      <span>{displayedJobs.length} jobs shown</span>
                    </div>
                    <Link to="/jobs">
                      <Button variant="outline" size="sm" className="text-sm border-border hover:bg-muted transition-all duration-200 hover:shadow-md">
                        View All Jobs
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-4" role="list" aria-label="Job listings">
                  {displayedJobs.map((job, index) => (
                    <article key={job.id} role="listitem" className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <JobCard job={job} />
                    </article>
                  ))}
                </div>

                {/* View All Jobs Button */}
                {filteredJobs.length > 15 && (
                  <div className="text-center mt-8 animate-fade-in">
                    <Link to="/jobs">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm transition-all duration-200 hover:shadow-lg px-8 py-3">
                        View All {filteredJobs.length} Jobs
                      </Button>
                    </Link>
                  </div>
                )}

                {filteredJobs.length === 0 && (
                  <div className="text-center py-16 animate-fade-in">
                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
                      <Building2 className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">No jobs found</h4>
                    <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                      We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms.
                    </p>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm transition-all duration-200 hover:shadow-lg"
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
      </div>
    </>
  );
};

export default Index;
