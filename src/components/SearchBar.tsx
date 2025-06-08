
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
  suggestions?: string[];
}

export const SearchBar = ({ searchTerm, setSearchTerm, onSearch, suggestions = [] }: SearchBarProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock suggestions based on common government job searches
  const defaultSuggestions = [
    "Bank Jobs", "Railway Jobs", "SSC Jobs", "UPSC Jobs", "Police Jobs",
    "Teacher Jobs", "Clerk Jobs", "Engineer Jobs", "Assistant Manager",
    "Junior Engineer", "Staff Nurse", "Assistant Professor"
  ];

  const allSuggestions = [...defaultSuggestions, ...suggestions];

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 8));
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    onSearch();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    onSearch();
  };

  const clearSearch = () => {
    setSearchTerm("");
    setShowSuggestions(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search government jobs, departments, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => {
                if (searchTerm.length > 0 && filteredSuggestions.length > 0) {
                  setShowSuggestions(true);
                }
              }}
              className="pl-10 pr-10 h-11 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500 text-sm shadow-sm"
              aria-label="Search government jobs"
            />
            {searchTerm && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-slate-100"
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
          <Button 
            type="submit" 
            className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 shadow-lg border-slate-200 animate-fade-in">
          <CardContent className="p-0">
            <Command>
              <CommandList className="max-h-64">
                <CommandEmpty className="py-3 text-center text-sm text-slate-500">
                  No suggestions found.
                </CommandEmpty>
                <CommandGroup>
                  {filteredSuggestions.map((suggestion, index) => (
                    <CommandItem
                      key={index}
                      onSelect={() => handleSuggestionClick(suggestion)}
                      className="cursor-pointer px-4 py-2 text-sm hover:bg-slate-50 transition-colors duration-150"
                    >
                      <Search className="h-3 w-3 mr-3 text-slate-400" />
                      {suggestion}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
