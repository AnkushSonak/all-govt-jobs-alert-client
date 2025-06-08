
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FilterSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  { name: "Banking", count: 45 },
  { name: "Railways", count: 32 },
  { name: "Healthcare", count: 28 },
  { name: "Education", count: 21 },
  { name: "Engineering", count: 19 },
  { name: "Police", count: 15 },
  { name: "Defense", count: 12 },
  { name: "Legal", count: 8 }
];

const quickFilters = [
  { name: "Closing Soon", icon: "🔥", count: 12 },
  { name: "Latest Jobs", icon: "⭐", count: 25 },
  { name: "Graduate Level", icon: "🎓", count: 35 },
  { name: "Remote Work", icon: "📍", count: 8 }
];

const states = [
  { name: "Maharashtra", count: 35 },
  { name: "Delhi", count: 28 },
  { name: "Karnataka", count: 22 },
  { name: "Tamil Nadu", count: 20 },
  { name: "Gujarat", count: 18 },
  { name: "Rajasthan", count: 15 }
];

export const FilterSection = ({ selectedCategory, setSelectedCategory }: FilterSectionProps) => {
  return (
    <div className="space-y-4">
      {/* Categories Filter */}
      <div>
        <h4 className="font-semibold text-sm text-slate-900 mb-3">Categories</h4>
        <div className="space-y-1">
          <Button
            variant={selectedCategory === "" ? "default" : "ghost"}
            className="w-full justify-start text-xs h-8 font-normal hover:bg-slate-100"
            onClick={() => setSelectedCategory("")}
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <Button
                variant={selectedCategory === category.name ? "default" : "ghost"}
                className="flex-1 justify-start text-xs h-8 font-normal hover:bg-slate-100"
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </Button>
              <Badge variant="secondary" className="ml-2 text-xs bg-slate-100 text-slate-600 border-slate-200">
                {category.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Filters */}
      <div className="border-t border-slate-200 pt-4">
        <h4 className="font-semibold text-sm text-slate-900 mb-3">Quick Filters</h4>
        <div className="space-y-1">
          {quickFilters.map((filter) => (
            <Button 
              key={filter.name}
              variant="outline" 
              className="w-full justify-start text-xs h-8 border-slate-200 hover:bg-slate-50"
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.name}
              <Badge variant="secondary" className="ml-auto text-xs bg-slate-100 text-slate-600 border-slate-200">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Popular States */}
      <div className="border-t border-slate-200 pt-4">
        <h4 className="font-semibold text-sm text-slate-900 mb-3">Popular States</h4>
        <div className="space-y-1">
          {states.map((state) => (
            <div key={state.name} className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                className="flex-1 justify-start text-xs h-8 font-normal hover:bg-slate-50"
              >
                {state.name}
              </Button>
              <Badge variant="outline" className="ml-2 text-xs border-slate-200 text-slate-600">
                {state.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
