
import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-purple-600 p-2 rounded-lg">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg text-foreground">GovJobs Portal</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted source for the latest government job opportunities across India. 
              We help connect job seekers with their dream government careers.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  All Jobs
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Job Categories
                </Link>
              </li>
              <li>
                <Link to="/states" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  State-wise Jobs
                </Link>
              </li>
              <li>
                <Link to="/admit-cards" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Admit Cards
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Popular Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/banking" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Banking Jobs
                </Link>
              </li>
              <li>
                <Link to="/categories/railways" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Railway Jobs
                </Link>
              </li>
              <li>
                <Link to="/categories/ssc" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  SSC Jobs
                </Link>
              </li>
              <li>
                <Link to="/categories/upsc" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  UPSC Jobs
                </Link>
              </li>
              <li>
                <Link to="/categories/police" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Police Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">support@govjobsportal.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 GovJobs Portal. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
