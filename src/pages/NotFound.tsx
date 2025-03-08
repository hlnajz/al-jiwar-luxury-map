
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="max-w-md w-full text-center py-16 px-8 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg border border-gold/10">
        <div className="mb-6">
          <h1 className="font-primary text-6xl font-bold text-burgundy-dark mb-2">404</h1>
          <div className="w-20 h-0.5 bg-gold-dark mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground mb-8">
            The page you are looking for does not exist
          </p>
        </div>
        
        <Button 
          onClick={() => navigate('/')} 
          className="bg-gold-dark hover:bg-gold text-white button-hover"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
