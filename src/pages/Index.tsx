
import { useState, useEffect } from "react";
import { MapPin, Calendar, Building2, Users, Search, Briefcase, TrendingUp, Bell, Star, ArrowRight, Sparkles, Clock, Award, Shield, Code, Database, Lock, Globe, Zap, Target } from "lucide-react";
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

const topCategories = [
  { 
    name: "Banking & Finance", 
    count: 850, 
    icon: Building2, 
    description: "Secure your future in financial institutions",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  { 
    name: "Railways & Transport", 
    count: 1200, 
    icon: Zap, 
    description: "Power the nation's transportation network",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  },
  { 
    name: "Defense & Security", 
    count: 650, 
    icon: Shield, 
    description: "Protect and serve the nation",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30"
  }
];

const hiringCompanies = [
  { name: "State Bank of India", logo: "🏦" },
  { name: "Indian Railways", logo: "🚆" },
  { name: "ISRO", logo: "🚀" },
  { name: "DRDO", logo: "🔬" },
  { name: "AIIMS", logo: "🏥" },
  { name: "Income Tax Dept", logo: "💼" }
];

const stats = [
  { label: "Active Jobs", value: "2,450+", icon: Briefcase, color: "text-blue-400" },
  { label: "Government Departments", value: "150+", icon: Building2, color: "text-green-400" },
  { label: "Success Rate", value: "85%", icon: TrendingUp, color: "text-purple-400" },
  { label: "Monthly Applications", value: "50K+", icon: Users, color: "text-orange-400" }
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
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto animate-pulse shadow-lg"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Loading GovJobs Portal...</h2>
          <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
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

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                <Sparkles className="h-4 w-4 mr-2" />
                India's Premier Government Job Platform
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white">Secure Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Government Career
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Access thousands of verified government job opportunities across India. From banking to defense, 
              find your perfect position with our comprehensive job portal.
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-3xl mx-auto mb-16">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="Search by department, location, or qualification..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-12 h-14 text-lg bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handleSearch}
                      className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold border-0"
                    >
                      <Search className="h-5 w-5 mr-2" />
                      Search Jobs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-800/50 rounded-xl mb-4 group-hover:bg-gray-700/50 transition-colors">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Job Categories Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Top Job Categories</h2>
            <p className="text-xl text-gray-400">Explore opportunities in high-demand sectors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topCategories.map((category, index) => (
              <Card key={index} className={`group bg-gradient-to-br ${category.color} border ${category.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800/30 rounded-2xl mx-auto mb-6 group-hover:bg-gray-700/30 transition-colors">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{category.name}</CardTitle>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{category.count}</div>
                  <p className="text-gray-400 text-sm">Open Positions</p>
                  <Button variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10">
                    View Jobs <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Companies Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-gray-400">Major government departments and institutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {hiringCompanies.map((company, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800 hover:bg-gray-800/30 transition-colors group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{company.logo}</div>
                  <p className="text-gray-300 text-sm font-medium">{company.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Featured</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Premium Opportunities</h2>
            <p className="text-xl text-gray-400">Handpicked positions from top departments</p>
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
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold border-0">
                View All Jobs
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose GovJobs Portal?</h2>
            <p className="text-xl text-gray-400">Advanced features for your government career success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-900/30 border-gray-800 hover:bg-gray-800/30 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-4">100% Verified Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed text-center">All job postings are verified from official government sources and updated in real-time for accuracy.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800 hover:bg-gray-800/30 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Bell className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-4">Instant Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed text-center">Get the latest job alerts and deadline reminders delivered instantly to never miss an opportunity.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800 hover:bg-gray-800/30 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-4">Smart Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed text-center">AI-powered job recommendations based on your qualifications and career preferences.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Bell className="h-10 w-10 text-blue-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Never Miss Your Dream Job</h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Join 100,000+ job seekers who trust us for the latest government job notifications and career guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input 
                  placeholder="Enter your email address" 
                  className="flex-1 h-14 text-lg bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                />
                <Button className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg border-0">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
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
