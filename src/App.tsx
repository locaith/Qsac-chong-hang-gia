import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebsiteSettingsProvider } from "@/contexts/WebsiteSettingsContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import EditorialCharter from "./pages/EditorialCharter";
import Directive389 from "./pages/Directive389";
import StandardsLegal from "./pages/StandardsLegal";
import AnalysisDossier from "./pages/AnalysisDossier";
import TechSolutions from "./pages/TechSolutions";
import ComplianceEnterprises from "./pages/ComplianceEnterprises";
import Events from "./pages/Events";
import Library from "./pages/Library";
import Data from "./pages/Data";
import Video from "./pages/Video";
import DataSecurity from "./pages/DataSecurity";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <WebsiteSettingsProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gioi-thieu" element={<About />} />
              <Route path="/quy-che-bien-tap" element={<EditorialCharter />} />
              <Route path="/alo-389" element={<Directive389 />} />
              <Route path="/an-ninh-so" element={<StandardsLegal />} />
              <Route path="/giai-ma-ho-so" element={<AnalysisDossier />} />
              <Route path="/tmdt-ai" element={<TechSolutions />} />
              <Route path="/doanh-nghiep-so" element={<ComplianceEnterprises />} />
              <Route path="/su-kien" element={<Events />} />
              <Route path="/thu-vien" element={<Library />} />
              <Route path="/du-lieu" element={<Data />} />
              <Route path="/video" element={<Video />} />
              <Route path="/bao-mat-du-lieu" element={<DataSecurity />} />
              
              {/* Admin Authentication Routes */}
              <Route path="/login" element={<Login />} />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <Admin />
                  </ProtectedRoute>
                } 
              />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WebsiteSettingsProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
