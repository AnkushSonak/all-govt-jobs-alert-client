
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import AllJobs from "./pages/AllJobs";
import Categories from "./pages/Categories";
import States from "./pages/States";
import AdmitCards from "./pages/AdmitCards";
import Results from "./pages/Results";
import JobDetail from "./pages/JobDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="govjobs-ui-theme">
        <div className="min-h-screen bg-background text-foreground">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/jobs" element={<AllJobs />} />
                <Route path="/jobs/:jobSlug" element={<JobDetail />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:categorySlug" element={<Categories />} />
                <Route path="/states" element={<States />} />
                <Route path="/states/:stateSlug" element={<States />} />
                <Route path="/admit-cards" element={<AdmitCards />} />
                <Route path="/results" element={<Results />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
