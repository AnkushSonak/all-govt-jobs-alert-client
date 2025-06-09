
import { useState, useEffect } from "react";
import { MapPin, Calendar, Building2, Users, Filter, Menu, Bell, Star, TrendingUp, Briefcase } from "lucide-react";
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
  { label: "Active Jobs", value: "1,200+", icon: Briefcase },
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
      
      <div className="min-h-screen bg-background text-sm">
        <Header 
          showSearch={true}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Your Dream <span className="text-primary">Government Job</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover thousands of government job opportunities across India. From banking to railways, 
              we bring you the latest notifications and updates.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Featured Jobs</h3>
                <p className="text-muted-foreground">Hand-picked opportunities from top government departments</p>
              </div>
              <Link to="/jobs">
                <Button variant="outline">
                  View All Jobs
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-all duration-300 border">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-base text-foreground mb-1">{job.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{job.department}</p>
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        {job.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-muted-foreground text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Deadline: {new Date(job.applyDeadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{job.totalPosts} positions</span>
                    </div>
                    <div className="pt-2">
                      <Link to={`/jobs/${job.slug}-${job.id}`}>
                        <Button className="w-full h-8 text-xs">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Jobs Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">All Government Jobs</h3>
                <p className="text-muted-foreground">Complete list of latest job opportunities</p>
              </div>
              <Link to="/jobs">
                <Button>
                  View All {mockJobs.length}+ Jobs
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockJobs.slice(0, 10).map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-all duration-300 border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">{job.title}</h4>
                        <p className="text-muted-foreground text-xs">{job.department}</p>
                      </div>
                      {job.isNew && (
                        <Badge variant="destructive" className="text-xs">
                          New
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(job.applyDeadline).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Link to={`/jobs/${job.slug}-${job.id}`}>
                        <Button variant="outline" size="sm" className="w-full text-xs">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Browse by Category</h3>
              <p className="text-muted-foreground">Find jobs in your field of interest</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Link to={`/categories/${category.name.toLowerCase()}`} key={index}>
                  <Card className="text-center hover:shadow-md transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4">
                      <div className="text-3xl mb-2">{category.icon}</div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{category.name}</h4>
                      <p className="text-muted-foreground text-xs">{category.count} jobs</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Verified Jobs</h4>
                  <p className="text-muted-foreground text-sm">All job postings are verified from official government sources</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Bell className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Daily Updates</h4>
                  <p className="text-muted-foreground text-sm">Get the latest job notifications updated every day</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Career Growth</h4>
                  <p className="text-muted-foreground text-sm">Find opportunities that match your career aspirations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-lg p-8 text-center">
              <Bell className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Never Miss a Job Update</h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
                Get the latest government job notifications delivered directly to your inbox
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email address" 
                  className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary">
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
