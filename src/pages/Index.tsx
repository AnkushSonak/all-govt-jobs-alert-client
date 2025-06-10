
import { useState, useEffect } from "react";
import { MapPin, Calendar, Building2, Users, Filter, Menu, Bell, Star, TrendingUp, Briefcase, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { JobCard } from "@/components/JobCard";
import { FilterSection } from "@/components/FilterSection";
import { SearchBar } from "@/components/SearchBar";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
  },
  {
    id: 5,
    title: "Tax Assistant - Income Tax Department",
    department: "Finance",
    location: "Chennai, Tamil Nadu",
    qualification: "Graduate",
    applyDeadline: "2025-01-30",
    totalPosts: 200,
    sourceUrl: "https://incometax.gov.in",
    category: "Finance",
    isNew: true,
    slug: "tax-assistant-income-tax-chennai"
  },
  {
    id: 6,
    title: "Forest Guard - Ministry of Environment",
    department: "Environment",
    location: "Bangalore, Karnataka",
    qualification: "12th Pass",
    applyDeadline: "2025-02-05",
    totalPosts: 150,
    sourceUrl: "https://moef.gov.in",
    category: "Environment",
    isNew: false,
    slug: "forest-guard-environment-bangalore"
  },
  {
    id: 7,
    title: "Sub Inspector - Central Reserve Police Force",
    department: "Defense",
    location: "Hyderabad, Telangana",
    qualification: "Graduate",
    applyDeadline: "2025-02-10",
    totalPosts: 300,
    sourceUrl: "https://crpf.gov.in",
    category: "Defense",
    isNew: true,
    slug: "sub-inspector-crpf-hyderabad"
  },
  {
    id: 8,
    title: "Clerk - Postal Department",
    department: "Communications",
    location: "Kolkata, West Bengal",
    qualification: "12th Pass",
    applyDeadline: "2025-02-15",
    totalPosts: 180,
    sourceUrl: "https://indiapost.gov.in",
    category: "Communications",
    isNew: false,
    slug: "clerk-postal-department-kolkata"
  },
  {
    id: 9,
    title: "Scientist - Indian Space Research Organisation",
    department: "Research",
    location: "Ahmedabad, Gujarat",
    qualification: "M.Tech/Ph.D",
    applyDeadline: "2025-02-20",
    totalPosts: 50,
    sourceUrl: "https://isro.gov.in",
    category: "Research",
    isNew: true,
    slug: "scientist-isro-ahmedabad"
  },
  {
    id: 10,
    title: "Junior Translator - Ministry of External Affairs",
    department: "Foreign Affairs",
    location: "New Delhi",
    qualification: "Graduate with Language Skills",
    applyDeadline: "2025-02-25",
    totalPosts: 25,
    sourceUrl: "https://mea.gov.in",
    category: "Languages",
    isNew: false,
    slug: "junior-translator-mea-delhi"
  }
];

const featuredJobs = mockJobs.slice(0, 3);

const categories = [
  { name: "Banking", count: 150, icon: "🏦" },
  { name: "Railways", count: 200, icon: "🚆" },
  { name: "SSC", count: 180, icon: "📚" },
  { name: "UPSC", count: 45, icon: "🏛️" },
  { name: "Healthcare", count: 120, icon: "🏥" },
  { name: "Defense", count: 90, icon: "⚔️" }
];

const stats = [
  { label: "Active Jobs", value: "2,450+", icon: Briefcase },
  { label: "Government Departments", value: "150+", icon: Users },
  { label: "States Covered", value: "28", icon: MapPin },
  { label: "Success Rate", value: "85%", icon: TrendingUp }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = () => {
    // Redirect to jobs page with search parameters
    if (searchTerm) {
      window.location.href = `/jobs?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  const pageTitle = "Latest Government Jobs 2025 - Banking, Railways, SSC, UPSC | GovJobs Portal";
  const pageDescription = "Find latest government job notifications across India. 500+ current openings in Banking, Railways, SSC, UPSC, and State Government jobs with official application links.";

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
      
      <div className="min-h-screen bg-background">
        <Header 
          showSearch={true}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Government Job Board for 
                <span className="text-yellow-300"> All Sectors</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Discover thousands of government job opportunities across India. From banking to railways, 
                find your perfect career match with official notifications and direct application links.
              </p>
              
              {/* Enhanced Search Bar */}
              <div className="max-w-3xl mx-auto mb-10">
                <div className="bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="Search for government jobs, departments, or locations..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-12 h-14 text-lg border-0 focus:ring-2 focus:ring-blue-500 rounded-xl"
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handleSearch}
                      className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      Search Jobs
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <stat.icon className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-4">Trusted by leading government organizations</p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="h-8 bg-muted rounded flex items-center px-4 text-xs font-medium">SBI</div>
                <div className="h-8 bg-muted rounded flex items-center px-4 text-xs font-medium">Indian Railways</div>
                <div className="h-8 bg-muted rounded flex items-center px-4 text-xs font-medium">AIIMS</div>
                <div className="h-8 bg-muted rounded flex items-center px-4 text-xs font-medium">ISRO</div>
                <div className="h-8 bg-muted rounded flex items-center px-4 text-xs font-medium">UPSC</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Jobs</h2>
              <p className="text-muted-foreground text-lg">Hand-picked opportunities from top government departments</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-blue-600" />
                      </div>
                      {job.isNew && (
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          New
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{job.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{job.department}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Deadline: {new Date(job.applyDeadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{job.totalPosts} positions</span>
                      </div>
                    </div>
                    
                    <Link to={`/jobs/${job.slug}-${job.id}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/jobs">
                <Button variant="outline" size="lg" className="px-8 py-3 rounded-xl border-2 hover:bg-blue-50">
                  View All Featured Jobs
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* All Jobs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Latest Jobs</h2>
                <p className="text-muted-foreground">Complete list of latest government job opportunities</p>
              </div>
              <Link to="/jobs">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
                  View All {mockJobs.length}+ Jobs
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockJobs.slice(0, 10).map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm">{job.title}</h3>
                          <p className="text-muted-foreground text-xs">{job.department}</p>
                        </div>
                      </div>
                    </div>
                    {job.isNew && (
                      <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(job.applyDeadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{job.totalPosts} posts</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="text-xs">{job.category}</Badge>
                    </div>
                  </div>
                  
                  <Link to={`/jobs/${job.slug}-${job.id}`}>
                    <Button variant="outline" className="w-full text-xs h-8 rounded-lg hover:bg-blue-50 border-blue-200">
                      View Details
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
              <p className="text-muted-foreground text-lg">Find jobs in your field of interest</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <Link to={`/categories/${category.name.toLowerCase()}`} key={index}>
                  <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                    <p className="text-muted-foreground text-sm">{category.count} jobs</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Verified Jobs</h3>
                <p className="text-muted-foreground">All job postings are verified from official government sources and updated daily</p>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bell className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Daily Updates</h3>
                <p className="text-muted-foreground">Get the latest job notifications and deadline reminders delivered to your inbox</p>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Career Growth</h3>
                <p className="text-muted-foreground">Find opportunities that match your qualifications and career aspirations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Bell className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Job Update</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Get the latest government job notifications delivered directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email address" 
                  className="flex-1 h-12 bg-white border-0 rounded-xl text-gray-900"
                />
                <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-xl">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
