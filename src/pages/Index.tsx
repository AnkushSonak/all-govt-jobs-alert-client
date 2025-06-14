
import { useState, useEffect } from "react";
import { MapPin, Calendar, Building2, Users, Search, Briefcase, TrendingUp, Bell, Star, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SEOOptimized } from "@/components/SEOOptimized";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-purple-50 dark:from-primary/10 dark:via-background dark:to-purple-950/20 flex items-center justify-center">
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
    <>
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20">
        <Header 
          showSearch={true}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />

        {/* Hero Section - Enhanced Design */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-primary to-purple-600 text-white py-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium">India's #1 Government Job Portal</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-in-up">
                Your Dream
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Government Career
                </span>
                Starts Here
              </h1>
              
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                Discover thousands of verified government job opportunities across India. From banking to railways, find your perfect government position today.
              </p>
              
              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto mb-12 animate-slide-in-up" style={{animationDelay: '0.4s'}}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                        <Input
                          placeholder="Search government jobs by department, location, or keyword..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-12 h-14 text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 focus:border-white/50 rounded-xl backdrop-blur-sm"
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handleSearch}
                      className="h-14 px-8 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Search className="h-5 w-5 mr-2" />
                      Search Jobs
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-in-up" style={{animationDelay: '0.6s'}}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                      <stat.icon className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section - Enhanced */}
        <section className="py-20 bg-white dark:bg-slate-900 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-purple-600 text-white border-0">Featured</Badge>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Premium Job Opportunities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Handpicked positions from top government departments</p>
            </div>
            
            <div className="space-y-6 max-w-6xl mx-auto">
              {featuredJobs.map((job, index) => (
                <div key={job.id} className="group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"></div>
                    
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-6 flex-1">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                              <Link to={`/jobs/${job.slug}-${job.id}`}>
                                {job.title}
                              </Link>
                            </h3>
                            {job.isNew && (
                              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 animate-pulse">
                                New
                              </Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center">
                              <Building2 className="h-4 w-4 mr-2 text-primary" />
                              {job.department}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-primary" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-primary" />
                              {job.qualification}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-primary" />
                              {job.totalPosts} positions
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Link to={`/jobs/${job.slug}-${job.id}`}>
                          <Button variant="outline" size="sm" className="border-gray-300 hover:border-primary hover:text-primary transition-colors">
                            View Details
                          </Button>
                        </Link>
                        <a href={job.sourceUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            Apply Now
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/jobs">
                <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  View All Jobs
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Job Categories - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">Categories</Badge>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Browse by Department
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Find opportunities in your field of expertise</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <Link to={`/categories/${category.name.toLowerCase()}`} key={index}>
                  <div className="group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-110 border border-gray-200 dark:border-slate-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">{category.icon}</div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{category.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <span className="font-semibold text-primary">{category.count}</span> jobs available
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Jobs Section - Enhanced */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">Latest</Badge>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Recently Posted Jobs
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Fresh opportunities updated daily</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {mockJobs.slice(0, 8).map((job, index) => (
                <div key={job.id} className="group animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                              <Link to={`/jobs/${job.slug}-${job.id}`}>
                                {job.title}
                              </Link>
                            </h3>
                            {job.isNew && (
                              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                                New
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-primary" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-primary" />
                              Deadline: {new Date(job.applyDeadline).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                        {job.category}
                      </Badge>
                      <div className="flex items-center space-x-2">
                        <Link to={`/jobs/${job.slug}-${job.id}`}>
                          <Button variant="outline" size="sm" className="border-gray-300 hover:border-primary hover:text-primary">
                            Details
                          </Button>
                        </Link>
                        <a href={job.sourceUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
                            Apply
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/jobs">
                <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  View All Latest Jobs
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Information Section - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose GovJobs Portal?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Your trusted partner for government career success</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-8 group animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">100% Verified Jobs</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">All job postings are verified from official government sources and updated in real-time for accuracy.</p>
              </div>
              <div className="text-center p-8 group animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Bell className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Instant Notifications</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Get the latest job alerts and deadline reminders delivered instantly to never miss an opportunity.</p>
              </div>
              <div className="text-center p-8 group animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Career Growth</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Find opportunities that match your qualifications and accelerate your government career journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter - Enhanced */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 animate-bounce-gentle">
                <Bell className="h-10 w-10 text-yellow-300" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Never Miss Your Dream Job
              </h2>
              <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
                Join 100,000+ job seekers who trust us for the latest government job notifications and career guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input 
                  placeholder="Enter your email address" 
                  className="flex-1 h-14 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 rounded-xl text-lg focus:bg-white/20 focus:border-white/50"
                />
                <Button className="h-14 px-8 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-sm text-indigo-200 mt-4">
                ✨ Free forever • 📧 No spam • 🔐 Unsubscribe anytime
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
