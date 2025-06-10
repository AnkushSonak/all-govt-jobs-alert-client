
import { Link } from "react-router-dom";
import { Building2, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  showSearch?: boolean;
  searchTerm?: string;
  setSearchTerm?: (term: string) => void;
  onSearch?: () => void;
}

export const Header = ({ 
  showSearch = false, 
  searchTerm = "", 
  setSearchTerm = () => {}, 
  onSearch = () => {} 
}: HeaderProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary to-purple-600 p-2 rounded-lg shadow-sm">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">
                <Link to="/" aria-label="GovJobs Portal - Home">GovJobs Portal</Link>
              </h1>
              <p className="text-muted-foreground text-xs">Your Gateway to Government Careers</p>
            </div>
          </div>

          {showSearch && (
            <div className="flex-1 max-w-2xl mx-6">
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search government jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-10 bg-background border-input"
                      aria-label="Search government jobs"
                    />
                  </div>
                  <Button type="submit" size="sm" className="h-10 w-10 p-0">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          )}

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-4 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-accent">
                Home
              </Link>
              <Link to="/jobs" className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-accent">
                All Jobs
              </Link>
              <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-accent">
                Categories
              </Link>
              <Link to="/states" className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-accent">
                States
              </Link>
              <Link to="/admit-cards" className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-accent">
                Admit Cards
              </Link>
              <Link to="/results" className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-accent">
                Results
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
