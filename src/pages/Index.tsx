
import { useState, useEffect } from "react";
import { MapPin, Calendar, Building2, Users, Search, Briefcase, TrendingUp, Bell, Star, ArrowRight, Sparkles, Clock, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SEOOptimized } from "@/components/SEOOptimized";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { generateWebsiteStructuredData, generateOrganizationStructuredData } from "@/utils/enhancedStructuredData";
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
  { name: "Banking", count: 150, icon: "🏦", color: "from-blue-500 to-blue-600" },
  { name: "Railways", count: 200, icon: "🚆", color: "from-green-500 to-green-600" },
  { name: "SSC", count: 180, icon: "📚", color: "from-purple-500 to-purple-600" },
  { name: "UPSC", count: 45, icon: "🏛️", color: "from-orange-500 to-orange-600" },
  { name: "Healthcare", count: 120, icon: "🏥", color: "from-red-500 to-red-600" },
  { name: "Defense", count: 90, icon: "⚔️", color: "from-gray-500 to-gray-600" }
];

const stats = [
  { label: "Active Jobs", value: "2,450+", icon: Briefcase, color: "text-blue-600" },
  { label: "Government Departments", value: "150+", icon: Building2, color: "text-green-600" },
  { label: "States Covered", value: "28", icon: MapPin, color: "text-purple-600" },
  { label: "Success Rate", value: "85%", icon: TrendingUp, color: "text-orange-600" }
];

const features = [
  {
    icon: Shield,
    title: "100% Verified Jobs",
    description: "All job postings are verified from official government sources and updated in real-time for accuracy.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Get the latest job alerts and deadline reminders delivered instantly to never miss an opportunity.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Find opportunities that match your qualifications and accelerate your government career journey.",
    color: "from-purple-500 to-pink-500"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
  const keywords = "government jobs 2025, sarkari naukri, banking jobs, railway jobs, SSC jobs, UPSC jobs, latest government vacancy, india government jobs";

  // Enhanced structured data
  const combinedStructuredData = [
    generateWebsiteStructuredData(),
    generateOrganizationStructuredData()
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-2xl mx-auto animate-pulse shadow-lg"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Loading GovJobs Portal...</h2>
          <div className="w-64 h-2 bg-muted rounded-full mx-auto overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-primary to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOOptimized 
        title={pageTitle}
        description={pageDescription}
        url="https://govjobs-portal.com"
        type="website"
        keywords={keywords}
        structuredData={combinedStructuredData}
        canonical="https://govjobs-portal.com"
        publishedTime={new Date().toISOString()}
        modifiedTime={new Date().toISOString()}
      />
      
      <Header 
        showSearch={true}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-purple-600 text-white border-0 animate-fade-in">
              <Sparkles className="h-4 w-4 mr-2" />
              India's #1 Government Job Portal
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-slide-in-up">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Government Job
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              Discover thousands of verified government job opportunities across India. From banking to railways, find your perfect government position today.
            </p>
            
            {/* Search Bar */}
            <Card className="max-w-2xl mx-auto mb-16 animate-slide-in-up" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Search government jobs by department, location, or keyword..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 h-14 text-lg"
                      />
                    </div>
                  </div>
                  <Button 
                    onClick={handleSearch}
                    className="h-14 px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white text-lg font-semibold"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-in-up" style={{animationDelay: '0.6s'}}>
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Featured Jobs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-purple-600 text-white border-0">Featured</Badge>
            <h2 className="text-4xl font-bold mb-4">Premium Job Opportunities</h2>
            <p className="text-xl text-muted-foreground">Handpicked positions from top government departments</p>
          </div>
          
          <div className="space-y-6 max-w-6xl mx-auto">
            {featuredJobs.map((job, index) => (
              <div key={job.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <JobCard job={job} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/jobs">
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-3 text-lg font-semibold">
                View All Jobs
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      {/* Job Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">Categories</Badge>
            <h2 className="text-4xl font-bold mb-4">Browse by Department</h2>
            <p className="text-xl text-muted-foreground">Find opportunities in your field of expertise</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Link to={`/categories/${category.name.toLowerCase()}`} key={index}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">{category.icon}</div>
                    <h3 className="font-bold mb-2 text-lg">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">{category.count}</span> jobs available
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Latest Jobs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">Latest</Badge>
            <h2 className="text-4xl font-bold mb-4">Recently Posted Jobs</h2>
            <p className="text-xl text-muted-foreground">Fresh opportunities updated daily</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {mockJobs.slice(0, 8).map((job, index) => (
              <div key={job.id} className="animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                <JobCard job={job} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/jobs">
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-3 text-lg font-semibold">
                View All Latest Jobs
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose GovJobs Portal?</h2>
            <p className="text-xl text-muted-foreground">Your trusted partner for government career success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-muted rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Bell className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Never Miss Your Dream Job</h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Join 100,000+ job seekers who trust us for the latest government job notifications and career guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input 
                  placeholder="Enter your email address" 
                  className="flex-1 h-14 text-lg"
                />
                <Button className="h-14 px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-bold text-lg">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                ✨ Free forever • 📧 No spam • 🔐 Unsubscribe anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
