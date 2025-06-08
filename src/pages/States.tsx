
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";

const states = [
  { name: "Maharashtra", count: 185, capital: "Mumbai", slug: "maharashtra" },
  { name: "Delhi", count: 160, capital: "New Delhi", slug: "delhi" },
  { name: "Karnataka", count: 145, capital: "Bangalore", slug: "karnataka" },
  { name: "Tamil Nadu", count: 140, capital: "Chennai", slug: "tamil-nadu" },
  { name: "Gujarat", count: 125, capital: "Gandhinagar", slug: "gujarat" },
  { name: "Rajasthan", count: 120, capital: "Jaipur", slug: "rajasthan" },
  { name: "West Bengal", count: 115, capital: "Kolkata", slug: "west-bengal" },
  { name: "Uttar Pradesh", count: 200, capital: "Lucknow", slug: "uttar-pradesh" },
  { name: "Madhya Pradesh", count: 95, capital: "Bhopal", slug: "madhya-pradesh" },
  { name: "Punjab", count: 85, capital: "Chandigarh", slug: "punjab" },
  { name: "Haryana", count: 80, capital: "Chandigarh", slug: "haryana" },
  { name: "Kerala", count: 75, capital: "Thiruvananthapuram", slug: "kerala" },
  { name: "Andhra Pradesh", count: 70, capital: "Amaravati", slug: "andhra-pradesh" },
  { name: "Telangana", count: 90, capital: "Hyderabad", slug: "telangana" },
  { name: "Bihar", count: 65, capital: "Patna", slug: "bihar" },
  { name: "Odisha", count: 60, capital: "Bhubaneswar", slug: "odisha" }
];

const States = () => {
  return (
    <>
      <SEO 
        title="Government Jobs by State - All India State Wise Jobs | GovJobs Portal"
        description="Find government jobs by state across India. Browse state-wise job opportunities in Maharashtra, Delhi, Karnataka, Tamil Nadu and all states."
        url="https://govjobs-portal.com/states"
        canonical="https://govjobs-portal.com/states"
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
                <Link to="/categories" className="text-gray-600 hover:text-blue-600">Categories</Link>
                <Link to="/states" className="text-blue-600 font-medium">States</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Page Header */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Jobs by State</h2>
            <p className="text-gray-600">Find government job opportunities in your state or explore jobs across India</p>
          </div>
        </section>

        {/* States Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {states.map((state) => (
                <Link to={`/states/${state.slug}`} key={state.slug}>
                  <Card className="hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-200 bg-white">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base text-gray-900">{state.name}</CardTitle>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                          {state.count}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-xs">Capital: {state.capital}</p>
                      <p className="text-gray-500 text-xs mt-1">{state.count} active job openings</p>
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

export default States;
