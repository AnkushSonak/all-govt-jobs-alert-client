
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";

const categories = [
  { name: "Banking", count: 150, icon: "🏦", description: "Government bank jobs including clerks, officers, and managers", slug: "banking" },
  { name: "Railways", count: 200, icon: "🚆", description: "Indian Railways recruitment for engineers, clerks, and technicians", slug: "railways" },
  { name: "SSC", count: 180, icon: "📚", description: "Staff Selection Commission jobs for central government positions", slug: "ssc" },
  { name: "UPSC", count: 45, icon: "🏛️", description: "Civil services and other competitive examinations", slug: "upsc" },
  { name: "Healthcare", count: 120, icon: "🏥", description: "Medical and healthcare jobs in government hospitals", slug: "healthcare" },
  { name: "Defense", count: 90, icon: "⚔️", description: "Army, Navy, Air Force and paramilitary recruitment", slug: "defense" },
  { name: "Education", count: 85, icon: "🎓", description: "Teaching and academic positions in government institutions", slug: "education" },
  { name: "Engineering", count: 75, icon: "⚙️", description: "Technical and engineering roles in PSUs and government", slug: "engineering" },
  { name: "Police", count: 60, icon: "👮", description: "State and central police force recruitment", slug: "police" },
  { name: "Legal", count: 35, icon: "⚖️", description: "Judicial and legal services in government", slug: "legal" }
];

const Categories = () => {
  return (
    <>
      <SEO 
        title="Government Job Categories - Banking, Railways, SSC, UPSC | GovJobs Portal"
        description="Browse government jobs by category. Find opportunities in Banking, Railways, SSC, UPSC, Healthcare, Defense and more categories."
        url="https://govjobs-portal.com/categories"
        canonical="https://govjobs-portal.com/categories"
      />
      
      <div className="min-h-screen bg-gray-50 text-sm">
        {/* Header */}
        <header className="bg-white shadow-md border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">GovJobs Portal</h1>
                  <p className="text-gray-500 text-xs">Your Gateway to Government Careers</p>
                </div>
              </Link>

              <nav className="hidden md:flex space-x-6 text-sm">
                <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                <Link to="/jobs" className="text-gray-600 hover:text-blue-600">All Jobs</Link>
                <Link to="/categories" className="text-blue-600 font-medium">Categories</Link>
                <Link to="/states" className="text-gray-600 hover:text-blue-600">States</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Page Header */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Job Categories</h2>
            <p className="text-gray-600">Browse government jobs by category to find opportunities that match your field</p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link to={`/categories/${category.slug}`} key={category.slug}>
                  <Card className="h-full hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-200 bg-white">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{category.icon}</div>
                          <div>
                            <CardTitle className="text-lg text-gray-900">{category.name}</CardTitle>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                          {category.count} Jobs
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
