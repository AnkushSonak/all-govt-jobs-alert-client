
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchBar } from "@/components/SearchBar";

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
  return (
    <header className="bg-card/90 backdrop-blur-sm shadow-sm border-b border-border sticky top-0 z-40 animate-fade-in" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3 animate-fade-in">
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
            <div className="flex-1 max-w-2xl mx-6 animate-slide-in-right">
              <SearchBar 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={onSearch}
              />
            </div>
          )}

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-4 text-sm animate-fade-in" role="navigation" aria-label="Main navigation">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">Home</Link>
              <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">All Jobs</Link>
              <Link to="/categories" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">Categories</Link>
              <Link to="/states" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">States</Link>
              <Link to="/admit-cards" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">Admit Cards</Link>
              <Link to="/results" className="text-muted-foreground hover:text-primary transition-all duration-200 px-2 py-1 rounded hover:bg-muted">Results</Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
