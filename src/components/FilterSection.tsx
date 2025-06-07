
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

const states = [
  { name: "Maharashtra", count: 35 },
  { name: "Delhi", count: 28 },
  { name: "Karnataka", count: 22 },
  { name: "Tamil Nadu", count: 20 },
  { name: "Gujarat", count: 18 },
  { name: "Rajasthan", count: 15 },
  { name: "West Bengal", count: 12 },
  { name: "Uttar Pradesh", count: 25 }
];

export const FilterSection = ({ selectedCategory, setSelectedCategory }: FilterSectionProps) => {
  return (
    <div className="space-y-6">
      {/* Categories Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant={selectedCategory === "" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setSelectedCategory("")}
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <Button
                variant={selectedCategory === category.name ? "default" : "ghost"}
                className="flex-1 justify-start"
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </Button>
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            🔥 Closing Soon
          </Button>
          <Button variant="outline" className="w-full justify-start">
            ⭐ Latest Jobs
          </Button>
          <Button variant="outline" className="w-full justify-start">
            🎓 Graduate Level
          </Button>
          <Button variant="outline" className="w-full justify-start">
            📍 Remote Work
          </Button>
        </CardContent>
      </Card>

      {/* Popular States */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular States</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {states.slice(0, 6).map((state) => (
            <div key={state.name} className="flex items-center justify-between">
              <Button variant="ghost" className="flex-1 justify-start">
                {state.name}
              </Button>
              <Badge variant="outline" className="ml-2">
                {state.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
