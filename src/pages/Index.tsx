
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users, Briefcase, TrendingUp, Bell, Star } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ThemeToggle } from "@/components/ThemeToggle";

const featuredJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Department of Electronics & IT",
    location: "New Delhi",
    qualification: "B.Tech/M.Tech in Computer Science",
    applyDeadline: "2025-01-15",
    totalPosts: 50,
    sourceUrl: "https://example.com",
    category: "Engineering",
    slug: "senior-software-engineer"
  },
  {
    id: 2,
    title: "Banking Associate",
    department: "State Bank of India",
    location: "Mumbai",
    qualification: "Graduate with Banking Experience",
    applyDeadline: "2025-01-20",
    totalPosts: 100,
    sourceUrl: "https://example.com",
    category: "Banking",
    slug: "banking-associate"
  },
  {
    id: 3,
    title: "Railway Technician",
    department: "Indian Railways",
    location: "Chennai",
    qualification: "ITI/Diploma in relevant field",
    applyDeadline: "2025-01-25",
    totalPosts: 75,
    sourceUrl: "https://example.com",
    category: "Railways",
    slug: "railway-technician"
  }
];

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
  return (
    <>
      <SEO 
        title="GovJobs Portal - Latest Government Jobs in India 2025"
        description="Find latest government job notifications for Banking, Railways, SSC, UPSC, State Government jobs. Apply for Sarkari Naukri with complete details."
        url="https://govjobs-portal.com"
        canonical="https://govjobs-portal.com"
      />
      
      <div className="min-h-screen bg-background text-sm">
        {/* Header */}
        <header className="bg-background shadow-md border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-primary p-2 rounded-lg">
                  <svg className="h-6 w-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">GovJobs Portal</h1>
                  <p className="text-muted-foreground text-xs">Your Gateway to Government Careers</p>
                </div>
              </Link>

              <div className="flex items-center gap-4">
                <nav className="hidden md:flex space-x-6 text-sm">
                  <Link to="/" className="text-primary font-medium">Home</Link>
                  <Link to="/jobs" className="text-muted-foreground hover:text-primary">All Jobs</Link>
                  <Link to="/categories" className="text-muted-foreground hover:text-primary">Categories</Link>
                  <Link to="/states" className="text-muted-foreground hover:text-primary">States</Link>
                  <Link to="/admit-cards" className="text-muted-foreground hover:text-primary">Admit Cards</Link>
                  <Link to="/results" className="text-muted-foreground hover:text-primary">Results</Link>
                </nav>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

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
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search jobs by title, department, or location..." 
                    className="pl-10 h-12"
                  />
                </div>
                <Button className="h-12 px-6">
                  Search Jobs
                </Button>
              </div>
            </div>

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

        {/* Job Categories */}
        <section className="py-12 bg-muted/50">
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

        {/* Footer */}
        <footer className="bg-muted border-t py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-primary p-1 rounded">
                    <svg className="h-4 w-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-foreground">GovJobs Portal</h4>
                </div>
                <p className="text-muted-foreground text-xs">
                  Your trusted source for government job opportunities across India.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-foreground mb-3 text-sm">Quick Links</h5>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/jobs" className="text-muted-foreground hover:text-primary">All Jobs</Link></li>
                  <li><Link to="/categories" className="text-muted-foreground hover:text-primary">Categories</Link></li>
                  <li><Link to="/states" className="text-muted-foreground hover:text-primary">States</Link></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-foreground mb-3 text-sm">Resources</h5>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/admit-cards" className="text-muted-foreground hover:text-primary">Admit Cards</Link></li>
                  <li><Link to="/results" className="text-muted-foreground hover:text-primary">Results</Link></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-foreground mb-3 text-sm">Contact</h5>
                <p className="text-muted-foreground text-xs">
                  For support and inquiries, please visit our help center.
                </p>
              </div>
            </div>
            
            <div className="border-t border-border mt-6 pt-6 text-center">
              <p className="text-muted-foreground text-xs">
                © 2025 GovJobs Portal. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
