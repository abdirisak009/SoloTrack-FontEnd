const Footer = () => {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-green-500 text-white text-center py-13">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Culinary Journey Today
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
              Discover thousands of recipes, track your nutrition, and transform your relationship with food.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
                Download App
              </button>
              <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition">
                Browse Recipes
              </button>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-13">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Brand & Description */}
            <div>
              <h2 className="text-lg font-semibold text-orange-400">
                <span className="text-white">Sola</span>
                <span className="text-orange-400"> Food</span><p></p>
                <span className="text-white">Tracker</span>
                </h2>
              <p className="text-sm text-gray-400 mt-2">
                Your companion for a healthier <p></p>lifestyle through better nutrition<p></p> tracking.
              </p>
            </div>
  
            {/* Features Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Meal Planning</li>
                <li>Nutrition Analysis</li>
                <li>Weight Tracking</li>
                <li>Fitness Integration</li>
              </ul>
            </div>
  
            {/* Company Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
              </ul>
            </div>
  
            {/* Legal Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Legal</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>GDPR</li>
              </ul>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="text-center text-gray-500 text-sm mt-10">
            &copy; {new Date().getFullYear()} NutriTracker. All rights reserved.
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  