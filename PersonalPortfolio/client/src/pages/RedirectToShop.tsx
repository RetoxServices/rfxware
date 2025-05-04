import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

// Shop redirect URL - in a real application, this might come from env vars or a CMS
const SHOP_URL = "https://example-shop.com";

const RedirectToShop = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Auto redirect to shop after a short delay
    const redirectTimeout = setTimeout(() => {
      window.location.href = SHOP_URL;
    }, 2000);

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-md w-full bg-gray-900 shadow-2xl rounded-lg p-8 text-center border border-gray-800">
        <div className="mb-6">
          <div className="h-24 w-24 mx-auto flex items-center justify-center bg-primary/20 rounded-full text-primary">
            <i className="fas fa-shopping-cart text-5xl"></i>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-white">Redirecting to Shop</h1>
        <p className="text-gray-400 mb-8">
          You're being redirected to our online shop. If you're not redirected automatically, please click the button below.
        </p>
        <div className="flex flex-col gap-4">
          <a 
            href={SHOP_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-md font-medium hover:shadow-lg transition-all inline-block"
          >
            Go to Shop
          </a>
          <Button 
            variant="outline"
            onClick={() => setLocation("/")}
            className="border-2 border-accent text-accent px-6 py-3 rounded-md font-medium hover:bg-accent/10 transition-all"
          >
            Return to DevPortal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RedirectToShop;
