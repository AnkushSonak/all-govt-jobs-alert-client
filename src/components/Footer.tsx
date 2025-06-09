
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-1 rounded">
                <Building2 className="h-4 w-4 text-primary-foreground" />
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
  );
};
